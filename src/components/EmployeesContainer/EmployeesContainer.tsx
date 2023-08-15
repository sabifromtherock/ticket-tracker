import { useState } from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import team from "../../data/team";
import Select from "../Select/Select";
import { Team } from "../../types/Team";

// Set : automatically remove duplicates
// [...new Set(roles)] : convert the set back to an array
const uniqueRoles: string[] = [...new Set(team.map((member) => member.role))];

const EmployeesContainer = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");

  let filteredTeam: Team[] = team.filter((employee) => {
    return selectedRole === employee.role;
  });

  if (selectedRole === "") filteredTeam = [...team];

  return (
    <div className="employees">
      <Select roles={uniqueRoles} setSelectedRole={setSelectedRole} />
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
