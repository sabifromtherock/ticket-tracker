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
    <div>
      <div>
        {
          <img
            src={employee.profile.profilePicture}
            onError={onImageError}
            alt="profile picture"
          />
        }
        <h3>{employee.name}</h3>
      </div>
      <p>{employee.role}</p>
      <p>Experience: {employee.profile.experience}</p>
      <p>Department: {employee.profile.department}</p>
      <ul>
        {employee.profile.techstack.map((tech, index) => {
          return <li key={index}>{tech}</li>;
        })}
      </ul>
    </div>
  );
};

export default Profile;
