import * as React from "react";
import { ChevronDown, FileText } from "lucide-react";
import Image from "next/image";
import { StackedCards } from "./stacked-cards";

export function ContentGrid() {
    const Card = ({ title, children, className }: { title: string, children: React.ReactNode, className?: string }) => (
        <div className={`bg-[#FDFEFE] rounded-xl border border-[#E3E8EE] p-6 flex flex-col gap-4 ${className}`}>
            <h3 className="text-[18px] font-semibold text-[#111928]">{title}</h3>
            {children}
        </div>
    );

    return (
        <div className="grid grid-cols-2 w-full gap-8 max-w-[1200px] mx-auto mt-8">
            {/* Section 1 */}
            <Card title="Section 1" className="bg-white">
                <div className="flex flex-col gap-3">
                    <h4 className="text-[16px] font-semibold text-[#111928]">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia</h4>
                    <p className="text-[14px] text-[#6B7280] leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="mt-2">
                        <span className="bg-[#EEF2FF] text-[#6366F1] text-[11px] font-medium px-2 py-1 rounded-tl-[8px] ">✦ Chip</span>
                    </div>
                </div>
            </Card>

            {/* Section 2 (Stacked Cards) */}
            <div className="relative h-full min-h-[300px]">
                <StackedCards />
            </div>

            {/* Section 3 */}
            <Card title="Section 3" className="bg-white">
                <div className="flex flex-col gap-3">
                    <h4 className="text-[16px] font-medium text-[#111928]">Commodo consequat</h4>
                    <p className="text-[14px] text-[#6B7280] leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                </div>
            </Card>

            {/* Data Source */}
            <div className="col-span-1 bg-white rounded-xl border border-[#E3E8EE] p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-[14px] font-medium text-[#6B7280]">Data Source</h3>
                    <div className="flex items-center gap-1 text-[13px] text-[#4B5563] cursor-pointer">
                        All<Image height={3.75} width={7.5} src="/arrow-icon.svg" alt="arrow-icon" className="w-4 h-4 text-[#6B7280] scale-40" />
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[13px] font-medium text-[#111928]">
                                    {i === 1 ? "Jessibeesocial" : "Sawyer Merritt"}
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] text-[#9CA3AF]">November 20,2025</span>
                                    <div className="w-5 h-5 ">
                                        <Image alt="app-store-icon" height={24} width={24} src='app-store-icon.svg' className="w-full rotate-180 text-[#6B7280]" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-[13px] text-[#6B7280] line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
