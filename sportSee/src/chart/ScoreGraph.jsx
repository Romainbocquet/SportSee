import PropTypes from 'prop-types';
import '../assets/styles/Score.css';
import { PieChart, Pie, Cell } from 'recharts';

const ScoreGraph = ({data, dataScore, title}) => {

  const COLORS = ['#E60000', '#fbfbfb'];

  return (
    <div className='pieChart'>
      <h2>{title}</h2>
      <div className='label'>{dataScore} % <span>de votre objectif</span></div>
      <PieChart width={160} height={160}>
        <Pie
          data={data}
          innerRadius={65}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          cornerRadius={40}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>

  );
};

ScoreGraph.propTypes = {
  data: PropTypes.array,
  dataScore: PropTypes.number,
  title: PropTypes.string,
};

export default ScoreGraph;