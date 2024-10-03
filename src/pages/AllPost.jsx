import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components/index";
import appwriteService from "../appwrite/config";

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        console.log(posts)
      }
    });
  }, []);
  return (
    <div className="w-full py-8  ">
      <Container>
        <div className="flex flex-wrap flex-col">
          {posts.map((post) => (
            <div key={post.$id} className="py-2 w-full ">
              <PostCard {...post} />
              
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
