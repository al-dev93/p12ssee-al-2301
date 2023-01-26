/* eslint-disable no-console */
import "./style.css";
import { useParams } from "react-router-dom";
import { USER_ALL_DATA } from "../../utils/urlMockData";
import useFetchData from "../../services/api/useFetchData";

const Profil = () => {
  const { userId } = useParams();
  const { userData, userActivity, userAverageSessions } = useFetchData(
    USER_ALL_DATA,
    userId
  );
  console.log(userData);
  console.log(userActivity);
  console.log(userAverageSessions);

  return (
    <div className="profilWrapper">
      <header>
        <h1>
          Bonjour <strong>{userData && userData.firstName}</strong>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
    </div>
  );
};

export default Profil;
