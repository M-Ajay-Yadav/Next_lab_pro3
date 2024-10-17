import { NextResponse } from "next/server";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  // if (!res.ok) {
  //   alert("cannot get data from api");
  //   return { notFound: true }; // Handle error response
  // }
  const posts = await res.json();
  return posts;
};

export default async function GetData1() {
  const allPosts = await getData();
  // console.log(allPosts);
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <h1>Next justif</h1> */}
        {allPosts.result.map((post, id) => (
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
