import { useRef } from "react";
import CheckBox from "./CheckBox";

function TableColumnOption({
  onHandleOptionStatus,
  onCheckboxChange,
  onHandleFilterColumns,
  value,
}) {
  // hide the column option, when user click outside in it
  const optionRef = useRef();
  const handleCloseOption = (e) => {
    if (optionRef.current === e.target) {
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
        <h3 className="text-lg font-semibold capitalize">
          Add or remove columns{" "}
        </h3>
        <form action="" className="flex flex-col gap-4 py-2">
          {Object.keys(value).map((keys, id) => (
            <CheckBox
              key={id}
              label={keys}
              checked={value[keys]}
              onCheckboxChange={onCheckboxChange}
              onHandleFilterColumns={onHandleFilterColumns}
            />
          ))}
        </form>
      </div>
    </div>
  );
}
export default TableColumnOption;
