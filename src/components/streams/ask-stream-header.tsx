import { cn } from "@/lib/utils";

interface AskStreamHeaderProps {
    isFocused: boolean;
}

export function AskStreamHeader({ isFocused }: AskStreamHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-start justify-start transition-all duration-500 ease-in-out",
                isFocused
                    ? "opacity-0 h-0 pt-0 overflow-hidden"
                    : "opacity-100 h-auto pt-[80px] mb-10"
            )}
            style={{ fontFamily: "var(--font-bricolage)" }}
        >
            {/* Ask Stream – gradient text */}
            <h1
                className="text-[32px] md:text-[57px] font-bold bg-clip-text text-transparent leading-[40px] md:leading-[64px] tracking-[-0.25px]"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, #625AFA 0.05%, #272464 22.24%)",
                }}
            >
                Ask Stream
            </h1>

            {/* Lorem ipsum – solid background */}
            <h2
                className="text-[32px] md:text-[57px] font-bold rounded-md text-[#CAC4D0] leading-[40px] md:leading-[64px] tracking-[-0.25px]"
            >
                lorem ipsum
            </h2>
        </div>
    );
}
