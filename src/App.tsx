import React from 'react';
import './App.css';
import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'

function App() {
    const position:[number,number] = [51.505, -0.09]
    return (
        <MapContainer style={{ width: "100%", height: "100vh" }}
         center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default App;
