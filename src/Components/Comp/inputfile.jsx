import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

function FileInputComponent() {
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFileName(file);
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  const openFileDialog = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div onClick={openFileDialog} style={{ display: "flex", margin: "10px", justifyContent: "start", alignItems: "center", border: "1px solid #D7DEE2", borderRadius: "5px", width: "30%", height: "40px", position:"relative" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "30%", height: "100%", background: "#F4F6F7" }}>
        {
          selectedFileName ?
            <img src={imageUrl} style={{ width: "100%", height: "100%", objectFit: "contain", background: "#F4F6F7" }} />
            :
            <p style={{ fontSize: "100%", fontWeight: "600", color: "grey" }}>Browse</p>
        }
      </div>
      <div style={{ width: "70%", height: "100%", background: "white", display: "flex", alignItems: "center", position:"relative" }}>
        <p style={{ color: "black", fontSize: "13px", marginLeft: "5px" }}>{selectedFileName ? selectedFileName.name.length > 20 ? selectedFileName.name.substring(0, 20) + '...' : selectedFileName.name : "No File Choosen"}</p>
        {/* <p style={{color: "black", fontSize: "13px", marginLeft:"5px"}}>{selectedFileName ? selectedFileName.name : "No File Choosen"}</p> */}
        <a href="www.google.com" style={{position: "absolute", top:"0", right: "0"}}>
          <FaExternalLinkAlt size={10} />
        </a>
      </div>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
    </div>
  );
}

export default FileInputComponent;
