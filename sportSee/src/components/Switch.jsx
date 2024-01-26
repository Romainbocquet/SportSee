import '../assets/styles/Switch.css';

const Switch = ({ isOn, handleToggle, colorOne, colorTwo }) => {

  return (
    <div className='switch'>
      <span>Mock</span>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={`switch`}
        type="checkbox"
      />
      <label
        style={{ background: isOn ? colorOne : colorTwo }}
        className="switch-label"
        htmlFor={`switch`}
      >
        <span className={`switch-button`} />
      </label>
      <span>Api</span>
    </div>
  );
};

Switch.propTypes = {

};

export default Switch;