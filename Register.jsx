import React, { useState } from "react";
import "./Register.css"; 

const Register = () => {
  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    message: "",
    phoneNo: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!FormData.firstName.trim()) {
      tempErrors.firstName = "FirstName is Required";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(FormData.firstName)) {
      tempErrors.firstName = "Only alphabets are allowed";
      isValid = false;
    }

    if (!FormData.lastName.trim()) {
      tempErrors.lastName = "LastName is Required";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(FormData.lastName)) {
      tempErrors.lastName = "Only alphabets are allowed";
      isValid = false;
    }

    if (!FormData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(FormData.email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!FormData.password.trim()) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        FormData.password
      )
    ) {
      tempErrors.password =
        "Password must have 1 uppercase, 1 lowercase, 1 number, 1 special character and be at least 6 characters long";
      isValid = false;
    }

    if (!FormData.message.trim()) {
      tempErrors.message = "Message is Required";
      isValid = false;
    }

    if (!FormData.phoneNo.trim()) {
      tempErrors.phoneNo = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(FormData.phoneNo)) {
      tempErrors.phoneNo = "Phone number must be exactly 10 digits";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form Submitted Successfully");
      setFormData({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        message: "",
        phoneNo: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registration Form</h2>

      <form onSubmit={formSubmit} className="form">
        <label>First name:</label>
        <input
          type="text"
          value={FormData.firstName}
          onChange={(e) =>
            setFormData({ ...FormData, firstName: e.target.value })
          }
        />
        <div className="error">{errors.firstName}</div>

        <label>Last name:</label>
        <input
          type="text"
          value={FormData.lastName}
          onChange={(e) =>
            setFormData({ ...FormData, lastName: e.target.value })
          }
        />
        <div className="error">{errors.lastName}</div>

        <label>Email:</label>
        <input
          type="email"
          value={FormData.email}
          onChange={(e) =>
            setFormData({ ...FormData, email: e.target.value })
          }
        />
        <div className="error">{errors.email}</div>

        <label>Password:</label>
        <input
          type="password"
          value={FormData.password}
          onChange={(e) =>
            setFormData({ ...FormData, password: e.target.value })
          }
        />
        <div className="error">{errors.password}</div>

        <label>Message:</label>
        <textarea
          value={FormData.message}
          onChange={(e) =>
            setFormData({ ...FormData, message: e.target.value })
          }
        />
        <div className="error">{errors.message}</div>

        <label>Phone No:</label>
        <input
          type="number"
          value={FormData.phoneNo}
          onChange={(e) =>
            setFormData({ ...FormData, phoneNo: e.target.value })
          }
        />
        <div className="error">{errors.phoneNo}</div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
