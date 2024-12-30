const CheckBoxComponent = ({ el, onCheckChange }) => {
  return (
    <div className="individual">
      <input
        type="checkbox"
        checked={el.checked}
        onChange={(e) => onCheckChange(e.target.checked, el)}
      />
      {el.name}
    </div>
  );
};

export default CheckBoxComponent;
