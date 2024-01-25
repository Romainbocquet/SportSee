import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SimpleLineChart = ({ data, title }) => {
  const rectangleRef = useRef(null);
  const activeDotRef = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.classList.contains('recharts-active-dot')) {
            activeDotRef.current = node;
            updateRectangleWidth();
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []); // Exécute une seule fois après le rendu initial

  useEffect(() => {
    window.addEventListener('resize', updateRectangleWidth);
    return () => {
      window.removeEventListener('resize', updateRectangleWidth);
    };
  }, []);

  const updateRectangleWidth = () => {
    if (activeDotRef.current && rectangleRef.current) {
      const rect = activeDotRef.current.getBoundingClientRect();
      const chartRect = document.querySelector('.averageSessions').getBoundingClientRect();
      const chartWidth = chartRect.width;
      const rectangleWidth = chartWidth - ((rect.left - chartRect.left)) - 3;
      rectangleRef.current.style.width = `${rectangleWidth}px`;
    }
  };

  const formatDayOfWeek = (day) => {
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return daysOfWeek[day - 1];
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <h2>{title}</h2>
      <div
      className='rectangle'
        ref={rectangleRef}
      />
      <LineChart width={260} height={260} data={data} margin={{
        top: 60,
        right: 0,
        left: 0,
        bottom: 0,
      }}>
        <XAxis dataKey="day" tickFormatter={formatDayOfWeek} axisLine={false} tickLine={false} tick={{ fill: '#FF8181' }} padding={{ left: 20, right: 20 }} />
        <Tooltip
          cursor={false}
          content={<CustomTooltip />}
        />
        <Line type="monotone" strokeWidth={2} dataKey="sessionLength" stroke="white" activeDot={{ stroke: 'white', strokeWidth: 10, r: 4, fill: 'white', strokeOpacity: 0.3 }} dot={{r: 0}} />
      </LineChart>
    </div>
  );
};

SimpleLineChart.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default SimpleLineChart;