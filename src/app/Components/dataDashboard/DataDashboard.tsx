"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./dasborad.module.scss";
export default function DataDashboard() {
  const [person, setPerson] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const respon = await axios.get("/api.json");
      setPerson(respon.data.results);
      console.log("Fetched:", respon.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.card}>
      {person.map((items, index) => (
        <h1 key={index}>
          Welcome 
          <span>
            {items.name.first} {items.name.last}
          </span>
        </h1>
      ))}
    </div>
  );
}
