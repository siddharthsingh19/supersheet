import "./App.css";
import Content from "./components/Content";
import Filter from "./components/Filter";
import Xlsx from "./components/Xlsx";
import { RiFileExcel2Fill } from "react-icons/ri";
import "./style.scss";
import AppContext from "./context";

function App() {
    return (
        <AppContext>
            <div>
                <div className="logo">
                    <RiFileExcel2Fill size={40} className="xlicon" />
                    <h1>SuperSheet</h1>
                </div>
                <Xlsx />
                <div className="below">
                    <Filter />
                    <Content />
                </div>
            </div>
        </AppContext>
    );
}

export default App;
