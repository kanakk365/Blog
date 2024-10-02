import React, { useEffect, useState } from "react";
import appwriteServices from "../appwrite/config";
import { Container } from "../components";
import PostCard from "../components/PostCard";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import HeroContainer from "../components/container/HeroContainer";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteServices.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  {
    return (
      <div className="w-full z-50  text-center">
        <HeroContainer>
          <BackgroundBeamsWithCollision>
            <div>
              <h2 className="text-4xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black  font-sans tracking-tight pb-2">
                Welcome to{" "}
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                  <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    <span className=""> blogAble</span>
                  </div>
                  <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-400 via-violet-700 to-violet-500 py-4">
                    <span className=""> blogAble</span>
                  </div>
                </div>
              </h2>
              <p className="mx-auto max-w-[700px] text-xl md:text-xl">
                Exploring ideas, sharing insights, and discussing the latest
                trends in technology and beyond.
              </p>
            </div>
          </BackgroundBeamsWithCollision>
        </HeroContainer>
      </div>
    );
  }
}

export default Home;
