"use client";
import { FormEvent, useState } from "react";
import { News } from "@/types/app.types";
import axios from "axios";

export default function CreateNews() {
  const [tittle, setTittle] = useState("");
  const [imageURl, setImageURL] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const newsPost: News = {
      id: 0,
      title: tittle,
      content: description,
      imageURL: imageURl,
    };
    try{
    const result = await axios.post("http://localhost:3001/news", newsPost);
    alert("data stored.......")

    } catch(error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div className="mb-10  ml-96 mt-2 border-4 border-red-950 p-8 mr-96  text-xl">
      <form
        onSubmit={handleSubmit}
        action=""
        className="mx-5 gap-4 flex flex-col items-center bg-gray-300 p-4"
      >
        <label htmlFor="">Enter tittle : </label>
        <input
          type="text"
          onChange={(e) => setTittle(e.target.value)}
          className="border-2 border-black my-4"
        />
        <br />
        <label htmlFor="">Enter imageURL :</label>
        <input
          type="url"
          onChange={(e) => setImageURL(e.target.value)}
          className="border-2 border-black my-4 w-60 ml-3"
        />
        <br />
        <label htmlFor="">description:</label>
        <textarea
          name=""
          id=""
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-black my-4 h-24 w-64"
        ></textarea>
        <br />
        <input
          type="submit"
          name="submit"
          className="border-2 border-black bg-green-500 py-2 px-4 font-bold text-white"
        />
      </form>
    </div>
  );
}
