"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import analysisData from "@/data/analysis-data.json";

interface StackCardData {
    id: number;
    title: string;
    description: string;
    background: string;
}

const ROTATIONS = [0, 1, 2, 3];
const DRAG_THRESHOLD = 100;

export function StackedCards() {
    const INITIAL_CARDS = analysisData.stackedCards;
    const [order, setOrder] = useState(INITIAL_CARDS.map((_, i) => i));
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [isSwapping, setIsSwapping] = useState<number | null>(null); // Track card moving to back

    const startPos = useRef({ x: 0, y: 0 });

    const handlePointerDown = (e: React.PointerEvent) => {
        if (isDragging || isSwapping !== null) return;
        setIsDragging(true);
        startPos.current = { x: e.clientX, y: e.clientY };
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging) return;
        setDragOffset({
            x: e.clientX - startPos.current.x,
            y: e.clientY - startPos.current.y,
        });
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        if (!isDragging) return;
        setIsDragging(false);

        const { x, y } = dragOffset;
        if (Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD) {
            const topCardId = order[0];
            setIsSwapping(topCardId);

            setTimeout(() => {
                setOrder((prev) => {
                    const newOrder = [...prev];
                    const topIdx = newOrder.shift()!;
                    newOrder.push(topIdx);
                    return newOrder;
                });
                setIsSwapping(null);
                setDragOffset({ x: 0, y: 0 });
            }, 400);
        } else {
            setDragOffset({ x: 0, y: 0 });
        }

        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    };

    return (
        <div className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden">
            <div
                className="relative w-full max-w-[478px]"
                style={{ height: "272.75px", perspective: "1000px" }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
            >
                {order.map((cardIndex, position) => {
                    const card = INITIAL_CARDS[cardIndex];
                    const isTop = position === 0;
                    const isBeingSentToBack = isSwapping === cardIndex;

                    let zIndex = INITIAL_CARDS.length - position;
                    if (isBeingSentToBack) zIndex = 0;

                    const rotation = ROTATIONS[position];
                    let transform = `translate(0px, 0px) rotate(${rotation}deg)`;

                    if (isTop && isDragging) {
                        transform = `translate(${dragOffset.x}px, ${dragOffset.y}px) rotate(${rotation}deg)`;
                    } else if (isBeingSentToBack) {
                        // This is the "Snap to back" visual
                        transform = `translate(0px, 0px) rotate(${ROTATIONS[ROTATIONS.length - 1]}deg)`;
                    }

                    const isDark = card.id === 4;
                    const textColor = isDark ? "text-white" : "text-[#111928]";
                    const subTextColor = isDark ? "text-white/70" : "text-[#6B7280]";

                    return (
                        <div
                            key={card.id}
                            className={cn(
                                "absolute z-50 inset-0 rounded-[16px] p-4 md:p-8 flex flex-col border border-[#E3E8EE] shadow-sm select-none cursor-grab active:cursor-grabbing",
                                "w-full h-full",
                                (!isDragging || !isTop) && "transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
                            )}
                            style={{
                                background: card.background,
                                transform,
                                zIndex,
                                opacity: position === 3 && !isBeingSentToBack ? 0.5 : 1,
                                transformOrigin: "bottom right",
                                touchAction: "none"
                            }}
                        >
                            <h3 className={cn("text-[18px] md:text-[24px] font-bold tracking-tight", textColor)}>
                                {card.title}
                            </h3>
                            <div className="mt-4 md:mt-6">
                                <h4 className={cn("text-[12px] md:text-[20px] font-medium mb-1 md:mb-2 opacity-80", textColor)}>
                                    Insights & Overview
                                </h4>
                                <p className={cn("text-[13px] md:text-[16px] line-clamp-4 md:line-clamp-none", subTextColor)}>
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}