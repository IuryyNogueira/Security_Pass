import styles from './styles.module.css'

const PasswordInput = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Digite a senha..."
        className={styles.input}
        autoFocus
      />
    </div>
  )
}

export default PasswordInput