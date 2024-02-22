import ScoreGraph from '../chart/ScoreGraph.jsx';
import PropTypes from 'prop-types';

const Score = ({scoreData}) => {
  if (scoreData === undefined) {
    return (    
      <div className='score'>
        <p className='noData'>Aucune donnée disponible</p>
      </div>
    );
  }
  let dataScore = scoreData * 100;
  let dataRest = 100 - dataScore;

  const dataBinding = [
    { name: 'Group A', value: dataScore },
    { name: 'Group B', value: dataRest },
  ];

  return (    
    <div className='score'>
      <ScoreGraph data={dataBinding} dataScore={dataScore} title='Score' />
    </div>
  );
};

Score.propTypes = {
  scoreData: PropTypes.number,
};


export default Score;