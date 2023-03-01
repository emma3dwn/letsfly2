import React from "react";

function Banner(props) {
  return (
    <section className="bg-black py-8 text-xl flex items-center justify-center   md:py-16 md:text-3xl lg:py-20 lg:text-4xl">
      <h3 className="w-5/6 text-white text-center md:w-1/2"> {props.text}</h3>
    </section>
  );
}

export default Banner;
