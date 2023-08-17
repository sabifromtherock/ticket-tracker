import { Link } from "react-router-dom";
import { Employee } from "../../types/Employee";
import placeHolderImage from "../../assets/images/profile-picture.png";

type HomeProps = {
  team: Employee[];
};

const Home = ({ team }: HomeProps) => {
  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeHolderImage;
  };

  return (
    <div>
      <h2>Team members</h2>
      {team.map((employee) => {
        return (
          <Link key={employee.id} to={`/profile/${employee.id}`}>
            <img
              src={employee.profile.profilePicture}
              onError={onImageError}
              alt="profile picture"
            />
            <h3>{employee.name}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
