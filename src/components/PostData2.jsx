// await connectDB();
// const allPosts = await PostModel.find();

import connectDB from "@/lib/connectDB";
import PostModel from "@/models/Post";
import { revalidatePath } from "next/cache";
// import { useRouter } from "next/navigation";

const create = async (formData) => {
  "use server";
  await connectDB();
  const result = await PostModel.create({
    title: formData.get("title"),
    body: formData.get("body"),
  });

  // Revalidate the home page (or whichever path where data is displayed)
  revalidatePath("/"); // Replace with the correct path if necessary
};
const PostData2 = () => {
  //   const router = useRouter();
  return (
    <form action={create}>
      Title:
      <input
        type="text"
        name="title"
        // value={formData.title}
        // onChange={handleChange}
        className="text-black p-2"
      />
      <br />
      <br />
      Body:
      <input
        type="text"
        name="body"
        // value={formData.body}
        // onChange={handleChange}
        className="text-black p-2"
      />
      <br />
      <br />
      <button type="submit" className="p-2 bg-rose-600">
        Submit
      </button>
    </form>
  );
};

export default PostData2;
