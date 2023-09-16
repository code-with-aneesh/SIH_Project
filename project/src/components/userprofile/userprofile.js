import React from "react";
import './userprofile.css';
function Profile() {
    return (
        <div className="container">
        <title>Agency Registration - Disaster Relief App</title>
        {/* Include Font Awesome CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link rel="stylesheet" href="agency-register.css" />
        <header className="top">
          <h1>Agency Registration - Disaster Relief App</h1>
        </header>
        <div className="container">
          <form id="agency-registration-form">
            <label className="read" htmlFor="agency-name"><i className="fas fa-building form-icon" /> Agency Name:</label>
            <input  className="written" type="text" id="agency-name" name="agency-name" required />
            <label className="read" htmlFor="location"><i className="fas fa-map-marker-alt form-icon" /> Location:</label>
            <input type="text" id="location" name="location" required />
            <label className="read" htmlFor="resources"><i className="fas fa-tools form-icon" /> Resources:</label>
            <input type="text" id="resources" name="resources" required />
            <label className="read" htmlFor="email"><i className="fas fa-envelope form-icon" /> Email:</label>
            <input  className="written" type="email" id="email" name="email" required />
            <label className="read" htmlFor="phone"><i className="fas fa-phone form-icon" /> Phone:</label>
            <input type="text" id="phone" name="phone" required />
            <label className="read" htmlFor="verification-document"><i className="fas fa-file-alt form-icon" /> Verification Documents:</label>
            <input  className="written" type="file" id="verification-document" name="verification-document" accept=".pdf,.doc,.docx" required />
            <div className="document-list">
              <label className="read"><i className="fas fa-file-alt form-icon" /> Proof of Registration</label>
              <input  className="written" type="file" name="proof-of-registration" accept=".pdf,.doc,.docx" required />
              <label className="read"><i className="fas fa-file-alt form-icon" /> License/Certification</label>
              <input   className="written" type="file" name="license-certification" accept=".pdf,.doc,.docx" required />
              <label className="read"><i className="fas fa-file-alt form-icon" /> Insurance Documents</label>
              <input  className="written" type="file" name="insurance-documents" accept=".pdf,.doc,.docx" required />
            </div>
            <button className="submittion" type="submit">Register</button>
          </form>
        </div>
      </div>
    )
}
export default Profile;