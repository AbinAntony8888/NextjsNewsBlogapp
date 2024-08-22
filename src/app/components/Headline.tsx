import { News } from "@/types/app.types";

export default function Headline({ title, content, imageURL }: News) {
  return (
    <div>
      {/* HEADLINE */}
      <div>
        <div className="relative">
          <img
            className=" object-cover h-full w-full"
            src={imageURL}
            alt="loading..."
          />
          <h2 className="absolute top-96 left-24 m-2 text-white font-bold text-xl ">
            {title}
          </h2>
          <br />
          <button className="absolute top-80 left-24 m-2  font-bold ring-2 ring-black bg-red-700 text-white px-3 py-1">
            {content}
          </button>
        </div>
      </div>
    </div>
  );
}
