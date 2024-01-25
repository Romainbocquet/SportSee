import ScoreGraph from '../chart/ScoreGraph.jsx';
import PropTypes from 'prop-types';

const Score = ({scoreData}) => {

  if (!scoreData) {
    return <div>Données de sessions moyennes non disponibles.</div>;
  }

  return (    
    <div className='score'>
      <h2>Score</h2>
      <ScoreGraph data={scoreData} />
    </div>
  );
};

Score.propTypes = {
  scoreData: PropTypes.number.isRequired,
};


export default Score;