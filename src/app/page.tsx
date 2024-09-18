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

export default function Home() {
 
  return (
    <div className="">
      <NewsPage/>
    </div>
  );
}
