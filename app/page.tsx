import { Button, buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-20 overflow-hidden border shadow-lg">
        <div className="absolute top-3 left-3">
          <ModeToggle/>
        </div>
        <div className="absolute top-3 right-3"> 
          <Link href={'/dashboard'}>
            <Button variant={'secondary'} className="border border-gray-600 dark:border-white rounded-lg">Show Documents</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
