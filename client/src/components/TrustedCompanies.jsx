import React from "react";
import "../styles/TrustedCompanies.css";

const logos = [
  "/assets/images/vistara.png",
  "/assets/images/spicejet.png",
  "/assets/images/taj.png",
  "/assets/images/truejet.png",
  "/assets/images/thelalit.png",
  "/assets/images/sarovar.png",
];

const TrustedCompanies = () => {
  return (
    <section className="trusted-companies">
      <h2>Those Company You Can Easily Trust!</h2>

      <div className="logo-slider">
        <div className="logo-track">
          {logos.concat(logos).map((src, i) => (
            <img key={i} src={src} alt="Brand logo" onError={(e)=>{e.currentTarget.style.visibility='hidden'}} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
