import React, { useState, createRef } from "react";
import Text from "../Components/Text";
import { Button } from "react-bootstrap";
import { exportComponentAsJPEG } from "react-component-export-image";
import { useSearchParams } from "react-router-dom";
import "./EditPage.css"; // Import the CSS file

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const memeref = createRef();

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div ref={memeref} className="meme mt-5 mb-5">
        <img src={params.get("url")} alt="Meme" width="300px" />
        {Array(count).fill(0).map((e) => (
          <div key={e} className="text-container">
            <Text fontSize="24px" className="text" />
          </div>
        ))}
      </div>
      <div className="button-container">
        <Button onClick={addText}>Add Text</Button>
        <Button variant="success" onClick={(e) => exportComponentAsJPEG(memeref)}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
