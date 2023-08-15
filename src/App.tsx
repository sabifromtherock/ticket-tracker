import "./App.scss";
import team from "./data/team";

import EmployeesContainer from "./components/EmployeesContainer/EmployeesContainer";

function App() {
  return (
    <div className="app">
      <EmployeesContainer team={team} />
    </div>
  );
}

export default App;
