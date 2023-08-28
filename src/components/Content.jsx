import React, { useContext, useEffect } from "react";
import { Context } from "../context";

const Content = () => {
    const { items, query, keyFinder, keys, search, checkedValue } =
        useContext(Context);
    useEffect(() => {
        keyFinder();
    }, [items]);
    console.log(" haan" + checkedValue.length);

    const result = search(items);
    keys.length > 0 && search(items);
    console.log(result);

    return (
        <div className="contentContainer">
            <table>
                <tbody>
                    {keys.length > 0 && (
                        <tr>
                            {keys.map((key, index) => (
                                <th key={index + "112"}>{key}</th>
                            ))}
                        </tr>
                    )}
                    {result.length > 0 && (
                        <>
                            {result.map((item, index) => (
                                <tr key={index}>
                                    {keys.map((key, index) => (
                                        <td key={index}>{item[key]}</td>
                                    ))}
                                </tr>
                            ))}
                        </>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Content;
