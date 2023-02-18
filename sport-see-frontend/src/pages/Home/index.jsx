import "./style.css";
import { Link } from "react-router-dom";
// import { USER_MAIN_DATA } from "../../utils/urlMockData";
import useFetchData from "../../services/api/useFetchData";
import loadMockedData from "../../utils/loadMockedData";

const { REACT_APP_ENV } = process.env;

const Home = () => {
  const { users } = REACT_APP_ENV === "DEV" ? loadMockedData() : useFetchData();

  return (
    <div className="homeWrapper">
      <h1 className="homeTitle">utilisateurs enregistrés</h1>
      <ul className="usersList">
        {users &&
          users.map((user) => (
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
