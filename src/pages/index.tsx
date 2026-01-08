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
        {/* Negative margin to counteract the layout padding if necessary, or adjust Layout. 
            Checking Layout implementation: it has p-4. we might need to adjust or create a nested layout structure 
            to have the sidebar strictly on the left. 
            For now, let's assume the Layout renders children inside a div with styling.
            Actually, the Layout component applies p-4 to the content area. 
            The sidebar should be outside of that if we want it to be full height/width flush?
            Wait, the user wants a sidebar *within* the content area according to the image?
            Looking at the image, there is the AppSidebar (leftmost), then this "Streams" content area.
            The "Streams" content area HAS a sidebar (Bookmarks/History). 
            So yes, it should be inside the main content area.
        */}

        {/* <main className="flex-1 bg-[#FAFBFC] relative overflow-y-auto h-[calc(100vh-56px)]">
          <div className="max-w-[1200px] mx-auto px-8 py-12 flex flex-col items-center">

            <div className={cn("w-full transition-all duration-500 ease-in-out", isFocused ? "pt-10" : "pt-32")}>
              <AskStreamHeader isFocused={isFocused} />
              <InputSection isFocused={isFocused} setIsFocused={setIsFocused} />
            </div>
            <div className="flex border w-full">
              <StreamsSidebar />
              <div className={cn("w-full mt-10 transition-opacity duration-500 delay-100", isFocused ? "opacity-0 pointer-events-none" : "opacity-100")}>
                {!isFocused && <ContentGrid />}
              </div>
            </div>
          </div>
        </main> */}
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
