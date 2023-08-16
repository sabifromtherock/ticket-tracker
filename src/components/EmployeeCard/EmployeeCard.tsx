import "./EmployeeCard.scss";
import greenTick from "../../assets/images/check.png";
import redCross from "../../assets/images/crossed.png";
import { useState } from "react";
import { Team } from "../../types/Team";

type EmployeeCardProps = {
  name: string;
  role: string;
  employee: Team;
};

const EmployeeCard = ({ name, role, employee }: EmployeeCardProps) => {
  const [counter, setCounter] = useState<number>(employee.counter || 0);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);

    employee.counter = counter + 1;
  };

  const handleDecrement = () => {
    if (counter === 0) return;
    setCounter((prevCounter) => prevCounter - 1);

    employee.counter = counter - 1;
  };

  return (
    <div className="employee-card">
      <h2 className="employee-card__title">{name}</h2>
      <p className="employee-card__role">{role}</p>
      <div className="employee-card__counter-container">
        <h4 className="employee-card__counter-title">Counter</h4>
        <p className="employee-card__counter">{counter}</p>
        <div className="employee-card__arrow-container">
          <img
            className="employee-card__arrow"
            src={redCross}
            alt="red cross"
            onClick={handleDecrement}
          />
          <img
            className="employee-card__arrow"
            src={greenTick}
            alt="green tick"
            onClick={handleIncrement}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
