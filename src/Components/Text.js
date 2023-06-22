import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("double click to edit");
  
  const handleDoubleClick = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setVal(e.target.value);
  };

  const handleInputBlur = () => {
    setEditMode(false);
  };

  const textStyle = {
    fontSize: "24px", 
  };

  return (
    <Draggable>
      {editMode ? (
        <input
          value={val}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <h1 style={textStyle} onDoubleClick={handleDoubleClick}>
          {val}
        </h1>
      )}
    </Draggable>
  );
};

export default Text;
