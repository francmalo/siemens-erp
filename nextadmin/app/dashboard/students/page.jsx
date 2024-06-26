"use client"; // Add this line at the top of the file

import { useState, useEffect } from 'react';
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/students/students.module.css";
// import Image from "next/image";
import Link from "next/link";

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {  
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3000/students');
        const data = await response.json();
        console.log(data)
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);


  useEffect(()=>{

     if (searchQuery.trim() !== '') {

  const searchStudents = async () => {
      try {
        const response = await fetch(`http://localhost:3000/students/search?name=${searchQuery}`);
        // console.log(response)
        const studentData = await response.json();
        setStudents(studentData);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
      // Only fetch students by search if searchQuery is not empty
     
        searchStudents();}
     
    }, [searchQuery]);

     const onChange = (event) => {
    setSearchQuery(event.target.value);
  };

 

  const handleDeleteStudent = async (id) => {
    try {
      const response = await fetch(`/api/students/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted student from the local state
        setStudents(students.filter((student) => student.id !== id));
      } else {
        console.error('Error deleting student');
      }
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a student..."  />
        <Link href="/dashboard/students/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Unique Id</td>
             <td>Email</td>
            <td>Reg No</td>
            <td>Kcse No</td>
            <td>Exam Results</td>
            <td>Fee Payment</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <div className={styles.student}>
                  {/* <Image
                    src={student.avatar || '/noavatar.png'}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  /> */}
                  {student.firstName} {student.lastName}
                </div>
              </td>
              <td>{student.uuid}</td>
              <td>{student.email}</td>
              <td>{student.regNo}</td>
              <td>{student.kcseNo}</td>
               <td>{student.examResults}</td>
              <td>{student.feePayment}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/students/${student.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button
                    className={`${styles.button} ${styles.delete}`}
                    onClick={() => handleDeleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count="" />
    </div>
  );
};

export default StudentsPage;