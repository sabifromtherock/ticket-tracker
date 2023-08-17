import greenTick from "../../assets/images/check.png";
import redCross from "../../assets/images/crossed.png";
import placeHolderImage from "../../assets/images/profile-picture.png";

import { useState } from "react";
import { Employee } from "../../types/Employee";
import { Link } from "react-router-dom";

type EmployeeCardProps = {
  name: string;
  role: string;
  employee: Employee;
};

const TicketCard = ({ name, role, employee }: EmployeeCardProps) => {
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

  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeHolderImage;
  };

  return (
    <div className="employee-card">
      <Link to={`/profile/${employee.id}`}>
        <img
          src={employee.profile.profilePicture}
          onError={onImageError}
          alt="profile image"
          className="employee-card__profile-image"
        />
        <h2 className="employee-card__title">{name}</h2>
      </Link>
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

export default TicketCard;
