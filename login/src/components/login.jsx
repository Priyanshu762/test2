import { useState } from "react";
// import { useHistory } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  // const history=useHistory()

  const handleSubmit = (e) => {
    event.preventDefault()  ;

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          console.log("Login Success");
          alert("Login successful!");
          
          // Navigate('/home')
          navigate("/dashboard");
          // History.push('/home')
        } else {
          alert("Incorrect password! Please try again.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container flex h-screen w-full justify-center items-center">
        <div className="login w-1/2 h-screen  flex flex-col justify-center items-center ">
          <form onSubmit={handleSubmit}>
            <div className="welcome h-16 w-96 mb-6">
              <h1 className="text-3xl">Welcome</h1>
              <p className="">Welcome back! Please enter your details.</p>
            </div>
            <div className="Mobile h-22 w-96 mb-6">
              <p className="text-xl">Email</p>
              <input
                className="border-2 border-black p-2 rounded-lg w-full"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="Password h-22 w-96 mb-6">
              <p className="text-xl">Password</p>
              <input
                className="border-2 border-black p-2 rounded-lg w-full"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="Login-Btn h-22 w-96 mb-2">
              <button className=" bg-red-500 rounded-lg w-full h-9">
                Sign In
              </button>
            </div>
            <div className="Forget h-22 w-96 mb-6">
              <p className="float-right">
                <a href="#">Forget Password</a>
              </p>
            </div>
            <div className="sign-up">
              <p className="w-full">
                Don’t have an account? <a href="/register"> Sign up fo free ! </a>
                {/* <a href="" className="text-red">
                  Sign up fo free!
                </a> */}
              </p>
            </div>
          </form>
        </div>
        <div className="picture w-1/2 h-screen overflow-hidden">
          <img
            src="coin.jpg"
            alt=""
            className="h-screen w-full"
          />
        </div>
      </div>
    </>
  );
}
export default Login;
