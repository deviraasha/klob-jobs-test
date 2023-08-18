import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { List } from "./components/list";
import AddNew from "./components/AddNew";
import { Navbar } from "./components/Navbar";
import Detail from "./components/Detail";
import Edit from "./components/Edit";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/addNew" element={<AddNew />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
