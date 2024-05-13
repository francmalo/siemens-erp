
import styles from "@/app/ui/dashboard/staff/singleStaff/singleStaff.module.css";
import Image from "next/image";

const SingleStaffPage = () => {
  
  // const { id } = params;
  // const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
      John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          {/* <input type="hidden" name="id" value={user.id}/> */}
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe"/>
          <label>Email</label>
          <input type="email" name="email" placeholder="JohnDoe@gmail.com"/>
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="0712345678" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="Nyeri" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} >Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} >Yes</option>
            <option value={false} >No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleStaffPage;
