export default function CreateNews() {
  return (
    <div className="mb-10 ">
      <form action="" className="mx-5 gap-4">
        <label htmlFor="">create tittle : </label>
        <input type="text" className="border-2 border-black my-4" />
        <br />
        <label htmlFor="">add image :</label>
        <input type="image" className="border-2 border-black my-4"/>
        <br />
        <label htmlFor="">description:</label>
        <textarea name="" id="" className="border-2 border-black my-4 h-24 w-64"></textarea>
        <br />
        <input type="submit" name="submit" className="border-2 bg-green-500 py-2 px-4 font-bold text-white" />
      </form>
    </div>
  );
}
