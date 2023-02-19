import "./style.css";
import { Link } from "react-router-dom";
import useFetchData from "../../services/api/useFetchData";
import loadMockedData from "../../utils/loadMockedData";
import REACT_APP_ENV from "../../utils/processEnvironment";

const Home = () => {
  const { userData } =
    REACT_APP_ENV === "DEV" ? loadMockedData() : useFetchData();

  return (
    <div className="homeWrapper">
      <h1 className="homeTitle">utilisateurs enregistrés</h1>
      <ul className="usersList">
        {userData &&
          userData.map((user) => (
            <li key={user.id} className="itemUsersList">
              <Link className="linkToUser" to={`/profil/${user.id}`}>
                {user.firstName} {user.lastName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
