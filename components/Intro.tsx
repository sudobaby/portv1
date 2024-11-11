// In "@/components/Intro.tsx"
import BlurFade from "@/components/ui/blur-fade";  // Ensure this path is correct

const Intro = () => {
  return (
    <div className="flex gap-15">
      <div className="flex flex-col gap-4">
        <BlurFade className="text-2xl font-bold text-white blur-fade">
          Hi! Sudo Baby Here!
        </BlurFade>
        <p className="text-base text-white-700 font-sans lowercase">
          Seasoned Fullstack Engineer with 4+ years in startups. I excel in building
          applications from scratch to production-ready. My expertise spans across
          frontend, backend, and full-stack development, with a knack for system design
          and scalability.
        </p>
      </div>
      <div>
        {/* <Image
          src="/images/profile.jpg"
          alt="Sudo Baby"
          width={300}
          height={300}
        /> */}
      </div>
    </div>
  );
};

export default Intro;
