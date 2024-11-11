"use client";
import { useEffect, useState } from "react";
import Exp from "@/components/exp";
import Intro from "@/components/Intro";
import Image from "next/image";
import Lang from "@/components/languages";
import Reachme from "@/components/reachme";
import { HoverCard } from "@/components/ui/hover-card";
import Xcard from "@/components/xcard";
import { useLanyard } from "react-use-lanyard";
import { ripples } from "ldrs"; // Import ldrs package
import { Footer } from "@/components/layouts/footer"; // Import the Footer component

// Register ripples for the preloader
ripples.register();

export default function Home() {
  const { data } = useLanyard({
    userId: "1286401988359356476"
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading state to false once data is available
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Wait 1 second before hiding the loader

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, []);

  // Fallback image URL when nothing is playing
  const fallbackImage = "https://media1.tenor.com/m/kBlYQKjd1rMAAAAd/edit.gif";

  return (
    <>
      {/* Main content */}
      <div className="w-7/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* Image with no blur */}
        <Image
          layout="fill" // Makes the image take up the full container
          objectFit="cover" // Ensures the image covers the entire area without stretching
          className="absolute left-0 top-0 -z-10 opacity-30"
          src="/images/gradient.webp"
          role="presentation"
          alt="Gradient background"
          priority
        />

        {isLoading ? (
          // Preloader while loading data
          <div className="flex justify-center items-center min-h-screen absolute inset-0 z-20">
            <l-ripples size="60" speed="2" color="white"></l-ripples>
          </div>
        ) : (
          <main
            className={`w-7/12 mx-auto flex flex-col gap-8 row-start-2 items-center sm:items-start text-white transition-all duration-500 ease-in-out ${
              isLoading ? "blur-sm" : "blur-0"
            }`} // Apply blur effect during loading
          >
            <Intro />
            <Exp />
            <Lang />
            {/* <Reachme /> */}
            <Xcard />
            {data && (
              <div className="flex bg-neutral-800/5 text-zinc-300 items-center rounded-sm p-2 pt-2.5 mt-4">
                {/* Avatar Image */}
                <div className="h-16 w-16 relative rounded-lg overflow-hidden">
                  <img
                    className="h-full w-full object-cover rounded-lg" // Ensures square image with rounded corners
                    src={
                      data?.data.spotify?.album_art_url
                        ? data?.data.spotify?.album_art_url
                        : fallbackImage
                    }
                    alt="Currently playing album art or fallback image"
                  />
                </div>

                <div className="ml-4 w-full text-xs items-center leading-tight">
                  <p className="font-medium text-zinc-100">
                    {data.data.activities[0]?.name || "Currently offline"}
                  </p>
                  <p className="dark:text-zinc-300">
                    {data.data.activities[0]?.state}
                  </p>
                  <p className="dark:text-zinc-300">
                    {data.data.activities[0]?.details}
                  </p>
                </div>
              </div>
            )}
          </main>
        )}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-8/12 p-4 dark:bg-zinc-900">
  <Footer />
</footer>
    </>
  );
}
