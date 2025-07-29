import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  name: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, name, type = "text" }) => {
  return (
    <div className={styles.inputGroup}>
      <input
        required
        type={type}
        name={name}
        autoComplete="off"
        className={styles.input}
        id={name}
      />
      <label htmlFor={name} className={styles.userLabel}>
        {label}
      </label>
    </div>
  );
};

export default Input;
