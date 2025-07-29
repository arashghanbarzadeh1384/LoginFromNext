import React from 'react';
import styles from './Input.module.scss';

const Input: React.FC = () => {
  return (
    <div className={styles.inputGroup}>
      <input
        required
        type="text"
        name="text"
        autoComplete="off"
        className={styles.input}
      />
      <label className={styles.userLabel}>First Name</label>
    </div>
  );
};

export default Input;
