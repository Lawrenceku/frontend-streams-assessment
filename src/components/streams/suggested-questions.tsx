"use client";

import React from "react";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

const QUESTIONS = [
    "Excepteur sint occaecat cupidatat?",
    "Excepteur sint occaecat cupidatat?",
];

export function SuggestedQuestions() {
    return (
        <div className="flex flex-col md:flex-row gap-4 w-full mt-6 md:mt-10">
            {QUESTIONS.map((question, i) => (
                <div
                    key={i}
                    className={cn(
                        "flex-1 flex items-center text-[#4F566B] justify-between p-6 bg-white border border-[#EDEEF0] rounded-[20px] cursor-pointer hover:bg-[#FDFEFE] transition-all group",
                        "shadow-[0px_1px_2px_0px_#1018280D]"
                    )}
                >
                    <span className="text-[16px] font-medium">{question}</span>
                    <MoveRight className="w-5 h-5 text-[#959AA6] transition-colors" />
                </div>
            ))}
        </div>
    );
}
