"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface StackCardData {
    id: number;
    title: string;
    description: string;
    background: string;
}

const INITIAL_CARDS: StackCardData[] = [
    {
        id: 1,
        title: "Section 2",
        description: "Commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        background: "linear-gradient(90deg, #E0DEFE 0%, #EDEEF0 54.56%, #EFEFFF 100%)",
    },
    {
        id: 2,
        title: "Analytics Insight",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        background: "#F7F8F9",
    },
    {
        id: 3,
        title: "Predictive Flows",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        background: "#EFEFFF",
    },
    {
        id: 4,
        title: "Data Integrity",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        background: "#4F566B",
    },
];

const ROTATIONS = [0, 1, 2, 3];
const DRAG_THRESHOLD = 100;

export function StackedCards() {
    const [order, setOrder] = useState([0, 1, 2, 3]);
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
                            <h3 className={cn("text-[18px] md:text-[20px] font-bold tracking-tight", textColor)}>
                                {card.title}
                            </h3>
                            <div className="mt-4 md:mt-6">
                                <h4 className={cn("text-[12px] md:text-[14px] uppercase tracking-wider font-semibold mb-1 md:mb-2 opacity-80", textColor)}>
                                    Insights & Overview
                                </h4>
                                <p className={cn("text-[13px] md:text-[15px] leading-relaxed line-clamp-4 md:line-clamp-none", subTextColor)}>
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