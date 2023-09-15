import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

function Map() { 
  const mapContainer = useRef(null);
  const mumbai = { lng: 72.877655, lat:19.075983  };
  const map = useRef(null);
  const [zoom] = useState(11);
  const [userLocation, setUserLocation] = useState(null); 
 
  maptilersdk.config.apiKey = 'e4ASLwYwpL2wv88s8HB9';

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [mumbai.lng, mumbai.lat],
      zoom: zoom,
      geolocateControl: true
    });

    // Add markers as before
    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([72.865790, 19.020240])
      .addTo(map.current);

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([72.857590, 19.161810])
      .addTo(map.current);

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([72.852400, 19.055470])
      .addTo(map.current);

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([72.843940, 18.999560])
      .addTo(map.current);

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([72.881030, 19.074900])
      .addTo(map.current);

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([72.821060, 19.048350])
      .addTo(map.current);

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([72.836080, 19.091090])
      .addTo(map.current);

  }, [mumbai.lng, mumbai.lat, zoom]);

  

 
  // Function to get user location
  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLngLat = [position.coords.longitude, position.coords.latitude];
        setUserLocation(userLngLat);

        // Center the map on the user's location
        map.current.flyTo({ center: userLngLat, zoom: zoom });
      }, (error) => {
        console.error("Error getting user location:", error);
      });
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  };

  return (
    <div className="map-wrap">
      <button onClick={getUserLocation}>Get My Location</button>
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;