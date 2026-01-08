import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function TopNav() {
    return (
        <div className="flex items-center justify-between h-[56px] px-6 border border-[#E3E8EE] bg-white">
            <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-[16px] font-medium text-[#4F566B]">Ask stream</span>
                <Image height={3.75} width={7.5} src="/arrow-icon.svg" alt="arrow-icon" className="w-4 h-4 text-[#6B7280] scale-40" />
            </div>
            <div className="flex items-center">
                <button className="text-[16px] font-medium text-[#4F566B] hover:text-[#623BA5] transition-colors">
                    Show History
                </button>
            </div>
        </div>
    );
}
