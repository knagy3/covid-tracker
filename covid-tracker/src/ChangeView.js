import React, { useState, useEffect } from "react";
import { useMap } from "react-leaflet";
import { showDataOnMap } from "./util";

function ChangeView({ center, zoom ,countries, casesType}) {

    const map = useMap();
    let checkedCenter = center[1]==undefined 
        ? [40.80746, 35.4796]
        : center
    map.setView(checkedCenter, zoom);
    return (
        showDataOnMap(countries, casesType)
    );
}

export default ChangeView;