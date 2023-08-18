import greenTick from "../../assets/images/check.png";
import redCross from "../../assets/images/crossed.png";
import placeHolderImage from "../../assets/images/profile-picture.png";
import "./TicketCard.scss";
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
    <div className="ticket-card">
      <Link
        className="ticket-card__link"
        to={`/ticket-tracker/profile/${employee.id}`}
      >
        <img
          src={employee.profile.profilePicture}
          onError={onImageError}
          alt="profile image"
          className="ticket-card__profile-image"
        />
        <h2 className="ticket-card__name">{name}</h2>
      </Link>
      <p className="ticket-card__role">{role}</p>
      <div className="ticket-card__counter-container">
        <h4 className="ticket-card__counter-title">Counter</h4>
        <p className="ticket-card__counter">{counter}</p>
        <div className="ticket-card__arrow-container">
          <img
            className="ticket-card__arrow"
            src={redCross}
            alt="red cross"
            onClick={handleDecrement}
          />
          <img
            className="ticket-card__arrow"
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
