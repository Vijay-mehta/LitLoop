import Image from "next/image";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <Image 
      src="/home/bg-image.jpg" 
      alt="home bg-image"   
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }} 
        />
      <div className=" z-10  bg-purple-100  py-16 px-2  rounded-md  ">
        <div className=" flex">
          <SparklesIcon width={50} height={50} className="text-purple-900" />
          <p className="text-purple-700  text-5xl  mb-6  font-serif">Litloop</p>
        </div>
        <Link href="/store" className=" bg-purple-900 text-white  p-2 text-xl ">
          Take Me To The Store
        </Link>
      </div>
    </div>
  );
}
