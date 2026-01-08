import { ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
export function StreamsSidebar() {
    const [openSection, setOpenSection] = useState<string | null>("Today");

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const HistoryItem = ({ title }: { title: string }) => (
        <div className="text-[13px] text-[#4B5563] py-1.5 px-2 hover:bg-gray-100 rounded-md cursor-pointer truncate">
            {title}
        </div>
    );

    return (
        <div className="w-[280px] flex-shrink-0 border-r border-[#E3E8EE] bg-[#FDFEFE] h-[calc(100vh-56px)] flex flex-col justify-between">
            <div className="px-1 py-2 flex flex-col gap-6 overflow-y-auto">
                {/* Bookmarks */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-[14px] font-medium text-[#959AA6] px-2">Bookmarks</h3>
                    <div className="flex flex-col gap-1">
                        <div className="bg-[#EFEFFF] text-[#4F566B] text-[13px] font-normal py-2 px-3 rounded-[4px] cursor-pointer">
                            Why is sentiment dropping this...
                        </div>
                        <div className="text-[13px] text-[#4F566B] py-2 px-3 hover:bg-gray-50 rounded-[4px] cursor-pointer">
                            What do people dislike about...
                        </div>
                    </div>
                </div>

                {/* History */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-[14px] font-medium text-[#959AA6] px-2">History</h3>

                    {/* Today Section */}
                    <div className="flex flex-col gap-1">
                        <div
                            className="flex items-center justify-between py-1 px-2 cursor-pointer hover:bg-gray-50 rounded-[4px] group"
                            onClick={() => toggleSection("Today")}
                        >
                            <span className="text-[13px] font-medium text-[#697386]">Today</span>
                            <Image height={3.75} width={7.5} src="/arrow-icon.svg" alt="arrow-icon" className="w-4 h-4 text-[#6B7280] scale-40" />
                        </div>
                        {openSection === "Today" && (
                            <div className="pl-2 flex flex-col gap-1">
                                {/* Empty for now as per image or minimal content */}
                            </div>
                        )}
                    </div>

                    {/* Last 7 days Section */}
                    <div className="flex flex-col gap-1">
                        <div
                            className="flex items-center justify-between py-1 px-2 cursor-pointer hover:bg-gray-50 rounded-[4px] group"
                            onClick={() => toggleSection("Last 7 days")}
                        >
                            <span className="text-[13px] font-medium text-[#697386]">Last 7 days</span>
                            <Image height={3.75} width={7.5} src="/arrow-icon.svg" alt="arrow-icon" className="w-4 h-4 text-[#6B7280] scale-40" />
                        </div>
                        {openSection === "Last 7 days" && (
                            <div className="pl-2 flex flex-col gap-1">
                                {/* Empty for now as per image or minimal content */}
                            </div>
                        )}
                    </div>

                    {/* November Section */}
                    <div className="flex flex-col gap-1">
                        <div
                            className="flex items-center justify-between py-1 px-2 cursor-pointer hover:bg-gray-50 rounded-[4px] group"
                            onClick={() => toggleSection("November")}
                        >
                            <span className="text-[13px] font-medium text-[#697386]">November</span>
                            <Image height={3.75} width={7.5} src="/arrow-icon.svg" alt="arrow-icon" className="w-4 h-4 text-[#6B7280] scale-40" />
                        </div>
                        {openSection === "November" && (
                            <div className="pl-2 flex flex-col gap-1">
                                <HistoryItem title="Why is sentiment dropping this..." />
                                <HistoryItem title="Why is sentiment dropping this..." />
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Footer Badge */}
            <div className="p-4 bg-white">
                <div className="flex items-center gap-2 text-[12px] text-[#6B7280]">
                    <span className="bg-[#EEF2FF] text-[#6366F1] text-[10px] font-bold px-1.5 py-0.5 rounded-sm">Beta</span>
                    <span>Knowledge Base</span>
                </div>
            </div>
        </div>
    );
}
