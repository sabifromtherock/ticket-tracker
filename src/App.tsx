import "./App.scss";
import team from "./data/team";
import EmployeesContainer from "./components/EmployeesContainer/EmployeesContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <EmployeesContainer team={team} />
    </div>
  );
}

export default App;
