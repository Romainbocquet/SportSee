import '../assets/styles/Nutrient.css';
import PropTypes from 'prop-types';

function Nutrient( {keyData} ) {
  return (
      <div id="nutrient">
        <div id='calories' className='nutrient-card'>
          <div className='nutrient-picto'><i className="fa-solid fa-fire"></i></div>
          <div className='nutrient-detail'>
          {keyData.calorieCount ? (
            <>
              <div className='nutrient-score'> {keyData.calorieCount}kCal</div>
              <div className='nutrient-name'>Calories</div>
            </>
          ) : (
            <div className='noData'>Aucune donnée disponible</div>
          )}
          </div>
        </div>
        <div id='proteines' className='nutrient-card'>
          <div className='nutrient-picto'><i className="fa-solid fa-drumstick-bite"></i></div>
          <div className='nutrient-detail'>
          {keyData.proteinCount ? (
            <>
            <div className='nutrient-score'>{keyData.proteinCount}g</div>
            <div className='nutrient-name'>Proteines</div>
            </>
          ) : (
            <div className='noData'>Aucune donnée disponible</div>
          )}
          </div>
        </div>
        <div id='glucides' className='nutrient-card'>
          <div className='nutrient-picto'><i className="fa-solid fa-apple-whole"></i></div>
          <div className='nutrient-detail'>
          {keyData.carbohydrateCount ? (
            <>
            <div className='nutrient-score'>{keyData.carbohydrateCount}g</div>
            <div className='nutrient-name'>Glucides</div>
            </>
          ) : (
            <div className='noData'>Aucune donnée disponible</div>
          )}
          </div>
        </div>
        <div id='lipides' className='nutrient-card'>
          <div className='nutrient-picto'><i className="fa-solid fa-burger"></i></div>
          <div className='nutrient-detail'>
          {keyData.lipidCount ? (
            <>
            <div className='nutrient-score'>{keyData.lipidCount}g</div>
            <div className='nutrient-name'>Lipides</div>
            </>
          ) : (
            <div className='noData'>Aucune donnée disponible</div>
          )}
          </div>
        </div>
      </div>
  )
}

Nutrient.propTypes = {
  keyData: PropTypes.object.isRequired,
};


export default Nutrient;