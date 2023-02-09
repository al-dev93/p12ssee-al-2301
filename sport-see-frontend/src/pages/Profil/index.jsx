/* eslint-disable no-console */
import "./style.css";
import { useParams } from "react-router-dom";
import useFetchData from "../../services/api/useFetchData";
import { USER_ALL_DATA } from "../../utils/urlMockData";
import ActivityBarChart from "../../components/ActivityBarChart";
import AverageSessionsGraphic from "../../components/AverageSessionsGraphic";
import PerformanceRadarChart from "../../components/PerformanceRadarChart";
import ScoreRadialBarChart from "../../components/ScoreRadialBarChart";

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
  console.log(userPerformance);
  console.log(userKeyData);

  return (
    <>
      <header className="dashboardHeader">
        <h1>
          Bonjour <strong>{userData && userData.firstName}</strong>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      <div className="dashboardWrapper">
        <section className="activityGraphic">
          <h2 className="barChartTitle">Activité quotidienne</h2>
          {userActivity && <ActivityBarChart data={userActivity} />}
        </section>
        <section className="averageSessionsGraphic">
          <h2 className="lineChartTitle">Durée moyenne des sessions</h2>
          {userAverageSessions && (
            <AverageSessionsGraphic data={userAverageSessions} />
          )}
        </section>
        <section className="performanceGraphic">
          {userPerformance && <PerformanceRadarChart data={userPerformance} />}
        </section>
        <section className="todayScoreGraphic">
          <h2 className="radialBarChartTitle">Score</h2>
          {userTodayScore && <ScoreRadialBarChart data={userTodayScore} />}
          <span className="radarBarChartLabel">de votre objectif</span>
        </section>
        <aside className="keyDataCards">données clés</aside>
      </div>
    </>
  );
};

export default Profil;
