import { createContext, useEffect, useState } from "react";
import * as XLSX from "xlsx";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const [filedetails, setFileDetails] = useState();
    const [keys, setKeys] = useState("");
    const [keyChecked, setKeyChecked] = useState(false);
    const [checkedValue, setCheckedValue] = useState([]);
    const [formData, setFormData] = useState({});

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

    const handleCheckbox = (e) => {
        const { name, checked, type, id, value } = e.target;
        if (checked) {
            setCheckedValue((prev) => [...prev, value]);
        } else
            setCheckedValue((prev) => {
                return [...prev.filter((checkedV) => checkedV !== value)];
            });
        console.log("name" + name, "checked" + checked);
    };
    console.log(
        "context",
        "checkedValue",
        checkedValue,
        "length",
        checkedValue.length
    );

    const search = (data, checkedV) => {
        if (checkedV.length === 0) {
            return data.filter((item) =>
                keys.some((key) =>
                    item[key]
                        .toString()
                        .toLowerCase()
                        .includes(query.toLowerCase())
                )
            );
        } else if (checkedV.length) {
            return data.filter((item) =>
                checkedV.some((checkedItem) =>
                    item[checkedItem]
                        .toString()
                        .toLowerCase()
                        .includes(query.toLowerCase())
                )
            );
        }
    };

    const checkboxFilter = () => {};

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
                keyChecked,
                setKeyChecked,
                handleCheckbox,
                formData,
                setFormData,
                checkedValue,
                setCheckedValue,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
