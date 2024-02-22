function CheckBox({ label, checked, onCheckboxChange }) {
  // console.log(label, checked);
  //   console.log(value);
  const handleOnChange = (option) => {
    onCheckboxChange(option);
  };
  return (
    <div className="flex gap-2 items-center ">
      <input
        type="checkbox"
        value={checked}
        checked={checked}
        onChange={() => handleOnChange(label)}
        id={label}
        className="accent-red-500 outline-2 w-4 h-4 rounded-md"
      />
      <label htmlFor={label} className="text-lg capitalize font-semibold">
        {label}
      </label>
    </div>
  );
}
export default CheckBox;
