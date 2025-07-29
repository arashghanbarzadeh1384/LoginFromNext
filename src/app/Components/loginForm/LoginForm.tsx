"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "./LoginForm.module.scss";
import Input from "../input/Input";
import Button from "../button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type FormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [loginResult, setLoginResult] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    const { firstName, lastName } = data;

    try {
      const res = await axios.get("/api.json");
      const user = res.data.results[0];

      const apiFirstName = user.name.first.toLowerCase();
      const apiLastName = user.name.last.toLowerCase();

      if (
        apiFirstName === firstName.toLowerCase().trim() &&
        apiLastName === lastName.toLowerCase().trim()
      ) {
        toast.success("✅ Login successful");
      } else {
        toast.error("❌ Login failed: Name does not match API");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("❌ Login failed: API error");
    }
  };

  return (
    <>
      <div className={styles.cardBox}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="First Name"
            name="firstName"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p className={styles.error}>{errors.firstName.message}</p>
          )}

          <Input
            label="Last Name"
            name="lastName"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className={styles.error}>{errors.lastName.message}</p>
          )}

          <Input
            label="Phone number"
            name="phoneNumber"
            type="tel"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^09\d{9}$/,
                message:
                  "Phone number must start with 09 and be exactly 11 digits",
              },
            })}
          />
          {errors.phoneNumber && (
            <p className={styles.error}>{errors.phoneNumber.message}</p>
          )}

          <Button />
          {loginResult && <p className={styles.result}>{loginResult}</p>}
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
