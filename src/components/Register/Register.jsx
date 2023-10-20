import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import auth from "../../Firebase/Firebase.config";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [passwordValidate, setPasswordValidate] = useState();

  const [registrationDone, setRegistrationDone] = useState("");
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setRegistrationDone("User Created Successfully");
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
    setRegisterError("");
    setRegistrationDone("");
  };

  const handlePasswordValidate = (password) => {
    if (!/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
      setPasswordValidate("PassWord must be at least 6 characters");
      return;
    }
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/b3HZqGH/wallpaperflare-com-wallpaper-16.jpg)",
        }}
      >
        <div className="card flex-shrink-0 w-full max-w-sm bg-slate-400 backdrop-filter  bg-opacity-20  shadow-xl ">
          <form onSubmit={handleRegister} className="card-body">
            <h3 className="text-3xl font-bold text-white mb-6 mt-6">
              Register
            </h3>
            <div className="form-control">
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <p className="">{handlePasswordValidate}</p>
            <div className="form-control">
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <div className="form-control ">
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <p>{passwordValidate}</p>
            <div className="form-control mt-6">
              <button
                onClick={handlePasswordValidate}
                className="btn but btn-primary"
              >
                Register
              </button>
            </div>

            <p className="mt-14 mb-14">
              <span className="text-zinc-400">
                {" "}
                Already a part of the family?
              </span>{" "}
              <Link to="/login">
                <button className="text-white">Login</button>
              </Link>
            </p>
          </form>
          {registerError && <p className="text-red-700"> {registerError} </p>}
          {registrationDone && (
            <p className="text-green-700">{registerError}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
