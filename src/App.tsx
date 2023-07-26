import { Route, Routes } from "react-router-dom";
import { Pagination } from "./components/Pagination/Pagination";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Table } from "./components/Table/Table";
import { TitleList } from "./components/TitleList/TitleList";


function App() {
    return (
        <div className="App">
            <SearchBar />
            <TitleList />
            <Routes>
                <Route path="/" element={<Table />} />
                <Route path="/:id" element={<Table />} />
            </Routes>
            <Pagination />
        </div>
    );
}

export default App;
