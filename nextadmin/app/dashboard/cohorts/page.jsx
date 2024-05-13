"use client";

import { useState, useEffect } from 'react';
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/students/students.module.css";

import Link from "next/link";

const CohortsPage = () => {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    const fetchCohorts = async () => {
      try {
        const response = await fetch("http://localhost:4000/cohorts");
        const data = await response.json();
        setCohorts(data);
      } catch (error) {
        console.error("Error fetching cohorts:", error);
      }
    };
    fetchCohorts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/cohorts/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Cohort Name</td>
            <td>Start Date</td>
            <td>End Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {cohorts.map((cohort) => (
            <tr key={cohort.id}>
              <td>{cohort.cohortName}</td>
              <td>{cohort.startDate}</td>
              <td>{cohort.endDate}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/cohorts/${cohort.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button
                    className={`${styles.button} ${styles.delete}`}
                    onClick={() => handleDeleteCohort(cohort.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CohortsPage;