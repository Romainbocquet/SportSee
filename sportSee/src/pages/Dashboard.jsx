import '../assets/styles/Dashboard.css';
import { useParams } from 'react-router-dom';
import userData from '../../datas/data.js';
import Nutrient from '../components/Nutrient.jsx';
import AverageSessions from '../components/AverageSessions.jsx';
import Performance from '../components/Performance.jsx';
import Score from '../components/Score.jsx';
import Activite from '../components/Activite.jsx';

export default function Dashboard() {
  const { id } = useParams();

  const userDatas = (userData.USER_MAIN_DATA.find(user => user.id === parseInt(id, 10)));
  const keyData = userDatas.keyData;
  const scoreData = userDatas.todayScore;

  const userDatasAverageSessions = userData.USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(id, 10));
  const userDatasPerf = userData.USER_PERFORMANCE.find(user => user.userId === parseInt(id, 10));
  const activiteData = userData.USER_ACTIVITY.find(user => user.userId === parseInt(id, 10));
  
  if (!userDatas) {
    return <div>Utilisateur non trouvé</div>;
  }

  return (
    <div id="dashboard">
      <h1 className='bvn-message'>Bonjour <span className='user-name'>{userDatas.userInfos.firstName}</span></h1>
      <h2 className='encouragement'>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
      <div className='dashboard-detail'>
        <div className='graphiques'>
          <div className='graphiques-line'>
            <Activite activiteData={activiteData} />
          </div>
          <div className='graphiques-line'>
            <AverageSessions averageSessionsData={userDatasAverageSessions} />
            <Performance performanceData={userDatasPerf} />
            <Score scoreData={scoreData} />
          </div>
        </div>
        <Nutrient keyData={keyData} />
      </div>
    </div>
  );
}