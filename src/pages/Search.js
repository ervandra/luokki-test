import React from 'react';
// import { Pane, Paragraph, Heading, IconButton, SearchIcon, StarIcon, ArrowLeftIcon, TextInput } from 'evergreen-ui';
// import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';

import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';

function Search() {

  return (
    <div className="app-container">
      <div className="map-container">
        <SimpleMap />
      </div>
      <div className="internal-header">
        <div className="back-button">
          <Link to="/">
            <span className="fa fa-chevron-left"></span>
          </Link>
        </div>
        <div className="header-content">
          <div className="search-header">
            <input className="form-control form-control-sm" type="text" placeholder="Search by name.." />
            <button className="btn btn-sm btn-primary btn-round"><span className="fa fa-search"></span></button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">


            <div className="list-order-container">
              <h3>Near You</h3>
              <div className="list-order-item">
                <div className="order-item">
                  <div className="order-item-image">
                    <Link to="/item/10"><img src={image1} alt="Item 1" /></Link>
                  </div>
                  <div className="order-item-description">
                    <h4><Link to="/item/10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vel.</Link></h4>
                  </div>
                </div>
                <div className="order-item">
                  <div className="order-item-image">
                    <Link to="/item/11"><img src={image2} alt="Item 2" /></Link>
                  </div>
                  <div className="order-item-description">
                    <h4><Link to="/item/12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam ea vitae.</Link></h4>
                  </div>
                </div>
                <div className="order-item">
                  <div className="order-item-image">
                    <Link to="/item/10"><img src={image1} alt="Item 1" /></Link>
                  </div>
                  <div className="order-item-description">
                    <h4><Link to="/item/10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vel.</Link></h4>
                  </div>
                </div>
                <div className="order-item">
                  <div className="order-item-image">
                    <Link to="/item/11"><img src={image2} alt="Item 2" /></Link>
                  </div>
                  <div className="order-item-description">
                    <h4><Link to="/item/12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam ea vitae.</Link></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const AnyReactComponent = () => <div className="btn" appearance="minimal" intent="danger"><span className="fa fa-star"></span></div>;

const SimpleMap = () => {
  const options = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };


  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `AIzaSyCuaV7aVdh3G0VmDW4wn3C9JJUGZXqGWaY` }}
        defaultCenter={options.center}
        defaultZoom={options.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default Search;