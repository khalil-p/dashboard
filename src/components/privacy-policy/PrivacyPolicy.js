import React from 'react';
import './privacy.css'

const PrivacyPolicy = () => {
  const privacyPolicy = {
    introduction: "Your privacy matters; we protect your data.",
    informationCollection: "We collect information for seamless order processing.",
    useOfInformation: "Personal data is securely stored and handled. Usage analytics are used to improve app performance.",
    disclosureOfInformation: "No data is shared without user consent.",
    dataSecurity: "Payment details are encrypted for security.",
    dataRetention: "We store your information only as long as necessary for the purposes for which it was collected.",
    choices: "You have the choice to opt-out of certain data uses.",
    changesToPrivacyPolicy: "Review our policy; it may be updated over time. Any changes will be effective upon posting.",
    complianceWithGooglePlay: {
        linkedOnStoreListing: "This privacy policy is linked on our app’s store listing page in Play Console and within the app itself.",
referenceToEntity: "This privacy policy refers to the entity named in the app’s Google Play listing:  Prabhavati Digital Services Pvt. Ltd Parbhani.",

        clearLabeling: "Clear labeling as a privacy policy is included.",
        privacyPointOfContact: "A privacy point of contact (9011198855) is provided.",
        accessibility: "The policy is readable in a standard browser without any plug-ins or special handlers.",
        availability: "It is available on an active, publicly accessible, and non-geofenced URL.",
        nonEditable: "The document is non-editable.",
        comprehensiveDisclosure: "The privacy policy comprehensively discloses how the app accesses, collects, uses, and shares user data, including types of personal and sensitive data, parties with which data is shared, secure data handling procedures, and the developer’s data retention and deletion policy."
    },
    finalStatement: "Trust us for a safe and delightful dining experience."
};


  return (
    <div className="container">
    <h1>Privacy Policy</h1>
  <p style={{textAlign:'center'}}>Last updated: November 25, 2023</p>  
    <p style={{textAlign:'center'}}>{privacyPolicy.introduction}</p>


    <h2 className='privacy-heading'>Information Collection</h2>
    <p>{privacyPolicy.informationCollection}</p>

    <h2 className='privacy-heading'>Use of Information</h2>
    <p>{privacyPolicy.useOfInformation}</p>

    <h2 className='privacy-heading'>Disclosure of Information</h2>

    <p>{privacyPolicy.disclosureOfInformation}</p>

    <h2 className='privacy-heading'>Data Security</h2>
    <p>{privacyPolicy.dataSecurity}</p>

    <h2 className='privacy-heading'>Data Retention</h2>
    <p>{privacyPolicy.dataRetention}</p>

    <h2 className='privacy-heading'>Choices</h2>
    <p>{privacyPolicy.choices}</p>

    <h2 className='privacy-heading'>Changes to Privacy Policy</h2>
    <p>{privacyPolicy.changesToPrivacyPolicy}</p>

    <h2 className='privacy-heading'>Contact Us</h2>
    <p>	Application refers to MADANI-RESTAURENT, the software program provided by the Company.</p>
    <p>	App Developed By : PRABHAVATI DIGITAL SERVICES PVT. LTD. PARBHANI-431401(MH)</p>
    <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:salman12345670@gmail.com" target="_blank">salman12345670@gmail.com</a>.</p>
    
    <h2 className='privacy-heading'>Compliance with Google Play</h2>
    <p>{privacyPolicy.complianceWithGooglePlay.linkedOnStoreListing}</p>
    <p>{privacyPolicy.complianceWithGooglePlay.referenceToEntity}</p>
    <p>{privacyPolicy.complianceWithGooglePlay.clearLabeling}</p>
    <p>{privacyPolicy.complianceWithGooglePlay.privacyPointOfContact}</p>
    <p>{privacyPolicy.complianceWithGooglePlay.accessibility}</p>
    <p>{privacyPolicy.complianceWithGooglePlay.availability}</p>
    <p>{privacyPolicy.complianceWithGooglePlay.nonEditable}</p>
    <p>{privacyPolicy.complianceWithGooglePlay.comprehensiveDisclosure}</p>
    
    <h2 className='privacy-heading'>Final Statement</h2>
    <p>{privacyPolicy.finalStatement}</p>
</div>

  );
}

export default PrivacyPolicy;
