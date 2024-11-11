import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Container for text and GIF */}
      <div className="flex items-center justify-center gap-2">
        {/* Text and GIF aligned inline */}
        <BlurFade className="text-2xl font-bold text-white blur-fade">
          Hi! Sudo Baby Here!
        </BlurFade>
        <Image
          src="/images/danceanime.gif"
          alt="Dancing Anime"
          width={64} // Adjust size for better fit
          height={64} // Adjust size for better fit
          className="rounded-full"
        />
      </div>

      {/* Paragraph Section */}
      <p className="text-center text-base text-white-700 font-sans lowercase max-w-lg">
        Seasoned Fullstack Engineer with 4+ years in startups. I excel in building
        applications from scratch to production-ready. My expertise spans across
        frontend, backend, and full-stack development, with a knack for system design
        and scalability.
      </p>
    </div>
  );
};

export default Intro;
