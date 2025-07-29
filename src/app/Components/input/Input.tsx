import React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, ...rest }, ref) => {
    return (
      <div className={styles.inputGroup}>
        <input
          required
          name={name}
          autoComplete="off"
          className={styles.input}
          id={name}
          ref={ref}
          {...rest}
        />
        <label htmlFor={name} className={styles.userLabel}>
          {label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
