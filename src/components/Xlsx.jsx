import React, { useContext, useState } from "react";
import { RiAddCircleFill, RiFileExcel2Fill } from "react-icons/ri";
import { Context } from "../context";
const Xlsx = () => {
    const { handleOnChange, items, filedetails } = useContext(Context);
    return (
        <>
            <div className="inputContainer">
                <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    onChange={(e) => handleOnChange(e)}
                />
                <label htmlFor="file" className="label">
                    <div className="icons">
                        <RiFileExcel2Fill className="xlicon" size={30} />
                        <RiAddCircleFill size={20} className="addicon" />
                    </div>
                    <p>Insert your xlsx file here.</p>
                </label>
                {filedetails && (
                    <div className="filedetails">
                        <p>{filedetails.name}</p>
                        <p>{`${filedetails.size} bytes`}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Xlsx;
