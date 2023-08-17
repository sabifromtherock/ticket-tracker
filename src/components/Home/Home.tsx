import { Link } from "react-router-dom";
import { Employee } from "../../types/Employee";

type HomeProps = {
  team: Employee[];
  profilePicture: string;
};

const Home = ({ team, profilePicture }: HomeProps) => {
  return (
    <div>
      <h2>Team members</h2>
      {team.map((employee) => {
        return (
          <Link to={`/profile/${employee.name.split(" ").join("-")}`}>
            <img src={profilePicture} alt="profile picture" />
            <h3>{employee.name}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
