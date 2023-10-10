import css from './statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statisticsList}>
      <li className={css.itemList}>Good: {good}</li>
      <li className={css.itemList}>Neutral: {neutral}</li>
      <li className={css.itemList}>Bad: {bad}</li>
      <li className={css.itemList}>Total: {total}</li>
      <li className={css.itemList}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};
