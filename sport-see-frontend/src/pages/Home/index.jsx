import "./style.css";
import { Link } from "react-router-dom";
import { USER_MAIN_DATA } from "../../utils/urlMockData";
import useFetchData from "../../services/api/useFetchData";

const Home = () => {
  const { usersData } = useFetchData(USER_MAIN_DATA);

  return (
    <div className="homeWrapper">
      <h1 className="homeTitle">utilisateurs enregistrés</h1>
      <ul className="usersList">
        {usersData &&
          usersData.map((user) => (
            <li key={user.id} className="itemUsersList">
              <Link className="linkToUser" to={`/profil/${user.id}`}>
                {user.userInfos.firstName} {user.userInfos.lastName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
