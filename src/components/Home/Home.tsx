import { Link } from "react-router-dom";
import { Employee } from "../../types/Employee";
import placeHolderImage from "../../assets/images/profile-picture.png";
import "./Home.scss";

type HomeProps = {
  team: Employee[];
};

const Home = ({ team }: HomeProps) => {
  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeHolderImage;
  };

  return (
    <div className="home">
      <h2 className="home__title">Team members</h2>
      <div className="home__content">
        {team.map((employee) => {
          return (
            <Link
              className="home__link"
              key={employee.id}
              to={`/profile/${employee.id}`}
            >
              <img
                className="home__image"
                src={employee.profile.profilePicture}
                onError={onImageError}
                alt="profile picture"
              />
              <h3 className="home__name">{employee.name}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
