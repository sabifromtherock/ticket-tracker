import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import EmployeesContainer from "./components/EmployeesContainer/EmployeesContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/tickets" element={<EmployeesContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
