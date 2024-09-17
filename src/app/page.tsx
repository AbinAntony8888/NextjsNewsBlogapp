"use client";

import axios from "axios";
import { log } from "console";
import { useEffect, useState } from "react";
import Trending from "./components/Trending";
import { HomePage } from "@/types/app.types";
import { News } from "@/types/app.types";
import Sports from "./components/Sports";
import Headline from "./components/Headline";
import Link from "next/link";
import CreateNews from "./create-news/CreateNews";
import NewsPage from "./components/NewsPage";

export default function Home(
  { headline, trending, sports }: HomePage,
  { id, title, content, imageURL, connection }: News
) {
  const [homePage, setHomePage] = useState<HomePage>();

  useEffect(() => {
    // Define your async function
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/homePageData");
        setHomePage(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function
    fetchData();
  }, []);
  return (
    <div className="">
      <h1 className="font-bold text-5xl text-center p-6 text-white bg-gray-800 m-1">
        The Indian Express
      </h1>

      <div className="flex w-full pl-8 text-gray-700 mx-1 py-1 font-bold bg-slate-400">
        {/* TOPBAR */}
        <ul className="pl-96">
          <li className="float-left px-4 ">home</li>
          <li className="float-left px-4">about</li>
          <li className="float-left px-4">contact</li>
          <li className="float-left px-4">new</li>
          {/* <li className="float-left px-4 text-white ring-2 ring-blue-700 ml-96">create new poost</li> */}
        </ul>
          <Link href="/create-news" className="float-left px-4 text-white ring-2 ring-blue-700 ml-96">create new post</Link>
      </div>
      <div className="m-2 flex flex-row  ">
        <div className=" h-screen w-2/3 m-2 ">
          {/* HEADLINE */}
          <Headline
            title={homePage?.headline?.title || "default title"}
            id={0}
            content={homePage?.headline?.content || "default content"}
            imageURL={homePage?.headline?.imageURL || "defaullt imageurl"}
          />
        </div>
        <div className="flex flex-col w-1/3 h-1/2">
          {/* TRENDING */}

          <div className="w-full">
            {homePage?.trending.map((trend) => (
              <Trending
                key={trend.id}
                imageURL={trend.imageURL}
                id={trend.id}
                title={trend.title}
                content={trend.content}
              />
            ))}
          </div>

          {/* SPORTS */}

          <div className="h-full">
            {homePage?.sports.map((sport) => (
              <Sports
                key={sport.id}
                imageURL={sport.imageURL}
                id={sport.id}
                title={sport.title}
                content={sport.content} // content={sport.content}
              />
            ))}
          </div>
        </div>
      </div>
      <NewsPage/>
    </div>
  );
}
