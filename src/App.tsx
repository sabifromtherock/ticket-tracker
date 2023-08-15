import "./App.scss";
import EmployeesContainer from "./components/EmployeesContainer/EmployeesContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <EmployeesContainer />
    </div>
  );
}

export default App;
