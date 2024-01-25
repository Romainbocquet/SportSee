import SimpleLineChart from '../chart/SimpleLineChart.jsx';
import PropTypes from 'prop-types';
import '../assets/styles/AverageSessions.css';

const AverageSessions = ({averageSessionsData}) => {

  if (!averageSessionsData) {
    return <div>Données de sessions moyennes non disponibles.</div>;
  }

  return (    
    <div className='averageSessions'>
      <SimpleLineChart data={averageSessionsData.sessions} title="Durée moyenne des sessions" />
    </div>
  );
};

AverageSessions.propTypes = {
  averageSessionsData: PropTypes.object.isRequired,
};


export default AverageSessions;