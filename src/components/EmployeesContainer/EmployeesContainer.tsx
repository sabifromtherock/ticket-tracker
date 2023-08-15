import { useState } from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import team from "../../data/team";
import Select from "../Select/Select";
import { Team } from "../../types/Team";

// Set automatically remove duplicates
// convert the set back to an array using the spread operator ([...new Set(roles)])
const uniqueRoles: string[] = [...new Set(team.map((member) => member.role))];

const EmployeesContainer = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");

  let filteredTeam: Team[] = team.filter((employee) => {
    return selectedRole === employee.role;
  });

  if (selectedRole === "") filteredTeam = [...team];

  return (
    <div>
      <Select roles={uniqueRoles} setSelectedRole={setSelectedRole} />
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
  );
};

export default EmployeesContainer;
