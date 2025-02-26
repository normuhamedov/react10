import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { getHomePosts } from "../service/postService";
import { API_BASE_URL } from "../config/envVariables";
import {
  Heart, MessageCircle, Send, Bookmark, MoreHorizontal, CircleUserRound
} from "lucide-react";
import { getComments } from "../service/commentsService";

function Home() {
  const { darkMode } = useTheme();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getHomePosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const com = await getComments();
        setComments(com);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const stories = [
    { id: 1, username: "itsdougthepu", img: <CircleUserRound />, seen: false },
    { id: 2, username: "openaidalle", img: "/img2.jpg", seen: false },
    { id: 3, username: "lewishamilton", img: "/img3.jpg", seen: false },
    { id: 4, username: "wahab.xyz", img: "/img4.jpg", seen: true },
    { id: 5, username: "defavours", img: "/img5.jpg", seen: false },
    { id: 6, username: "mkbhd", img: "/img6.jpg", seen: true },
  ];

  return (
    <div className={`min-h-screen w-full ${darkMode ? "bg-black text-white" : "bg-white text-black"} transition-all duration-300`}>
      <div className="flex gap-4 p-4 ml-[280px] border-gray-300 dark:border-gray-700">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center p-[1px] ${
              story.seen
                ? "border-gray-500 border-2"
                : "border-2 border-pink-500 border-gradient-to-tr from-yellow-400 to-pink-500"
            }`}>
              <CircleUserRound className="w-10 h-10 rounded-[50%] text-gray-500 dark:text-gray-300" />
            </div>
            <p className="text-xs mt-2 truncate w-16 text-center">
              {story.username}
            </p>
          </div>
        ))}
      </div>

      <div className="ml-[200px] p-5">
      {loading ? (
                    <div className={`w-[511px] mx-auto rounded-lg overflow-hidden shadow-lg mb-10 border animate-pulse ${darkMode ? "bg-[#171717] border-gray-700" : "bg-white border-gray-200"}`}>

                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
                            <div>
                                <div className={`w-24 h-3 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
                            </div>
                        </div>
                        <div className={`w-6 h-2 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
                    </div>
                
                    <div className={`w-full h-[400px] ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}></div>
                
                    <div className="flex justify-between items-center p-4">
                        <div className="flex gap-4">
                            <div className={`w-6 h-6 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
                            <div className={`w-6 h-6 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
                            <div className={`w-6 h-6 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
                        </div>
                        <div className={`w-6 h-6 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
                    </div>
                
                    <div className={`ml-4 w-24 h-3 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
                
                    <div className="p-4 space-y-1">
                        <div className={`w-100 h-4 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
                        <div className={`w-80 h-4 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
                    </div>
                    <div className={`ml-4 mb-4 w-40 h-3 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
                    <div className={`ml-4 mb-4 w-40 h-3 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
                
                    <div className={`border-b ${darkMode ? "border-gray-700" : "border-gray-300"}`}></div>
                
                </div>
                
                ) : (
          posts.map((post) => (
            <div key={post.id} className={`w-[511px] mx-auto  rounded-lg shadow-lg mb-10 ${darkMode ? "bg-[#171717]" : "bg-white"}`}>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-[50%] border-2 border-red-500">
                    <img
                      src="https://images.seeklogo.com/logo-png/27/1/liverpool-fc-logo-png_seeklogo-272372.png"
                      alt="User Logo"
                      className="object-center rounded-full w-10 h-10"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <h3 className="font-semibold text-sm flex items-center gap-1">
                      liverpoolfc
                      <svg className="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" viewBox="0 0 40 40" width="12">
                        <title>Verified</title>
                        <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"></path>
                      </svg>
                    </h3>
                    <p className=" text-xs">22h</p>
                  </div>
                </div>
                <MoreHorizontal className=" cursor-pointer" />
              </div>

              <img
                src={API_BASE_URL + post.mediaUrl}
                alt="Post"
                className="w-full h-[400px] object-cover"
              />

              <div className="flex justify-between items-center p-4 pb-3">
                <div className="flex gap-4 ">
                  <Heart className="w-6 h-6 cursor-pointer hover:text-red-500  " />
                  <MessageCircle className="w-6 h-6 cursor-pointer " />
                  <Send className="w-6 h-6 cursor-pointer " />
                </div>
                <Bookmark className="w-6 h-6 cursor-pointer " />
              </div>

              <p className="px-4 text-sm font-semibold ">132,937 likes</p>

              <div className="p-4 pb-3">
                <p className="text-sm font-semibold  line-clamp-2">
                  {post.description}
                </p>
              </div>
              <p className="px-4 py-1  text-sm cursor-pointer">View all 578 comments</p>
              <p className="px-4 pb-2  text-sm cursor-pointer">Add a comment…</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
