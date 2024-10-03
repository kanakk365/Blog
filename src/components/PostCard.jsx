import React from "react";
import { Link } from "react-router-dom";
import appwriteServices from "../appwrite/config";

function PostCard({ $id, featuredImage, title, content }) {
  const wpm = 500;
  const contentWords = content.length;
  const readTime = Math.ceil(contentWords / wpm);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100  py-4 flex flex-row justify-between border-b-2 border-gray-400 sm:h-60 gap-2">
        <div className="flex flex-col justify-between gap-2 w-3/4">
          <div className="flex flex-col justify-between gap-3 sm:gap-12">
            <div className="flex flex-col gap-3">
              <h2 className=" text-xl sm:text-3xl font-fractul font-semibold text-gray-800">{title}</h2>
              <p
                className=" text-sm sm:text-lg line-clamp-3 font-fractul text-gray-700 "
                dangerouslySetInnerHTML={{ __html: content }}
              ></p>
            </div>
            <div>
              <p className="text-sm sm:text-base">{readTime} mins read</p>
            </div>
          </div>
        </div>

        <div className="justify-center mb-4 w-1/4">
          <img
            src={appwriteServices.getFilePreview(featuredImage)}
            alt={title}
            className=" rounded-md h-full w-full "
          />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
