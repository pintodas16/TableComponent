import TableRow from "./TableRow";

function Table() {
  return (
    <div className="table_scroll overflow-x-auto bg-white">
      {/* <!-- table container  --> */}
      <div className="w-[70.5rem] h-96 ">
        {/* <!-- grid section for table  --> */}
        <div className="">
          {/* <!-- for table heading  --> */}
          <div className=" grid grid-cols-6 border-b-2 py-2 px-2 font-semibold capitalize text-lg">
            <div>title</div>
            <div>categories</div>
            <div>price</div>
            <div>date</div>
            <div>status</div>
            <div>action</div>
          </div>
          {/* <!-- for table data container   --> */}
          <div className=" grid  ">
            {/* <!-- for row  --> */}
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Table;
