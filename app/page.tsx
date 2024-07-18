import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-20 overflow-hidden bg-red-200 border shadow-lg">
        <div className="absolute top-3 right-3"> 
          <Link href={'/dashboard'}>
            <Button className=" rounded-md font-bold text-white border border-b-red-950">Show Documents</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
