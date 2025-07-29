import Button from "./Components/button/Button";
import Input from "./Components/input/Input";
import styles from "./app.module.scss";

export default function HomePage() {
  return (
    <div className={styles.cardBox}>
      <div className={styles.form}>
        <Input label="First Name" name="firstName" />
        <Input label="Last Name" name="lastName" />
        <Input label="Phone number" name="phonenumber" />
        <Button />
      </div>
    </div>
  );
}
