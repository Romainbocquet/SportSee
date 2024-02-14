import BarGarph from '../chart/barGarph.jsx';
import PropTypes from 'prop-types';
import '../assets/styles/Activite.css';

const Activite = ({activiteData}) => {

  if (!activiteData) {
    return <div>Données de Activité quotidienne non disponibles.</div>;
  }

  return (    
    <div className='activite'>
      <BarGarph data={activiteData.sessions} title="Activité quotidienne" />
    </div>
  );
};

Activite.propTypes = {
  activiteData: PropTypes.object.isRequired,
};


export default Activite;