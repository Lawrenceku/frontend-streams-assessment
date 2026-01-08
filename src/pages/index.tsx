import Layout from "@/components/layouts";
import { StreamsSidebar } from "@/components/streams/streams-sidebar";
import { AskStreamHeader } from "@/components/streams/ask-stream-header";
import { InputSection } from "@/components/streams/input-section";
import { ContentGrid } from "@/components/streams/content-grid";
import { SuggestedQuestions } from "@/components/streams/suggested-questions";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);

  return (
    <Layout>
      <div className="flex h-full min-h-[calc(100vh-64px)]">
        <main className="flex-1 bg-white relative min-h-[calc(100vh-56px)]">

          {/* Header + Input: Left aligned with the grid (shifted by sidebar width on desktop) */}
          <div className="w-full flex flex-col md:flex-row">
            {/* Virtual spacer for alignment - matches StreamsSidebar width on desktop */}
            {!isAnalyzed && <div className="hidden md:block w-[280px] shrink-0" />}

            <div className={cn(
              "flex-1 px-4 md:px-8 pb-[40px] md:pb-[80px]",
              isAnalyzed && "max-w-[1200px] md:ml-[280px]" // Stay aligned when sidebar appears
            )}>
              <div
                className={cn(
                  "w-full max-w-[972px] transition-all duration-500 ease-in-out",
                  isFocused && "pt-10 md:pt-20"
                )}
              >
                <AskStreamHeader isFocused={isFocused} />
                <InputSection
                  isFocused={isFocused}
                  setIsFocused={setIsFocused}
                  onAnalyze={() => setIsAnalyzed(true)}
                />

                {!isAnalyzed && <SuggestedQuestions />}
              </div>
            </div>
          </div>

          {/* CONTENT AREA (Grid + Sidebar) */}
          {isAnalyzed && (
            <div className="w-full flex flex-col md:flex-row border-t">
              <div className="w-full md:w-[280px] shrink-0">
                <StreamsSidebar />
              </div>

              <div
                className={cn(
                  "flex-1 mt-6 md:mt-10 transition-all duration-500 px-4 md:px-8"
                )}
              >
                <ContentGrid />
              </div>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
}
