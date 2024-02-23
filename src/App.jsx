import { useState } from "react";
import Table from "./components/Table";
import TableColumnOption from "./components/TableColumnOption";
import { data } from "./utils/data";
function App() {
  const [tableData, setTableData] = useState(data);
  const [showColumnOptions, setShowColumnOptions] = useState(false);
  const [columnOption, setColumnOptions] = useState({
    title: true,
    categories: true,
    price: false,
    date: true,
    author: false,
    status: true,
    action: true,
  });

  // handle column options by user
  const handleColumnOptionChange = (option) => {
    // console.log(option);
    setColumnOptions({
      ...columnOption,
      [option]: !columnOption[option],
    });
  };

  // handle column option modal open and close
  const handleToggleOptions = () => {
    setShowColumnOptions((prev) => !prev);
  };

  return (
    // <!-- container section  -->
    <section className="container max-w-6xl  border-2 border-gray-300 rounded-md px-2 py-3  mx-auto mt-5 relative">
      {/* <!-- for title and option button  --> */}
      <div className="mb-6 flex  justify-between items-center ">
        <h2 className="text-xl font-semibold capitalize">Table title </h2>
        {/* <!-- design hamburger icon button  --> */}
        <div>
          <button
            id="menu-btn"
            className="block hamburger "
            type="button"
            onClick={handleToggleOptions}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* <!-- design end hamburger icon button end   --> */}
      </div>

      {/* <!-- table column options design  --> */}
      {showColumnOptions && (
        <TableColumnOption
          onHandleOptionStatus={handleToggleOptions}
          onCheckboxChange={handleColumnOptionChange}
          value={columnOption}
        />
      )}
      {/* <!-- end of table column options  --> */}

      {/* <!-- table  --> */}
      <Table tableData={tableData} columnOption={columnOption} />
      {/* <!-- end of table  --> */}
    </section>
  );
}

export default App;
