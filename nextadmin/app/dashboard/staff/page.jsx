// import { deleteUser } from "@/app/lib/actions";
// import { fetchStaff } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/staff/staff.module.css";
import Image from "next/image";
import Link from "next/link";

// const StaffPage = async ({ searchParams }) => {
//   const q = searchParams?.q || "";
//   const page = searchParams?.page || 1;
//   const { count, staff } = await fetchStaff(q, page);

const StaffPage = () => {


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a staff..." />
        <Link href="/dashboard/staff/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src= "/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  John Doe
                </div>
              </td>
              <td>john@gmail.com</td>
              <td>13.01.2022</td>
              <td>Admin</td>
              <td>active</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/dashboard/staff/test">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                     <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </Link>
                 
                   
                 
                </div>
              </td>
            </tr>
         
        </tbody>
      </table>
      <Pagination count="" />
    </div>
  );
};

export default StaffPage;
