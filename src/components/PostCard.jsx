import React from "react";
import { Link } from "react-router-dom";
import appwriteServices from "../appwrite/config";

function PostCard({ $id, featuredImage, title, content }) {
  return (
    <Link to={`/post/${$id}`}>
    <div className="w-full bg-gray-100  py-4 flex flex-row justify-between border-b-2 border-gray-400 ">
      <div className="flex flex-col gap-2 w-4/5">
        <h2 className=" text-xl sm:text-3xl font-bold">{title}</h2>
        <p className=" text-sm sm:text-lg " dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>

      <div className="justify-center mb-4  ">
        <img
          src={appwriteServices.getFilePreview(featuredImage)}
          alt={title}
          className=" rounded-xl h-32 w-44"
        />
      </div>
    </div>
  </Link>
  );
}

export default PostCard;
