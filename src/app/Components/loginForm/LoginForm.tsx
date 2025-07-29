"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.scss";
import Input from "../input/Input";
import Button from "../button/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { handleLogin } from "../dataform/dataform";

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

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const success = await handleLogin(data);
    if (success) {
      setTimeout(() => {
        router.push("/dashboard");
      }, 2500);
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
                message: "Phone number must start with 09 and be exactly 11 digits",
              },
            })}
          />
          {errors.phoneNumber && (
            <p className={styles.error}>{errors.phoneNumber.message}</p>
          )}

          <Button />
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
