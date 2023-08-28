import React, { useContext } from "react";
import { Context } from "../context";

const KeyFilter = ({ items, keys }) => {
    const { keyChecked, setKeyChecked, handleCheckbox } = useContext(Context);

    return (
        <>
            {items.length > 0 && (
                <div className="keysContainer">
                    {keys.map((key, index) => (
                        <div className="keyCheckbox" key={index + "30"}>
                            <input
                                className="checkbox"
                                key={index + "19"}
                                type="checkbox"
                                id={key}
                                // checked={keyChecked}
                                name={key}
                                onChange={handleCheckbox}
                                value={key}
                            />
                            <label htmlFor={key}>{key}</label>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default KeyFilter;
