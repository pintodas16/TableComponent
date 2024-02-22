function TableRow() {
  return (
    <div className=" grid grid-cols-6 px-2 py-4 border-b-2 border-b-gray-200">
      <div>pinto das</div>
      <div>dev tools </div>
      <div>price</div>
      <div>12-2-2024</div>
      <div>
        <select className="  border-2 px-2 py-1 rounded-md border-gray-200">
          <option value="publish">publish</option>
          <option value="draft">draft</option>
        </select>
      </div>
      <div>
        <button className="px-6 py-1 border-2  border-indigo-400 rounded-lg bg-indigo-400 text-white text-lg font-semibold capitalize hover:bg-white  hover:text-indigo-400 ">
          edit
        </button>
      </div>
    </div>
  );
}
export default TableRow;
