import React, { useContext, useEffect } from "react";
import { Context } from "../context";

const Content = () => {
    const { items, query, keyFinder, keys, search } = useContext(Context);
    useEffect(() => {
        keyFinder();
    }, [items]);

    const result = search(items);
    keys.length > 0 && search(items);
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
                            {/* {items
                                .filter((item) =>
                                    item.Name.toLowerCase().includes(
                                        query.toLowerCase()
                                    )
                                )
                                .map((item, index) => (
                                    <tr>
                                        {keys.map((key) => (
                                            <td>{item[key ]}</td>
                                        ))}
                                    </tr>
                                ))} */}
                            {result.map((item) => (
                                <tr key={item.__rowNum__ + 1000}>
                                    {keys.map((key) => (
                                        <td>{item[key]}</td>
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
