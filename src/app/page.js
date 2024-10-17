// import Image from "next/image";

import GetData1 from "@/components/GetData1";
import GetData2 from "@/components/GetData2";
import PostData1 from "@/components/PostData1";
import PostData2 from "@/components/PostData2";

export const metadata = {
  title: "Ajay",
  discription: "This is to practice Next js",
};

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <PostData1 /> */}
      {/* <GetData1 /> */}
      <GetData2 />
      <PostData2 />
    </div>
  );
}
