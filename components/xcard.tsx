import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"; // Ensure the import path is correct
  
  const Xcard = () => {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">X.com</h1>
  
        {/* HoverCard Component */}
        <HoverCard>
          <HoverCardTrigger className="flex items-center gap-4">
            {/* Profile Image */}
            <img
              src="https://w.wallhaven.cc/full/zy/wallhaven-zyj28v.jpg" // Replace with your profile image URL
              alt="Profile"
              className="w-10 h-10 rounded-full" // Adjust size and make it circular
            />
            {/* Text Content on the Right */}
            <div className="flex flex-col">
              <span className="text-xl font-bold">Reach me out on x.com only serious talks! <br /> </span>
              <span className="text-x1   font-normal"> @sudobaby. </span>
              <span className="text-sm text-gray-500">Joined December 2021</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            SudoBaby
          </HoverCardContent>
        </HoverCard>
      </div>
    );
  };
  
  export default Xcard;
  