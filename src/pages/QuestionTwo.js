import Dropdown from "../components/Dropdown";
import { selectOptions } from "../constants";

const QuestionTwo = () => {
  const handleChangeSelect = (e) => {
    console.log(e);
  };

  return (
    <div className="App">
      <div className="dropdown--container">
        <h2 className={"select--heading"}>
          Single Selection from the Dropdown List
        </h2>
        <Dropdown
          options={selectOptions}
          placeHolder="Please select..."
          onChange={handleChangeSelect}
        />
        <h2 className={"select--heading"}>
          Multi Selection from the Dropdown List
        </h2>
        <Dropdown
          options={selectOptions}
          placeHolder="Please select..."
          onChange={handleChangeSelect}
          isMultiSelect
        />
        <h2 className={"select--heading"}>
          Search Functionality in the dropdown list
        </h2>
        <Dropdown
          options={selectOptions}
          placeHolder="Please select..."
          onChange={handleChangeSelect}
          isSearchable
        />
      </div>
    </div>
  );
};
export default QuestionTwo;
