import "./styles.css";
import { useState } from "react";
import CHECKBOX from "./CheckBox";
import CheckBoxComponent from "./CheckboxComponent";

export default function App() {
  const [checkboxData, setCheckboxData] = useState(CHECKBOX);
  //on clicking a checkbox -> toggle all children -> check if parent should be togled

  const locateObject = (name, data) => {
    for (const elem of data) {
      if (elem.name === name) {
        return elem; // Return the matched element
      }

      if (elem.children) {
        const result = locateObject(name, elem.children); // Pass `el` and `elem.children`
        if (result) {
          return result; // Return the found element from deeper levels
        }
      }
    }
    return null; // Return null if not found
  };

  const updateChildrenAndSelf = (locatedObject, isChecked) => {
    //How to Update children -> recurse children and set value
    locatedObject.checked = isChecked;
    if (locatedObject.children) {
      for (const elem of locatedObject.children) {
        updateChildrenAndSelf(elem, isChecked);
      }
    }
  };

  const updateParent = (parent, checkBoxArray) => {
    //iterate through parent.children, if any one is false, then parent is false
    const parentCheckedPrevious = parent.checked;
    parent.checked =
      parent.children.filter((el) => el.checked === false).length === 0;
    if (!parentCheckedPrevious === parent.checked && parent.parent) {
      updateParent(locateObject(parent.parent, checkBoxArray), checkBoxArray);
    }
  };

  const onCheckBoxClick = (isChecked, el) => {
    const newCheckBoxarray = [...CHECKBOX];
    //Locate Current Object
    const locatedObject = locateObject(el.name, newCheckBoxarray);
    updateChildrenAndSelf(locatedObject, isChecked);
    if (el.parent) {
      const locateParent = locateObject(el.parent, newCheckBoxarray);
      updateParent(locateParent, newCheckBoxarray);
    }
    console.log("newCheckBoxarray", newCheckBoxarray);
    setCheckboxData(newCheckBoxarray);
  };

  const renderCheckbox = (nestedObj, level = 0) => {
    return nestedObj.map((el) => (
      <div key={el.name} style={{ paddingLeft: `${level * 15}px` }}>
        <CheckBoxComponent el={el} onCheckChange={onCheckBoxClick} />
        {el.children && renderCheckbox(el.children, level + 1)}
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Nested Checkbox</h1>
      <div className="checkbox-challenge-container">
        {renderCheckbox(checkboxData)}
      </div>
    </div>
  );
}
