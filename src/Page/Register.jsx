import React, { useState } from "react";
import "./Body.css";

const Register = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(formValues);

    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      console.log("Form submitted successfully:", formValues);
    } else {
      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
      errors.name = "This field is required";
    }

    if (!values.email.trim()) {
      errors.email = "This field is required";
    }

    if (!values.password.trim()) {
      errors.password = "This field is required";
    } else if (values.password.length < 7) {
      errors.password = "Password must contain at least 7 characters";
    }

    if (!values.cpassword.trim()) {
      errors.cpassword = "This field is required";
    } else if (values.password !== values.cpassword) {
      errors.cpassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="bx card text-white" style={{ backgroundColor: "#660033" }}>
            <div className="card-body">
              <h3 className="text-center mb-4">Register</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={formValues.name}
                    onChange={handleChange}
                    id="name"
                    name="name"
                  />
                  {formErrors.name && <p className="text-danger">{formErrors.name}</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={formValues.email}
                    onChange={handleChange}
                    id="email"
                    name="email"
                  />
                  {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={formValues.password}
                    onChange={handleChange}
                    id="password"
                    name="password"
                  />
                  {formErrors.password && <p className="text-danger">{formErrors.password}</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={formValues.cpassword}
                    onChange={handleChange}
                    id="confirmPassword"
                    name="cpassword"
                  />
                  {formErrors.cpassword && <p className="text-danger">{formErrors.cpassword}</p>}
                </div>
                <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <p>
                  Already have an account?{" "}
                  <a href="/login" className="text-white">
                    Login here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
