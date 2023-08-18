import { Link } from "react-router-dom";
import "./NotExist.scss";

const NotExist = () => {
  return (
    <div className="not-exist">
      <Link to={"/"} className="not-exist__link">
        Under construction...
        <br />
        Click on Me to go Home page!
      </Link>
    </div>
  );
};

export default NotExist;
