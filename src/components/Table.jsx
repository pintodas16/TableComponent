import TableRow from "./TableRow";

function Table({ tableData, columnOption }) {
  // filter table data column based user choosen column option
  const filteredData = tableData.map((item) => {
    const filteredItem = {};
    Object.keys(columnOption).map((key) => {
      if (columnOption[key]) {
        filteredItem[key] = item[key];
      }
    });

    return filteredItem;
  });

  return (
    <div className="table_scroll overflow-x-auto bg-white">
      {/* <!-- table container  --> */}
      <div className="w-[70.5rem] h-96 ">
        {/* <!-- grid section for table  --> */}
        <div className="">
          {/* <!-- for table heading grid grid-cols-7 flex gap-28 --> */}
          <div
            className={`grid grid-cols-7   border-b-2 py-2 px-2 font-semibold capitalize text-lg`}
          >
            {/* <div className={` border w-full`}>title</div> */}
            {columnOption.title && <div>title</div>}
            {columnOption.categories && <div>categories</div>}
            {columnOption.price && <div>price</div>}
            {columnOption.date && <div>date</div>}
            {columnOption.author && <div>author</div>}
            {columnOption.status && <div>status</div>}
            {columnOption.action && <div>action</div>}
          </div>
          {/* <!-- for table data container   --> */}
          <div className="  ">
            {/* <!-- for row  --> */}
            {filteredData.map((data, id) => (
              <TableRow key={id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Table;
