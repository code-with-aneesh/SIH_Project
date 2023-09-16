import React, { Component } from 'react';
import './homepage.css';
import Map from '../map/map';
import Navbar from '../homepage/Navbar/Navbar';


class DisasterReliefApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disasterType: 'earthquake', // Initial selected disaster type
      additionalFilters: {
        firstResponders: false,
        paramedics: false,
        rescueTeams: false,
        firefightingEquipment: false,
        searchAndRescueTools: false,
        medicalSupplies: false,
        communicationDevices: false,
        fireTrucks: false,
        ambulances: false,
        specializedRescueVehicles: false,
        helicopters: false,
        aircraft: false,
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
        {
          name: 'Agency Name 3',
          location: 'City, Country',
          resources: 'Search and Rescue',
        },
        {
          name: 'Agency Name 4',
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
      <>
      <Navbar/>
  <div className='adjust'>
       <div className="home-container">
          <div className="sidebar">
            <div className="filter-section">
              <h3 className='h21'>Filter</h3>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="disaster-type">Select Disaster Type:</label>
                <select
                  className='select'
                  id="disaster-type"
                  name="disasterType"
                  value={this.state.disasterType}
                  onChange={this.handleFilterChange}
                >
                  <option value="earthquake">Earthquake</option>
                  <option value="flood">Flood</option>
                  <option value="wildfire">Wildfire</option>
                  <option value="hurricane">Hurricane</option>
                  <option value="tornado">Tornado</option>
                  <option value="tsunami">Tsunami</option>
                  {/* Add more disaster options here */}
                </select>

                <div className="additional-filters">
                  <h3 className="filter-label">Resources Filter:</h3>
                  {/* Add checkboxes for additional filters here */}
                  <div className="checkbox-container">
                  <label className='checkbox-label'>
                    <input
                      className='checkbox-input'
                      type="checkbox"
                      name="firstResponders"
                      checked={this.state.additionalFilters.firstResponders}
                      onChange={this.handleFilterChange}
                    />
                    First Responders
                  </label>
                  <label className='checkbox-label'>
                    <input
                     className='checkbox'
                      type="checkbox"
                      name="paramedics"
                      checked={this.state.additionalFilters.paramedics}
                      onChange={this.handleFilterChange}
                    />
                    Paramedics
                  </label>
                  <label className='checkbox-label'>
                    <input
                      className='checkbox'
                      type="checkbox"
                      name="rescueTeams"
                      checked={this.state.additionalFilters.rescueTeams}
                      onChange={this.handleFilterChange}
                    />
                    Rescue Teams
                  </label>
                  <label className='checkbox-label'>
                    <input
                      className='checkbox'
                      type="checkbox"
                      name="firefightingEquipment"
                      checked={this.state.additionalFilters.firefightingEquipment}
                      onChange={this.handleFilterChange}
                    />
                    Fire Fighting Equipment
                  </label>
                  <label className='checkbox-label'>
                    <input
                      className='checkbox'
                      type="checkbox"
                      name="searchAndRescueTools"
                      checked={this.state.additionalFilters.searchAndRescueTools}
                      onChange={this.handleFilterChange}
                    />
                    Search and Rescue Tools
                  </label>
                  <label className='checkbox-label'>
                    <input
                      className='checkbox'
                      type="checkbox"
                      name="medicalSupplies"
                      checked={this.state.additionalFilters.medicalSupplies}
                      onChange={this.handleFilterChange}
                    />
                    Medical Supplies 
                  </label>
                  <label className='checkbox-label'>
                    <input
                      className='checkbox'
                      type="checkbox"
                      name="communicationDevices"
                      checked={this.state.additionalFilters.communicationDevices}
                      onChange={this.handleFilterChange}
                    />
                    Communication Devices  
                  </label>
                  <label className='checkbox-label'>
                    <input
                      className='checkbox'
                      type="checkbox"
                      name="fireTrucks"
                      checked={this.state.additionalFilters.fireTrucks}
                      onChange={this.handleFilterChange}
                    />
                    Fire Trucks 
                  </label>
                  <label className='checkbox-label'>
                    <input
                      className='checkbox'
                      type="checkbox"
                      name="ambulances"
                      checked={this.state.additionalFilters.ambulances}
                      onChange={this.handleFilterChange}
                    />
                    Ambulance 
                  </label>
                  <label className='checkbox-label'>
                    <input
                      className='checkbox'
                      type="checkbox"
                      name="specializedRescueVehicles"
                      checked={this.state.additionalFilters.specializedRescueVehicles}
                      onChange={this.handleFilterChange}
                    />
                    Specialiized Rescue Vehicles  
                  </label>
                  <label className='checkbox-label'>
                    <input
                      className='checkbox'
                      type="checkbox"
                      name="helicopters"
                      checked={this.state.additionalFilters.helicopters}
                      onChange={this.handleFilterChange}
                    />
                    Helicopter  
                  </label>
                  <label className='checkbox-label'>
                    <input
                      className='checkbox'
                      type="checkbox"
                      name="aircraft"
                      checked={this.state.additionalFilters.aircraft}
                      onChange={this.handleFilterChange}
                    />
                    Aircrafts  
                  </label>
                  {/* Add more checkboxes for other resources here */}
                </div>
                </div>

                <button type="submit">Apply Filters</button>
              </form>
            </div>

            <div className="register-agency">
              <a href="#" className="register-link">
                Register Your Agency
              </a>
            </div>
          </div>
          </div>
        
           <Map/>
          
            <div className="agency-list" >
              <h2> Registered Agencies</h2>
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
     </>
    );
  }
}

export default DisasterReliefApp;