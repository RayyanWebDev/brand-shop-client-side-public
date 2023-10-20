import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import auth from "../../Firebase/Firebase.config";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
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
          <form onSubmit={handleLogin} className="card-body">
            <h3 className="text-3xl font-bold text-white mb-6 mt-6">Sign In</h3>
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
            <div className="form-control mt-6">
              <button className="btn but btn-primary">Login</button>
            </div>
            <button onClick={handleGoogle} className="btn but btn-primary">
              Sign In with Google
            </button>
            <p className="mt-14 mb-14">
              <span className="text-zinc-400"> New to CineHub?</span>{" "}
              {/* <Link to="/SignUp">
                {" "}
                <button className="text-white">Sign Up Now</button>
              </Link> */}
              <Link to="/register">
                <button className="text-white">Register Now</button>
              </Link>
            </p>
          </form>
          {/* {loginError && <p className="text-red-700"> {loginError} </p>} */}
        </div>
      </div>
    </div>
  );
};

export default Login;
