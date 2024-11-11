import Exp from "@/components/exp";
import Intro from "@/components/Intro";
import Image from "next/image";
import Lang from "@/components/languages";
import Reachme from "@/components/reachme";
import { HoverCard } from "@/components/ui/hover-card";
import Xcard from "@/components/xcard";

export default function Home() {
  return (
    <>
      {/* Main content */}
      <div
        className="w-7/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
        style={{
          background: "radial-gradient(402px 418px at 47% 7%, #ff2800b1 0%, #ffe7e700 73%, transparent 94%)",
        }}
      >
        <main className="w-7/12 mx-auto flex flex-col gap-8 row-start-2 items-center sm:items-start text-white">
          <Intro />
          <Exp />
          <Lang />
          {/* <Reachme /> */}
          <Xcard />
        </main>
      </div>
    </>
  );
}
