import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AppButton from "../ui/app-button";
import { Sparkles } from "lucide-react";

interface InputSectionProps {
    isFocused: boolean;
    setIsFocused: (focused: boolean) => void;
    onAnalyze?: () => void;
}

export function InputSection({ isFocused, setIsFocused, onAnalyze }: InputSectionProps) {
    return (
        <div
            className={cn(
                "w-full max-w-[972px] min-h-[104px] bg-white rounded-2xl border border-[#EDEEF0] shadow-sm transition-all duration-500 ease-in-out"
            )}
            style={{ boxShadow: "0px 1px 4px 0px #4F566B14" }}
        >
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Ask anything"
                    className="w-full text-[16px] text-[#111928] placeholder:text-[#959AA6] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-[0] outline-none bg-transparent"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>

            <div className="px-2 md:px-4 flex flex-col md:flex-row items-start md:items-center justify-between pb-4 gap-4 md:gap-0">
                <div className="flex items-center gap-2 md:gap-6">
                    <div className="flex items-center gap-1.5 px-2 py-1 text-[12px]">
                        <span className="text-[#625AFA] bg-[#EFEFFF] rounded-[4px] py-[1px] pr-[4px] pl-[6px] font-bold text-[10px]">✦ Beta</span>
                        <span className="text-[#959AA6] font-medium text-[14px]">Conversational Analytics</span>
                    </div>
                </div>

                <AppButton
                    onClick={onAnalyze}
                    className={` bg-[#9CA3AF] hover:bg-[#6B7280] text-white rounded-[4px] px-4 py-1.5 h-auto text-[16px] font-medium transition-colors`}
                >
                    Analyze
                </AppButton>
            </div>
        </div>
    );
}
