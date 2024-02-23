function TableRow({ data }) {
  // console.log(data); grid  grid-cols-7 flex gap-28
  return (
    <div
      className={`grid grid-cols-7
       px-2 py-4 border-b-2 border-b-gray-200 `}
    >
      {data.title && <div>{data.title}</div>}
      {data.categories && <div>{data.categories} </div>}
      {data.price && <div>{data.price}</div>}
      {data.date && <div>{data.date}</div>}
      {data.author && <div>{data.author}</div>}
      {data.status && (
        <div>
          <select className="  border-2 px-2 py-1 rounded-md border-gray-200">
            <option value="publish">publish</option>
            <option value="draft">draft</option>
          </select>
        </div>
      )}
      {data.action && (
        <div>
          <button className="px-6 py-1 border-2  border-indigo-400 rounded-lg bg-indigo-400 text-white text-lg font-semibold capitalize hover:bg-white  hover:text-indigo-400 ">
            {data.action}
          </button>
        </div>
      )}
    </div>
  );
}
export default TableRow;
