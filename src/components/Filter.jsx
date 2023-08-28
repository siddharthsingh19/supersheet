import React, { useContext, useEffect } from "react";
import { Context } from "../context";
import KeyFilter from "./KeyFilter";
const Filter = () => {
    const { items, handleSearch, keys, keyFinder } = useContext(Context);

    useEffect(() => {
        keyFinder();
    }, [items]);

    return (
        <>
            <div className="filterContainer">
                <div className="search">
                    <form>
                        <input
                            type="text"
                            placeholder="Search here"
                            className="filterSearch"
                            onChange={handleSearch}
                        />
                    </form>
                </div>
                {/* {items.map((item) => (
                    <p key={item.__rowNum__}>{item.Name}</p>
                ))} */}

                <KeyFilter items={items} keys={keys} />
            </div>
        </>
    );
};

export default Filter;
