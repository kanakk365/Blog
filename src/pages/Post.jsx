import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 ">
      <Container>
        <div className="flex flex-col justify-center  ">
          <div className="flex flex-col justify-center items-center ">
            <div className="w-full mb-6 flex items-center justify-center ">
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className=" w-2/3 h-2/3 sm:w-2/3 sm:h-full"
              />
            </div>
            <div className=" w-full h-full flex flex-col justify-center mb-4 relative  rounded-xl p-2 gap-10">
              <h1 className=" text-2xl sm:text-5xl font-bold text-center font-fractul text-gray-800 ">{post.title}</h1>
              <div className="browser-css text-lg sm:text-xl text-gray-700  "><p>{parse(post.content)}</p></div>
            </div>
          </div>
        </div>
        <div>
          {isAuthor && (
            <div className="flex justify-end">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  ) : null;
}
