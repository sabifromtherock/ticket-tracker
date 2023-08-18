import "./Profile.scss";
import { useParams } from "react-router-dom";
import { Employee } from "../../types/Employee";
import placeHolderImage from "../../assets/images/profile-picture.png";

type EmployeeTileProps = {
  team: Employee[];
};

const Profile = ({ team }: EmployeeTileProps) => {
  const { id } = useParams();
  const employee = team.find((employee) => employee.id === Number(id));

  if (!employee) return <p>Employee ID not found.</p>;

  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeHolderImage;
  };

  return (
    <div className="profile-container">
      <div className="profile-container__person">
        {
          <img
            className="profile-container__image"
            src={employee.profile.profilePicture}
            onError={onImageError}
            alt="profile picture"
          />
        }
        <h3 className="profile-container__name">{employee.name}</h3>
      </div>
      <div className="profile-container__details">
        <p className="profile-container__paragraph">
          <strong>Role:</strong> {employee.role}
        </p>
        <p className="profile-container__paragraph">
          <strong>Experience:</strong> {employee.profile.experience}
        </p>
        <p className="profile-container__paragraph">
          <strong>Department:</strong> {employee.profile.department}
        </p>
        <ul className="profile-container__list">
          <strong>Tech Stack:</strong>
          {employee.profile.techstack.map((tech, index) => {
            return (
              <li className="profile-container__item" key={index}>
                {tech}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
