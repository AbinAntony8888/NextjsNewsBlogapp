import axios from "axios";
import { useEffect, useState } from "react";

type Article = {
  id: number;
  title: string;
  content: string;
  imageURL: string;
  comments: [
    {
      id: number;
      userName: string;
      comment: string;
      date: Date;
    }
  ];
};
export default function Article({
  id,
  title,
  content,
  imageURL,
  comments,
}: Article) {
  const [todoArray, setTodoArray] = useState<Article[]>([]);

  useEffect(() => {
    // Define your async function
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/artical");
        setTodoArray(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function
    fetchData();
  }, []);
  return (
   <div><h1>fdg</h1></div>
  );
}
