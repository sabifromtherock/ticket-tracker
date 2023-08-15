import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import team from "./data/team";

function App() {
  return (
    <div className="app">
      <EmployeeCard name={team[0].name} role={team[0].role} />
    </div>
  );
}

export default App;
