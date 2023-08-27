import { createContext, useEffect, useState } from "react";
import * as XLSX from "xlsx";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const [filedetails, setFileDetails] = useState();
    const [keys, setKeys] = useState("");
    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type: "buffer" });

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };

            fileReader.onerror = (err) => {
                reject(err);
            };
        });

        promise.then((d) => {
            setItems(d);
        });
    };

    const handleOnChange = (e) => {
        const file = e.target.files[0];
        setFileDetails(file);
        readExcel(file);
    };

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const keyFinder = () => {
        const xlsxkeys = Object.keys(items[0] || {});
        setKeys(xlsxkeys);
    };

    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toString().toLowerCase().includes(query))
        );
    };

    return (
        <Context.Provider
            value={{
                items,
                setItems,
                handleOnChange,
                handleSearch,
                query,
                setQuery,
                filedetails,
                setFileDetails,
                keys,
                setKeys,
                keyFinder,
                search,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
