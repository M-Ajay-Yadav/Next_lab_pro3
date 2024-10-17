// import { NextResponse } from "next/server";

import connectDB from "@/lib/connectDB";
import PostModel from "@/models/Post";

export default async function GetData2() {
  await connectDB();
  const allPosts = await PostModel.find();
  // console.log(allPosts);
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <h1>Next justif</h1> */}
        {allPosts.map((post, id) => (
          <div key={post.id}>
            <h1 className="text-red-500">{post.title}</h1>
            <p>{post.body}</p>
            <hr className="border-t-2 border-blue-500 w-full" />
            {/* {console.log(post.title, post.body)} */}
          </div>
        ))}
      </main>
    </>
  );
}
