import React from "react";
import "./News.css";
const News = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>
              JOIN OUR KICKSPLUS
              <br />
              CLUB & GET 15% OFF
            </h2>
            <p>Sign up for free! Join the community.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Email address" />
              <button type="submit">SUBMIT</button>
            </form>
          </div>
          <div className="col-md-6 text-end news-logo">
            <div className="kicks-logo-white">KICKS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
