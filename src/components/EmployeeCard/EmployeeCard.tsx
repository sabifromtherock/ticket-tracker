import "./EmployeeCard.scss";
import greenTick from "../../assets/images/check.png";
import redCross from "../../assets/images/crossed.png";
import { useState } from "react";

type EmployeeCardProps = {
  name: string;
  role: string;
};

const EmployeeCard = ({ name, role }: EmployeeCardProps) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    counter === 0 ? null : setCounter(counter - 1);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      <div>
        <h4>Counter</h4>
        <p>{counter}</p>
        <img src={redCross} alt="red cross" onClick={handleDecrement} />
        <img src={greenTick} alt="green tick" onClick={handleIncrement} />
      </div>
    </div>
  );
};

export default EmployeeCard;
