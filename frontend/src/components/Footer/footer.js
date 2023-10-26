import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Feedback submitted!');
  };

  return (

    <footer className={styles.footer}>
      <div className="container-feed">
        <div className="row">
          <div className="col-md-6">
            <h3>Provide Feedback</h3>
            <p>We'd love to hear from you. Share your feedback with us.</p>
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="feedback">Feedback</label>
                <input id="feedback" name="feedback" required></input>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Feedback
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Feel free to reach out if you have any questions or concerns.</p>
            <p className="contact-info">
              Email: <a href="mailto:contact@example.com">contact@example.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="container-foot mx-auto">
        <p>
          © {new Date().getFullYear()} GenSync
          <br />
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Terms of Service
          </a>
          &nbsp; | &nbsp;
          <a
            href="https://www.example.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
// >>>>>>> upstream/main
  );
};

export default Footer;

// import React from "react";
// import styles from "./footer.module.css";

// const Footer = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     alert('Feedback submitted!');
//   };

//   return (
//     <footer className={styles.footer}>
//       <div className="container-feed">
//         <div className="row">
//           <div className="col-md-6">
//             <h3>Provide Feedback</h3>
//             <p>We'd love to hear from you. Share your feedback with us.</p>
//             <form onSubmit={handleSubmit} className="feedback-form">
//               <div className="form-group">
//                 <label htmlFor="name">Your Name</label>
//                 <input type="text" id="name" name="name" required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Your Email</label>
//                 <input type="email" id="email" name="email" required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="feedback">Feedback</label>
//                 <textarea id="feedback" name="feedback" required></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Submit Feedback
//               </button>
//             </form>
//           </div>
//           <div className="col-md-6">
//             <h3>Contact Us</h3>
//             <p>Feel free to reach out if you have any questions or concerns.</p>
//             <p className="contact-info">
//               Email: <a href="mailto:contact@example.com">contact@example.com</a>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="container-foot mx-auto">
//         <p>
//           © {new Date().getFullYear()} Your Company
//           <br />
//           <a
//             href="https://www.example.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.link}
//           >
//             Terms of Service
//           </a>
//           &nbsp; | &nbsp;
//           <a
//             href="https://www.example.com/privacy"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.link}
//           >
//             Privacy Policy
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// // import React from "react";
// // import style from "./footer.module.css";
// // import { Link} from "react-router-dom";

// // function Footer() {
  
// //   return (
// //     <>
// //     <h1>Footer</h1>    
// //     </>
// //   );
// // }


// // export default Footer;