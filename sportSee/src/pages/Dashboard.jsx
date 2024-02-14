import React, { useState, useEffect } from 'react';
import '../assets/styles/Dashboard.css';
import { useParams } from 'react-router-dom';
import Nutrient from '../components/Nutrient.jsx';
import Switch from '../components/Switch.jsx';
import AverageSessions from '../components/AverageSessions.jsx';
import Performance from '../components/Performance.jsx';
import Score from '../components/Score.jsx';
import Activite from '../components/Activite.jsx';
import * as dataApi from '../../datas/dataApi';
import userData from '../../datas/data.js';
export default function Dashboard() {
  const { id } = useParams();
  const [checked, setChecked] = React.useState(false);
  const [userDatas, setUserDatas] = useState(null);
  const [userDatasAverageSessions, setUserDatasAverageSessions] = useState(null);
  const [userDatasPerf, setUserDatasPerf] = useState(null);
  const [activiteData, setActiviteData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userDataResponse;
        let averageSessionsResponse;
        let perfResponse;
        let activiteResponse;

        if (!checked) {
          userDataResponse = userData.USER_MAIN_DATA.find(user => user.id === parseInt(id, 10));
          averageSessionsResponse = userData.USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(id, 10));
          perfResponse = userData.USER_PERFORMANCE.find(user => user.userId === parseInt(id, 10));
          activiteResponse = userData.USER_ACTIVITY.find(user => user.userId === parseInt(id, 10));
        } else {
          const apiData = await dataApi.getUserData(id);
          userDataResponse = apiData.data;
          const averageSessionsData = await dataApi.getAverageSessionsData(id)
          averageSessionsResponse = averageSessionsData.data;
          const perfData = await dataApi.getPerformanceData(id);
          perfResponse = perfData.data;
          const activiteData = await dataApi.getActivityData(id);
          activiteResponse = activiteData.data;
        }

        setUserDatas(userDataResponse);
        setUserDatasAverageSessions(averageSessionsResponse);
        setUserDatasPerf(perfResponse);
        setActiviteData(activiteResponse);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, checked]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userDatas) {
    return <div>Utilisateur non trouvé</div>;
  }
  return (
    <div id="dashboard">
      <div className='profile-title'>
        <div>
          <h1 className='bvn-message'>Bonjour <span className='user-name'>{userDatas.userInfos.firstName}</span></h1>
          <h2 className='encouragement'>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
        <div>
          <Switch
          isOn={checked}
          handleToggle={() => setChecked(!checked)}
          colorOne="#000"
          colorTwo="#FF0101"
          />
        </div>
      </div>
      
      <div className='dashboard-detail'>
        <div className='graphiques'>
          <div className='graphiques-line'>
            <Activite activiteData={activiteData} />
          </div>
          <div className='graphiques-line'>
            <AverageSessions averageSessionsData={userDatasAverageSessions} />
            <Performance performanceData={userDatasPerf} />
            <Score scoreData={userDatas.todayScore} />
          </div>
        </div>
        <Nutrient keyData={userDatas.keyData} />
      </div>
    </div>
  );
}