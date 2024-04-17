
import { NavLink } from "react-router-dom";
const buttonBase = "text-xs px-2 py-1 rounded-md md:text-md md:font-bold border border-black";
const signInButton = `${buttonBase} md:px-5 md:py-2 md:w-24 md:rounded-lg bg-green-400 hover:bg-black hover:text-white duration-300 hover:scale-105`;



const SignIn = () => {
  return (
    <button className={signInButton} >
      <NavLink to="/login">Sign In</NavLink>
    </button>
  );
};

export default SignIn;
