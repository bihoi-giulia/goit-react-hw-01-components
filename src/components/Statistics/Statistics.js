import css from './Statistics.module.css';
import { StatisticsItem } from './StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';

export const Statistics = prop => {
  const { title, stats } = prop;
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats &&
          stats.map(stat => <StatisticsItem key={stat.id} stat={stat} />)}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
