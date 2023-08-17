import { useState } from "react";
import TicketCard from "../TicketCard/TicketCard";
import team from "../../data/team";
import Select from "../Select/Select";
import { Employee } from "../../types/Employee";
import Filter from "../Filter/Filter";

// Set : automatically remove duplicates
// [...new Set(roles)] : convert the set back to an array
const uniqueRoles: string[] = [...new Set(team.map((member) => member.role))];

type TicketCardsContainerProps = {
  team: Employee[];
  profilePicture: string;
};

const TicketCardsContainer = ({
  team,
  profilePicture,
}: TicketCardsContainerProps) => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [name, setName] = useState<string>("");

  let filteredTeam: Employee[] = team.filter((employee) => {
    if (name) return employee.name.toLowerCase().includes(name);

    if (selectedRole) return selectedRole === employee.role;
  });

  if (!name && filteredTeam.length === 0)
    filteredTeam = team.filter(() => {
      return true;
    });

  return (
    <div className="employees">
      <div className="employees__forms">
        <Filter setName={setName} />
        <Select roles={uniqueRoles} setSelectedRole={setSelectedRole} />
      </div>
      <div className="employees-container">
        {filteredTeam.map((employee) => {
          return (
            <TicketCard
              name={employee.name}
              role={employee.role}
              employee={team[employee.id - 1]}
              profilePicture={profilePicture}
              key={employee.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TicketCardsContainer;
