import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./RegistationCSS.css";
import { useNavigate } from "react-router-dom";
import { saveClient } from "../services/RegistrationApiServices";

const Registation = () => {
  const navigate = useNavigate();

  const [userRegister, setuserRegistration] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [record, setRecord] = useState([]);
  const [formErrors, setFormErrors] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInpute = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuserRegistration({ ...userRegister, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecord = { ...userRegister };
    setRecord([...record, newRecord]);
    setFormErrors(validate(userRegister));
    setIsSubmit(true);
    console.log(userRegister);

    const response = await saveClient(newRecord);
    console.log(response.data);

    if (response.status == 200) {
      navigate("/login");
    }

    setuserRegistration({
      name: "",
      mobile: "",
      email: "",
      password: "",
    });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const name = /^[a-z\s]+$/i;
    const password =
      /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;

    if (!values.name) {
      errors.name = "Name is Required!";
    } else if (!name.test(values.name)) {
      errors.name = " Only character allowed";
    }

    if (!values.email) {
      errors.email = "Email is Required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile number is Required!";
    } else if (values.mobile.length !== 10) {
      errors.mobile = "Mobile number must be 10 digit";
    }

    if (!values.password) {
      errors.password = "Password is Required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 15) {
      errors.password = "Password cannot exceed more than 15 characters";
    } else if (!password.test(values.password)) {
      //   errors.password =
      // "Minimum eight characters, at least one letter, one number and one special character:";
    }

    if (
      password.test(values.password) &&
      values.name &&
      name.test(values.name) &&
      regex.test(values.email) &&
      values.mobile.length == 10 &&
      values.password.length > 4 &&
      values.password.length < 15
    ) {
      navigate("/Address/" + userRegister.mobile);
    }

    return errors;
  };

  return (
    <form action="" onSubmit={handleSubmit} className="container, box">
      <br />
      <h1>Registration</h1>
      <br />
      <div>
        <input
          type="text"
          placeholder="name"
          value={userRegister.name}
          onChange={handleInpute}
          name="name"
          id="name"
        />
      </div>
      <p>{formErrors.name}</p>
      <div>
        <input
          type="text"
          placeholder="Mobile Number"
          value={userRegister.mobile}
          onChange={handleInpute}
          name="mobile"
          id="mobile"
        />
      </div>
      <p>{formErrors.mobile}</p>
      <div>
        <input
          type="text"
          placeholder="Email-id"
          value={userRegister.email}
          onChange={handleInpute}
          name="email"
          id="email"
        />
      </div>
      <p>{formErrors.email}</p>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={userRegister.password}
          onChange={handleInpute}
          name="password"
          id="password"
        />
      </div>
      <p>{formErrors.password}</p>

      <button type="submit">Register</button>
    </form>
  );
};
export default Registation;
