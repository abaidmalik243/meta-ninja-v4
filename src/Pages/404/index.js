// import AuthLayoutFooter from "Components/Layouts/AuthLayout/Footer";
import React from "react";
import { useNavigate } from 'react-router-dom';
function FourZeroFour() {
  const navigate = useNavigate();

  console.log("hi");
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-center items-center h-[80vh]">
        <main className="grid min-h-full place-items-center bg-white px-6 py-12 md:py-24 lg:px-8 ">
          <div className="text-center">
            <p className="font-bold lg:text-6xl text-4xl  text-[#ffc400] ">
              404
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl text-[#000000B2]">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-[#000000B2]">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-[#ffc400] px-6 py-2.5 text-sm font-semibold text-white shadow-sm border-none" onClick={() => navigate("/")}>
                Go back
              </button>
            </div>
          </div>
        </main>
      </div>
      {/* <AuthLayoutFooter /> */}
    </>
  );
}

export default FourZeroFour;
