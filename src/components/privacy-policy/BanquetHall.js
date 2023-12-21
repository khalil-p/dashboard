import React from "react";
import "./BanquetHallPage.css"; // Ensure this path is correct

function BanquetHallPage() {
  return (
    <div>
      <div className="banquet-hall-container">
        <h1>Book Banquet Hall for Party</h1>
        <div className="banner">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipNi-tDh15cFGiRmG0xmv5Zv9ph17esUlRPHt3qk=s680-w680-h510"
            alt="Banner"
          />
        </div>
        <div className="image-gallery">
          <div className="card">
            <img
              src="https://images.jdmagicbox.com/comp/parbhani/t9/9999p2452.2452.170924211954.b4t9/catalogue/hotel-madni-palace-gandhi-park-parbhani-restaurants-h5p93dt3m2.jpg"
              alt="Banquet Hall View 1"
            />
          </div>
          <div className="card">
            <img
              src="https://images.jdmagicbox.com/comp/parbhani/t9/9999p2452.2452.170924211954.b4t9/catalogue/hotel-madni-palace-gandhi-park-parbhani-restaurants-ilu8k9wp2h.jpg"
              alt="Banquet Hall View 2"
            />
          </div>
          <div className="card">
            <img
              src="https://images.jdmagicbox.com/comp/parbhani/t9/9999p2452.2452.170924211954.b4t9/catalogue/hotel-madni-palace-gandhi-park-parbhani-restaurants-4kjh3nm1v7.jpg"
              alt="Banquet Hall View 3"
            />
          </div>
          <div className="card">
            <img
              src="https://images.jdmagicbox.com/comp/parbhani/t9/9999p2452.2452.170924211954.b4t9/catalogue/hotel-madni-palace-gandhi-park-parbhani-restaurants-qxehl2lfcj.jpg"
              alt="Banquet Hall View 4"
            />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-details">
          <p>Madni Palace Restaurant, Grand Corner, Parbhani-431401(MH)</p>
          <p>For Booking <br/> Call Us (Salman Khamisa): +91-9011198855</p>
        </div>
        {/* <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
        </div> */}
      </footer>
    </div>
  );
}

export default BanquetHallPage;
