
type Trend={
    id:number;
    title:string;
    imageURL:string;
    content:string;
}
export default function Trending({title,imageURL,id,content}:Trend){
    return(
        <div>
          
          <div className="relative">
        
          <img className="object-cover mt-2 w-full" src={imageURL} alt="" />
          <h1 className="absolute top-48 left-4 m-2 text-white font-bold text-lg ">{title}</h1>
          <button className="absolute top-40 left-4 m-2 bg-green-500 px-2 ring-2 ring-red-600 text-white font-bold">{content}</button>
          
          </div>

        </div>
    )
}