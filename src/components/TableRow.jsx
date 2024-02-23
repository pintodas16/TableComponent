function TableRow({ data }) {
  // console.log(data); grid  grid-cols-7 flex gap-28
  return (
    <div
      className={`grid grid-cols-7
       px-2 py-4 border-b-2 border-b-gray-200 `}
    >
      {data.title && <div className="font-semibold">{data.title}</div>}
      {data.categories && (
        <div className="font-semibold">{data.categories} </div>
      )}
      {data.price && <div className="font-semibold">{data.price}</div>}
      {data.date && <div className="font-semibold">{data.date}</div>}
      {data.author && <div className="font-semibold">{data.author}</div>}
      {data.status && (
        <div>
          <select
            className={` px-2 py-1 rounded-md  font-semibold  border-2 ${
              data.status === "publish"
                ? "border-green-400 text-green-700 focus:outline-green-600 "
                : "border-gray-400 text-gray-600 focus:outline-gray-600"
            }`}
          >
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
