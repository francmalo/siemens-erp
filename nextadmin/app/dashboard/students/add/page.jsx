"use client";

import { useState } from "react";
import styles from "@/app/ui/dashboard/students/addStudent/addStudent.module.css";

const AddStudentPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    regNo: "",
    idNo: "",
    feePayment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:4000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle successful submission
      console.log("Student added successfully");
      // You can redirect or reset the form here
    } else {
      // Handle submission error
      console.error("Failed to add student");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Registration Number"
          name="regNo"
          value={formData.regNo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="ID Number"
          name="idNo"
          value={formData.idNo}
          onChange={handleChange}
          required
        />
        <select
          name="feePayment"
          value={formData.feePayment}
          onChange={handleChange}
        >
          <option value="">Fee Payment Status</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStudentPage;