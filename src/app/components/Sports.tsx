import { News } from "@/types/app.types";
import Link from "next/link";

export default function Sports({ title, imageURL, content, id }: News) {
  return (
    <div>
      <div className="relative w-full">
        <img className="object-cover mt-2 " src={imageURL} alt="" />
        <h1 className="absolute top-44 left-4 m-2 text-white font-bold text-lg ">
          {title}
        </h1>
        <Link href="/sport-news">
          <button className="absolute top-36 left-4 m-2 bg-violet-800 px-2 ring-2 ring-rose-600 text-white font-bold">
            {content}
          </button>
        </Link>
      </div>
    </div>
  );
}
