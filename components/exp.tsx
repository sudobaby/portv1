import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Exp = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/experience" className="relative inline-block group">
        <h1 className="text-xl font-semibold flex items-center">
          work + exp.
          <ArrowUpRight size={15} className="ml-2" />
        </h1>
        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 mt-1"></span>
      </Link>
    </div>
  );
};

export default Exp;
