import React, { useContext, useEffect } from "react";
import { Context } from "../context";
const Filter = () => {
    const { items, handleSearch, keys,keyFinder } = useContext(Context);

    useEffect(() => {
        keyFinder()
    }, [items])

    return (
        <div className="filterContainer">
            <div className="search">
                <input
                    type="text"
                    placeholder="Search here"
                    className="filterSearch"
                    onChange={handleSearch}
                />
            </div>
            {/* {items.map((item) => (
                <p key={item.__rowNum__}>{item.Name}</p>
            ))} */}

            {items.length > 0 && <div className="keysContainer">{keys.map((key,index) => <p key={index+'1'}>{key}</p>)}</div>}
        </div>
    );
};

export default Filter;
