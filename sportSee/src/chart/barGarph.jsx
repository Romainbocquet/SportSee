import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import '../assets/styles/CustomLegende.css';

const barGarph = ({data, title}) => {


  const CustomLegend = ({ payload }) => {
    return (
      <div className='custom-legende'>
          <div className='custom-legende-elt'>
            <div style={{backgroundColor: payload[0].color}}></div>
            <span>Poids (kg)</span>
          </div>
          <div className='custom-legende-elt'>
            <div style={{backgroundColor: payload[1].color}}></div>
            <span>Calories brûlées (kCal)</span>
        </div>
      </div>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}`}Kg</p>
          <p className="label">{`${payload[1].value}`}Kcal</p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
    <h2>{title}</h2>
    <ResponsiveContainer width="100%" height="80%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 40,
          left: 40,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" tickFormatter={(value) => new Date(value).getDate()} tickLine={false} />
        <YAxis yAxisId="kilogram" dataKey="kilogram" orientation="right" tickLine={false} axisLine={false} domain={['dataMin - 2', 'dataMax + 2']}/>
        <YAxis yAxisId="calories" dataKey="calories" display="none"/>
        <Tooltip
          content={<CustomTooltip />}
        />
        <Legend verticalAlign="top" height={24} content={<CustomLegend />} />
        <Bar dataKey="kilogram" fill="#282D30" barSize={8} radius={[5, 5, 0, 0]} yAxisId="kilogram" />
        <Bar dataKey="calories" fill="#E60000" barSize={8} radius={[5, 5, 0, 0]} yAxisId="calories" />
      </BarChart>
    </ResponsiveContainer>
    </>
  );
};

barGarph.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default barGarph;