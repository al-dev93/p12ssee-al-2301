/* eslint-disable no-console */
import "./style.css";
import { useParams } from "react-router-dom";
import useFetchData from "../../services/api/useFetchData";
import ActivityBarChart from "../../components/ActivityBarChart";
import AverageSessionsGraphic from "../../components/AverageSessionsGraphic";
import PerformanceRadarChart from "../../components/PerformanceRadarChart";
import ScoreRadialBarChart from "../../components/ScoreRadialBarChart";
import pictoButtonList from "../../utils/pictoButtonList";
import CardKeyData from "../../components/CardKeyData";
import loadMockedData from "../../utils/loadMockedData";
import REACT_APP_ENV from "../../utils/processEnvironment";

const Profil = () => {
  const { userId } = useParams();
  const { cardButton } = pictoButtonList;
  const {
    userData,
    userActivity,
    userAverageSessions,
    userTodayScore,
    userPerformance,
    userKeyData,
  } = REACT_APP_ENV === "DEV" ? loadMockedData(userId) : useFetchData(userId);
  console.log(userData);
  console.log(userActivity);
  console.log(userAverageSessions);
  console.log(userTodayScore);
  console.log(userPerformance);
  console.log(userKeyData);

  return (
    <>
      <header className="dashboardHeader">
        <div className="titleWrapper">
          <h1>
            Bonjour <strong>{userData && userData.firstName}</strong>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
      </header>
      <div className="dashboardWrapper">
        <section className="activityGraphic">
          <h2 className="chartTitle barChartTitle">Activité quotidienne</h2>
          {userActivity && <ActivityBarChart data={userActivity} />}
        </section>
        <section className="averageSessionsGraphic">
          <h2 className="chartTitle lineChartTitle">
            Durée moyenne des sessions
          </h2>
          {userAverageSessions && (
            <AverageSessionsGraphic data={userAverageSessions} />
          )}
        </section>
        <section className="performanceGraphic">
          {userPerformance && <PerformanceRadarChart data={userPerformance} />}
        </section>
        <section className="todayScoreGraphic">
          <h2 className="chartTitle radialBarChartTitle">Score</h2>
          {userTodayScore && <ScoreRadialBarChart data={userTodayScore} />}
          <span className="radarBarChartLabel">de votre objectif</span>
        </section>
        <aside className="keyDataCards">
          {userKeyData &&
            cardButton.map((button) => (
              <CardKeyData
                key={button.name}
                button={button}
                data={userKeyData}
              />
            ))}
        </aside>
      </div>
    </>
  );
};

export default Profil;
