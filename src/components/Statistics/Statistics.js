import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.item}
            style={{
              backgroundColor: `rgb(${getRandom(0, 255)}, 
              ${getRandom(0, 255)}, 
              ${getRandom(0, 255)})`,
            }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

const getRandom = (min, max) => Math.ceil(Math.random() * (max - min) + min);

export default Statistics;
