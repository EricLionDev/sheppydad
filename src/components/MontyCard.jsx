import styles from '../styles/MontyCard.module.css';

function MontyCard() {
  const calculateAge = () => {
    const birthDate = new Date(1996, 3);
    const today = new Date();
    const years = today.getFullYear() - birthDate.getFullYear();
    return today.getMonth() < 3 ? years - 1 : years;
  };

  return (
    <div className={styles['card-container']}>
      <div className={styles['card-img-container']}>
        <img className={styles['card-img']} src="src\assets\shep.png" alt="" />
      </div>
      <div className={styles['card-bio-container']}>
        <div className={styles['bio-title']}>
          <h1 className={styles['bio-title-h1']}>Monty</h1>
          <p className={styles['bio-title-p']}>
            {calculateAge()} he/him/dog θΔ
          </p>
        </div>
      </div>
    </div>
  );
}

export default MontyCard;
