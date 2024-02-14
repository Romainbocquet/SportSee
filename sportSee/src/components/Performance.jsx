import RadarGraph from '../chart/RadarGraph.jsx';
import '../assets/styles/Performance.css';
import PropTypes from 'prop-types';

const translateSubject = (subject, translationDict) => {
  return translationDict[subject] || subject;
};

const Performance = ({ performanceData }) => {

  if (!performanceData) {
    return <div>Données de performance non disponibles.</div>;
  }

  const translationDict = {
    'cardio': 'cardio',
    'energy': 'énergie',
    'endurance': 'endurance',
    'strength': 'force',
    'speed': 'vitesse',
    'intensity': 'intensité'
  };

  const radarChartData = performanceData.data.map(item => ({
    subject: translateSubject(performanceData.kind[item.kind], translationDict),
    A: item.value,
    fullMark: 150
  }));

  return (
    <div className='performance'>
      <RadarGraph data={radarChartData} />
    </div>
  );
};

Performance.propTypes = {
  performanceData: PropTypes.object.isRequired,
};

export default Performance;
