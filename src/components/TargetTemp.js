import styles from "./TargetTemp.module.css";

function TargetTemp(props) {
  return (
    <div className={styles.container}>
      <div className={styles.heater}>
        <div className={styles.indicator}><span className={styles.temp}></span></div>
      </div>
      <span className={styles.min}></span>
      <span className={styles.max}></span>
      <div className={styles.temperature}>{props.temperature}&deg;C.</div>
    </div>
  );
}
export default TargetTemp;
