import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { Team } from "../../types/Team";

type EmployeesContainerProps = {
  team: Team[];
};

const EmployeesContainer = ({ team }: EmployeesContainerProps) => {
  return (
    <div>
      {team.map((employee) => {
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
