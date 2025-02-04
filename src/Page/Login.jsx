import React, { useState } from "react";

const Login = () => {
  const [formValues, setFormvalues] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handlesubmit = (e) => {
    e.preventDefault();

    const errors = validate(formValues);

    console.log(formErrors)

    if (Object.keys(errors).length === 0) {
        setFormErrors({})
      console.log(formValues);
    } else {
      setFormErrors(errors);
      console.log(errors);
    }
  };
  const handlechange = (e) => {
    // console.log(e.target)
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};

    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm

    if (!values.email) {
      errors.email = "This field is required";
    }else if (!emailRegex.test(values.email)) {
      errors.email="Enter A VAlide Email";
    }

    if (!values.password) {
      errors.password = "This field is required";
    } else if (values.password.length < 6) {
      errors.password = "password atleast contain 6 characters";
    }

    return errors;
  };

  console.log(formErrors);

  return (
    <div className="">
      <div className="d-flex" style={{ justifyContent: "center" }}>
        <form
          onSubmit={handlesubmit}
          style={{ height: "1500px", width: "550px", marginTop: "150px" }}
        >
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="text"
              name="email"
              class="form-control"
              value={formValues.email}
              onChange={handlechange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {formErrors.email && (
              <p className=" text-danger">{formErrors.email}</p>
            )}
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              class="form-control"
              value={formValues.password}
              onChange={handlechange}
              id="exampleInputPassword1"
            />
            {formErrors.password && (
              <p className=" text-danger">{formErrors.password}</p>
            )}
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
