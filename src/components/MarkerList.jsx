// This component is responsible for rendering the map as well as
// the markers for the currently displayed results.

import React, {Component} from 'react'
import {GoogleMapLoader, GoogleMap, Marker, InfoWindow} from "react-google-maps"

export default class MarkerList extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      //center of the map
      defaultCenter: {
        lat: 39.113014,
        lng: -105.358887
      },
      windowPosition: null, //position of the info window
      showInfoWindow: false, //controls the info window is visible or not
      current_name: '' //the content of the info window (name of mountain or peak that's currently selected.)
    }
  }
}
