import * as React from "react";
import { ChevronDown, FileText } from "lucide-react";
import Image from "next/image";
import { StackedCards } from "./stacked-cards";
import analysisData from "@/data/analysis-data.json";

export function ContentGrid() {
    const { sections, dataSource } = analysisData;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1200px] mx-auto mt-8 gap-0 border-separate">
            {/* Section 1 - Top Left */}
            <div className="bg-white border border-[#E3E8EE] rounded-tl-[16px] pt-[24px] pr-[32px] pb-[24px] pl-[24px] flex flex-col border-r-0 border-b-0">
                <h3 className="text-[24px] font-semibold text-[#141232] mb-[40px]">{sections[0].title}</h3>

                <div className="flex flex-col gap-3 flex-grow">
                    <h4 className="text-[20px] font-semibold text-[#141232]">{sections[0].subtitle}</h4>
                    <p className="text-[14px] text-[#4F566B] leading-relaxed">
                        {sections[0].description}
                    </p>
                </div>

                <div className="mb-8">
                    <span className="bg-[#EEF2FF] text-[#6366F1] text-[11px] font-medium px-2 py-1 rounded-[8px]">{sections[0].chip}</span>
                </div>
            </div>

            {/* Section 2 (Stacked Cards) - Top Right */}
            <div className="relative z-20 h-full min-h-[350px] bg-white border border-[#E3E8EE] rounded-tr-[16px] p-[24px] border-b-0">
                <StackedCards />
            </div>

            {/* Section 3 - Bottom Left */}
            <div className="bg-white border border-[#E3E8EE] rounded-bl-[16px] pt-[24px] pr-[32px] pb-[24px] pl-[24px] flex flex-col border-r-0">
                <h3 className="text-[24px] font-semibold text-[#141232] mb-[40px]">{sections[1].title}</h3>
                <div className="flex flex-col gap-3">
                    <h4 className="text-[20px] font-medium text-[#141232]">{sections[1].subtitle}</h4>
                    <p className="text-[14px] text-[#4F566B] leading-relaxed">
                        {sections[1].description}
                    </p>
                </div>
            </div>

            {/* Data Source - Bottom Right */}
            <div className="col-span-1 bg-white rounded-br-[16px] border border-[#E3E8EE] py-[24px] px-[8px] flex flex-col gap-4">
                <div className="flex items-center justify-between px-2">
                    <h3 className="text-[14px] font-medium mb-[4px] text-[#959AA6]">{dataSource.title}</h3>
                    <div className="flex items-center gap-1 text-[13px] text-[#4B5563] cursor-pointer">
                        All<Image height={3.75} width={7.5} src="/arrow-icon.svg" alt="arrow-icon" className="w-4 h-4 text-[#6B7280] scale-40" />
                    </div>
                </div>

                <div className="flex flex-col gap-6 px-2">
                    {dataSource.items.map((item, i) => (
                        <div key={i} className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[13px] font-medium text-[#111928]">
                                    {item.author}
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] text-[#697386]">{item.date}</span>
                                    <div className="w-5 h-5 ">
                                        <Image alt="app-store-icon" height={24} width={24} src={item.icon} className="w-full rotate-180 text-[#6B7280]" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-[13px] text-[#6B7280] line-clamp-2">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
