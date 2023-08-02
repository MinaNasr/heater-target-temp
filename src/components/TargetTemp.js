import styles from "./TargetTemp.module.css";

function TargetTemp({ temperature, min, max }) {
  if (temperature < min || temperature > max) {
    return;
  }

  const rotateDegree = (temperature / max) * 360;
  const css = {
    transform: `rotate(${rotateDegree}deg)`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.heater}>
        <div className={styles.indicator}>
          <span className={styles.temp} style={css}></span>
        </div>
      </div>
      <span className={styles.min}></span>
      <span className={styles.max}></span>
      <div className={styles.temperature}>{temperature}&deg;C.</div>
    </div>
  );
}
export default TargetTemp;
