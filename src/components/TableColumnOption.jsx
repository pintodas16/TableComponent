import { useRef } from "react";

function TableColumnOption({ onHandleOptionStatus }) {
  // ${
  //   optionStatus ? "hidden" : ""
  // }
  const optionRef = useRef();
  const handleCloseOption = (e) => {
    if (optionRef.current === e.target) {
      // console.log("clicked");
      onHandleOptionStatus();
    }
  };
  return (
    <div
      className="absolute inset-0"
      ref={optionRef}
      onClick={handleCloseOption}
    >
      {/* column options  */}
      <div
        className={` absolute px-4 py-4  border border-gray-200 bg-white z-50 shadow-2xl rounded-lg top-0 right-0   `}
      >
        {/* <!-- title  --> */}
        <h3 className="text-lg font-semibold">Add or remove title </h3>
        <form action="" className="flex flex-col gap-4 py-2">
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              className="accent-red-500 outline-2 w-4 h-4 rounded-md"
            />
            <span className="text-lg capitalize font-semibold">title</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              className="accent-red-500 outline-2 w-4 h-4 rounded-md"
            />
            <span className="text-lg capitalize font-semibold">categories</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              className="accent-red-500 outline-2 w-4 h-4 rounded-md"
            />
            <span className="text-lg capitalize font-semibold">date</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              className="accent-red-500 outline-2 w-4 h-4 rounded-md"
            />
            <span className="text-lg capitalize font-semibold">time</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              className="accent-red-500 outline-2 w-4 h-4 rounded-md"
            />
            <span className="text-lg capitalize font-semibold">action</span>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TableColumnOption;
