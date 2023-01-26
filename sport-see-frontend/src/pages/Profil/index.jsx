/* eslint-disable no-console */
import "./style.css";
import { useParams } from "react-router-dom";
import useFetchData from "../../services/api/useFetchData";
import { USER_ALL_DATA } from "../../utils/urlMockData";
import KIND_PERFORMANCE from "../../utils/kindValues";

const Profil = () => {
  const { userId } = useParams();
  const {
    userData,
    userActivity,
    userAverageSessions,
    userTodayScore,
    userPerformance,
    userKeyData,
  } = useFetchData(USER_ALL_DATA, userId);
  console.log(userData);
  console.log(userActivity);
  console.log(userAverageSessions);
  console.log(userTodayScore);
  console.log(KIND_PERFORMANCE);
  console.log(userPerformance);
  console.log(userKeyData);

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
