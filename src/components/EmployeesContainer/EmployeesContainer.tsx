import { useState } from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import team from "../../data/team";
import Select from "../Select/Select";
import { Team } from "../../types/Team";
import Filter from "../Filter/Filter";

// Set : automatically remove duplicates
// [...new Set(roles)] : convert the set back to an array
const uniqueRoles: string[] = [...new Set(team.map((member) => member.role))];

const EmployeesContainer = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [name, setName] = useState<string>("");

  let filteredTeam: Team[] = team.filter((employee) => {
    if (name) return employee.name.toLowerCase().includes(name);

    if (selectedRole) return selectedRole === employee.role;
  });

  if (!name && filteredTeam.length === 0) filteredTeam = [...team];

  return (
    <div className="employees">
      <div className="employees__forms">
        <Filter setName={setName} />
        <Select roles={uniqueRoles} setSelectedRole={setSelectedRole} />
      </div>
      <div className="employees-container">
        {filteredTeam.map((employee) => {
          return (
            <EmployeeCard
              name={employee.name}
              role={employee.role}
              key={employee.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EmployeesContainer;
