import Joi from "joi";
import React, { useState } from "react";

export default function LoginScreen() {
  let [errorArr, setError] = useState([]);
  let [loginInfo, setLoginInfoData] = useState({
    EmailAddress: "",
    password: "",
  });

  let Login = (e) => {
    let myCopyLoginInfo = { ...loginInfo };
    myCopyLoginInfo[e.target.name] = e.target.value;
    localStorage.setItem("User", JSON.stringify(myCopyLoginInfo));
    setLoginInfoData(myCopyLoginInfo);
  };

  let submit = (e) => {
    e.preventDefault();
    let validate = validationLogin();
    console.log(validate);
    if (validate.error) {
      setError(validate.error.details);
    } else {
      console.log("hi");
    }
  };

  let validationLogin = () => {
    let val = Joi.object({
      EmailAddress: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(/^[A-Z][a-z]{4,7}/)
        .required(),
    });
    return val.validate(loginInfo, { abortEarly: false });
  };

  return (
    <>
      <div className="container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="shadow ">
            <h1 className="App text-white">Login</h1>
            <form onSubmit={submit}>
              {errorArr.map((err, index) => (
                <div key={index} className="alert alert-danger my-2 ">
                  {err.message}
                </div>
              ))}
              <label htmlFor="EmailAddress">Email Address</label>
              <input
                onChange={Login}
                type="email"
                className="form-control"
                name="EmailAddress"
                id="EmailAddress"
              />

              <label htmlFor="password">Password</label>
              <input
                onChange={Login}
                type="password"
                className="form-control"
                name="password"
                id="password"
              />

              {/* err.context.label == "password" && "Invalid Password" */}
              <div className="col-md-12 text-center">
                <button className="btn btn-info mt-5 w-25">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
