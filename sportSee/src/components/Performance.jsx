import RadarGraph from '../chart/RadarGraph.jsx';
import '../assets/styles/Performance.css';
import PropTypes from 'prop-types';

const Performance = ({performanceData}) => {

  if (!performanceData) {
    return <div>Données de performance non disponibles.</div>;
  }

  const radarChartData = performanceData.data.map(item => ({
    subject: performanceData.kind[item.kind],
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