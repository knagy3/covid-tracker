import React,{useEffect} from 'react';
import "./Map.css";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./util";
import ChangeView from "./ChangeView"


function Map({countries, casesType, center, zoom}) {
    
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom} scrollWheelZoom={false}>
                <ChangeView center={center} zoom={zoom} countries={countries} casesType={casesType}/>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                
            </LeafletMap>
        </div>
    )
}

export default Map;
