import React from 'react';
import './privacy.css'

const TermsAndConditions = () => {
  const termsData = {
    term1: "Use of our app implies agreement with our terms.",
    term2: "Ensure accurate delivery details for smooth service.",
    term3: "Respect delivery timeframes provided by the app.",
    term4: "Payment is to be made as per the specified methods.",
    term5: "Any modifications post-order may incur additional charges.",
    term6: "We prioritize food safety; report any issues promptly.",
    term7: "The app may update terms; users will be notified.",
    term8: "Enjoy hassle-free food delivery responsibly."
  };

  return (
    <div className="container">
      <h1>Terms and Conditions</h1>
      <p>{termsData.term1}</p>

      <h2>Ordering and Delivery</h2>
      <p>{termsData.term2}</p>
      <p>{termsData.term3}</p>

      <h2>Payment</h2>
      <p>{termsData.term4}</p>

      <h2>Order Modifications and Charges</h2>
      <p>{termsData.term5}</p>

      <h2>Food Safety and Quality</h2>
      <p>{termsData.term6}</p>

      <h2>Updates to Terms</h2>
      <p>{termsData.term7}</p>

      <h2>General Use</h2>
      <p>{termsData.term8}</p>

      <h2>Contact Us</h2>
      <p>If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="#">[contact information]</a>.</p>
    </div>
  );
}

export default TermsAndConditions;
