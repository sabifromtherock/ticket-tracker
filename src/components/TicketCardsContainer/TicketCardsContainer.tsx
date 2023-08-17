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
};

const TicketCardsContainer = ({ team }: TicketCardsContainerProps) => {
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
    <div className="ticket">
      <div className="ticket__forms">
        <Filter setName={setName} />
        <Select roles={uniqueRoles} setSelectedRole={setSelectedRole} />
      </div>
      <div className="ticket-container">
        {filteredTeam.map((employee) => {
          return (
            <TicketCard
              name={employee.name}
              role={employee.role}
              employee={team[employee.id - 1]}
              key={employee.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TicketCardsContainer;
