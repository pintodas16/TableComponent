import { useState } from "react";
import Table from "./components/Table";
import TableColumnOption from "./components/TableColumnOption";

function App() {
  const [showColumnOptions, setColumnOptions] = useState(false);
  const handleOptionStatus = () => {
    setColumnOptions((prev) => !prev);
    console.log("clicked");
  };
  return (
    // <!-- container section  -->
    <section className="container max-w-6xl  border-2 border-gray-300 rounded-md px-2 py-3  mx-auto mt-5 relative">
      {/* <!-- for title and option button  --> */}
      <div className="mb-6 flex  justify-between items-center ">
        <h2 className="text-xl font-semibold capitalize">Table title </h2>
        {/* <!-- design hamburger icon  --> */}
        <div>
          <button
            id="menu-btn"
            className="block hamburger "
            type="button"
            onClick={handleOptionStatus}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* <!-- design end hamburger icon  --> */}
      </div>

      {/* <!-- table column option design  --> */}
      {showColumnOptions && (
        <TableColumnOption onHandleOptionStatus={handleOptionStatus} />
      )}
      {/* <!-- end of table column option  --> */}

      {/* <!-- table  --> */}
      <Table />
      {/* <!-- end of table  --> */}
    </section>
  );
}

export default App;
