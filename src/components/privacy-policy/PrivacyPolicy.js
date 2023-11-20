import React from 'react';
import './privacy.css'

const PrivacyPolicy = () => {
  const data = {
    introduction: "Your privacy matters; we protect your data.",
    informationCollection: "We collect info for seamless order processing.",
    useOfInformation: "Personal data is securely stored and handled. Usage analytics improve app performance.",
    disclosureOfInformation: "No data is shared without user consent.",
    dataSecurity: "Payment details are encrypted for security.",
    dataRetention: "We store your information only as long as necessary for the purposes for which it was collected.",
    choices: "You have the choice to opt-out of certain data uses.",
    changesToPrivacyPolicy: "Review our policy; it may update over time.",
    finalStatement: "Trust us for a safe and delightful dining experience."
  };

  return (
    <div className="container">
      <h1>Privacy Policy</h1>
      <p>{data.introduction}</p>

      <h2>Information Collection</h2>
      <p>{data.informationCollection}</p>

      <h2>Use of Information</h2>
      <p>{data.useOfInformation}</p>

      <h2>Disclosure of Information</h2>
      <p>{data.disclosureOfInformation}</p>

      <h2>Data Security</h2>
      <p>{data.dataSecurity}</p>

      <h2>Data Retention</h2>
      <p>{data.dataRetention}</p>

      <h2>Choices</h2>
      <p>{data.choices}</p>

      <h2>Changes to Privacy Policy</h2>
      <p>{data.changesToPrivacyPolicy}</p>

      <h2>Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="#">[contact information]</a>.</p>
    </div>
  );
}

export default PrivacyPolicy;
