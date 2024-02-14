import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';

const RadarGraph = (data) => {

  return (
   <RadarChart outerRadius={90} width={350} height={260} data={data.data} fill="#282D30">
    <PolarGrid stroke="#fff"/>
    <PolarAngleAxis dataKey="subject" stroke="#FFF" tickLine={false}/>
    <Radar name="Mike" dataKey="A" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
  </RadarChart>
  );
};

RadarGraph.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RadarGraph;