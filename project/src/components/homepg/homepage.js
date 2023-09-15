import React, { Component } from 'react';
import './homepage.css';

class DisasterReliefApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disasterType: 'earthquake',
      additionalFilters: {
        firstResponders: false,
        paramedics: false,
        // ... (other filter options)
      },
      agencies: [
        {
          name: 'Agency Name 1',
          location: 'City, Country',
          resources: 'Medical, Supplies',
        },
        {
          name: 'Agency Name 2',
          location: 'City, Country',
          resources: 'Search and Rescue',
        },
        // Add more agency objects here
      ],
    };
  }

  handleFilterChange = (e) => {
    const { name, type, checked } = e.target;
    if (type === 'checkbox') {
      this.setState((prevState) => ({
        additionalFilters: {
          ...prevState.additionalFilters,
          [name]: checked,
        },
      }));
    } else {
      this.setState({ [name]: e.target.value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Implement filter logic here based on the selected filters
    // Update the agencies list accordingly
  };

  render() {
    return (
      
      <div className="disaster-relief-app">
        <div className="container">
          <div className="sidebar">
            <div className="filter-section">
              <h2>Filter</h2>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="disaster-type">Select Disaster Type:</label>
                <select
                  id="disaster-type"
                  name="disasterType"
                  value={this.state.disasterType}
                  onChange={this.handleFilterChange}
                  className="filter-select"
                >
                  {/* ... */}
                </select>

                <div className="additional-filters">
                  <h3 className="filter-label">Resources Filter:</h3>
                  <label className="filter-checkbox">
                    <input
                      type="checkbox"
                      name="firstResponders"
                      checked={this.state.additionalFilters.firstResponders}
                      onChange={this.handleFilterChange}
                    />
                    First Responders
                  </label>
                  {/* ... (other checkboxes) */}
                </div>

                <button type="submit" className="filter-button">
                  Apply Filters
                </button>
              </form>
            </div>

            <div className="register-agency">
              <a href="#" className="register-link">
                Register Your Agency
              </a>
            </div>
          </div>

          <div className="content">
            <div className="agency-list" id="agency-list">
              <h2>Registered Rescue Agencies</h2>
              {this.state.agencies.map((agency, index) => (
                <div className="agency-card" key={index}>
                  <p className="agency-name">{agency.name}</p>
                  <p className="agency-info">Location: {agency.location}</p>
                  <p className="agency-info">Resources: {agency.resources}</p>
                  <button className="contact-button">Contact</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisasterReliefApp;
