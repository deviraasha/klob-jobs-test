import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { Home } from "./components/home";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
