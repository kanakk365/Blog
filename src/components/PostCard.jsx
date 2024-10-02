import React from "react";
import { Link } from "react-router-dom";
import appwriteServices from "../appwrite/config";

function PostCard({ $id, featuredImage, title, content }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100  py-4 flex flex-row justify-between border-b-2 border-gray-400 sm:h-60">
        <div className="flex flex-col justify-between gap-2 w-3/4">
          <div>
            <h2 className=" text-xl sm:text-4xl font-bold">{title}</h2>
            <p
              className=" text-sm sm:text-xl line-clamp-3"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </div>

         
        </div>

        <div className="justify-center mb-4 w-1/4">
          <img
            src={appwriteServices.getFilePreview(featuredImage)}
            alt={title}
            className=" rounded-xl h-full w-full "
          />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
