import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleBtnClick = () => {
    //Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    if (message != null) {
      setErrorMessage(message);
    } else {
      setErrorMessage(null);
    }
    //Signin/ Signup user
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black opacity-90 w-[500px] mx-auto right-0 left-0 my-36 px-10 py-10 rounded-lg flex justify-center items-center flex-col"
      >
        <h1 className="text-3xl font-bold text-white mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 mb-4 w-3/4 bg-gray-800 text-white rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 mb-4 w-3/4 bg-gray-800 text-white rounded-lg"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 mb-4 w-3/4 bg-gray-800 text-white rounded-lg"
          ref={password}
        />
        {errorMessage !== null && (
          <p className="text-red-500 font-semibold mb-2">*{errorMessage}</p>
        )}
        <button
          className="bg-red-600 p-3 mb-6 w-3/4 font-bold  text-white rounded-lg"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="text-white">
            New to Netflix?
            <span
              className="font-bold underline cursor-pointer"
              onClick={toggleSignIn}
            >
              {" "}
              Sign up Now!
            </span>
          </p>
        ) : (
          <p className="text-white">
            Already a member?
            <span
              className="font-bold underline cursor-pointer"
              onClick={toggleSignIn}
            >
              {" "}
              Sign In Now!
            </span>
          </p>
        )}
      </form>
    </div>
  );
};
export default Login;
