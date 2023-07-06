import PropTypes from 'prop-types';
import style from './StatisticsItem.module.css';

export const StatisticsItem = ({ stat }) => {
  const color = getRandomHexColor();
  return (
    <li className={style.item} style={{ backgroundColor: color }}>
      <span className={style.label}>{stat.label}</span>
      <span className={style.percentage}>{stat.percentage}%</span>
    </li>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

StatisticsItem.propTypes = {
  stat: PropTypes.object.isRequired,
};
