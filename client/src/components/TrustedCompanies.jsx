import React from "react";
import "../styles/trustedCompanies.css";

const TrustedCompanies = () => {
  return (
    <section className="trusted-companies">
      <h2>Those Company You Can Easily Trust!</h2>

      <div className="logo-slider">
        <div className="logo-track">
          {/* Replace these image src with your own logo paths */}
          <img src="../assets/images/vistara.png" alt="GoFly" />
          <img src="../assets/images/spicejet.png" alt="Traverse" />
          <img src="../assets/images/taj.png" alt="TripZone" />
          <img src="../assets/images/truejet.png" alt="Borcelle" />
          <img src="../assets/images/thelalit.png" alt="GoTrip" />
          <img src="../assets/images/sarovar.png" alt="Travel" />

          {/* Duplicate for infinite scroll effect */}
            <img src="../assets/images/vistara.png" alt="GoFly" />
          <img src="../assets/images/spicejet.png" alt="Traverse" />
          <img src="../assets/images/taj.png" alt="TripZone" />
          <img src="../assets/images/truejet.png" alt="Borcelle" />
          <img src="../assets/images/thelalit.png" alt="GoTrip" />
          <img src="../assets/images/sarovar.png" alt="Travel" />
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
