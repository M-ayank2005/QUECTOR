import react from 'react';
import SignIn from "../components/But3";

const containerPadding = "px-4";
const largeScreenPadding = "lg:px-32";
const mediumScreenPadding = "md:px-28";

// Button styling
const buttonBase =
  "text-xs px-2 py-1 rounded-md md:text-md md:font-bold border border-black ";
const signInButton = `${buttonBase} md:px-5 md:py-2 md:w-24 md:rounded-lg bg-green-400 hover:bg-black hover:text-white duration-300 hover:scale-105 `;
const signUpButton = `${buttonBase} md:px-5 md:py-2 md:w-24 md:rounded-lg  hover:bg-black hover:text-white  duration-300 hover:scale-105`;
const searchButton = `${buttonBase} md:px-8 md:py-2 md:w-36 md:rounded-lg  md:text-lg md:font-light bg-blue-300 hover:bg-blue-400 duration-300 hover:scale-105`;


function Header() {
    return (
        <div
          className={`w-full flex flex-col ${containerPadding} ${mediumScreenPadding} ${largeScreenPadding} overflow-hidden`}
        >
          <div className="w-full flex flex-row justify-between py-8">
            <div className="text-4xl md:text-4xl font-bold md:tracking-wide">
              QUECTO
            </div>
            <div className="flex flex-row gap-2 lg:gap-5">
              <SignIn />
              <button className={signUpButton}>Sign up</button>
            </div>
          </div>
        </div>
      );
}

export default Header
