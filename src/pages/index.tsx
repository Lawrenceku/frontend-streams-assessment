import Layout from "@/components/layouts";
import { StreamsSidebar } from "@/components/streams/streams-sidebar";
import { AskStreamHeader } from "@/components/streams/ask-stream-header";
import { InputSection } from "@/components/streams/input-section";
import { ContentGrid } from "@/components/streams/content-grid";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Layout>
      <div className="flex h-full min-h-[calc(100vh-64px)]">
        <main className="flex-1 bg-[#FAFBFC] relative min-h-[calc(100vh-56px)]">

          {/* Centered header + input */}
          <div className="max-w-[1200px] mx-auto px-8 pb-[80px]">
            <div
              className={cn(
                "w-full transition-all duration-500 ease-in-out",
                isFocused && "pt-20"

              )}
            >
              <AskStreamHeader isFocused={isFocused} />
              <InputSection isFocused={isFocused} setIsFocused={setIsFocused} />
            </div>
          </div>

          {/* FULL WIDTH STREAMS AREA */}
          <div className="w-full flex border-t">
            <StreamsSidebar />

            <div
              className={cn(
                "flex-1 mt-10 transition-all duration-500 px-8"
              )}
            >
              <ContentGrid />
            </div>
          </div>
        </main>

      </div>
    </Layout>
  );
}
