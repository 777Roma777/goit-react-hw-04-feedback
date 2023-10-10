import css from './notification.module.css';
export const Notification = ({ messege }) => {
  return (
    <div>
      <p className={css.messege}>{messege}</p>
    </div>
  );
};
