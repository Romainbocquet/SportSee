import PropTypes from 'prop-types';
import '../assets/styles/Score.css';
import { PieChart, Pie, Cell } from 'recharts';

const ScoreGraph = (data) => {
  let dataScore = data.data * 100;
  let dataRest = 100 - dataScore;

  const dataBinding = [
    { name: 'Group A', value: dataScore },
    { name: 'Group B', value: dataRest },
  ];
  
  const COLORS = ['#E60000', '#fbfbfb'];

  return (
    <div className='pieChart'>
      <div className='label'>{dataScore} % <span>de votre objectif</span></div>
      <PieChart width={160} height={160}>
        <Pie
          data={dataBinding}
          innerRadius={65}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          startAngle={90}
          cornerRadius={40}
        >
          {dataBinding.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {dataBinding.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>

  );
};

ScoreGraph.propTypes = {
  data: PropTypes.number,
};

export default ScoreGraph;