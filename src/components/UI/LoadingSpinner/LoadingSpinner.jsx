import styles from './LoadingSpinner.module.css'

function LoadingSpinner({ height }) {
  return (
    <div className={`${height} flex items-center justify-center `}>
      <div className={`${styles.spinner} border-l-primary`}></div>
    </div>
  )
}

export default LoadingSpinner
