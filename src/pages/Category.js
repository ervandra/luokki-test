import React from 'react';
import Page from '../components/global/Page';
import { Pane, Paragraph, Heading, IconButton, SearchIcon, StarIcon, ArrowLeftIcon, SearchInput, TextInput } from 'evergreen-ui';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"
import { Link, useHistory } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';


function Category() {
  const history = useHistory();
  return (
    <Pane background="tealTint" minHeight="100vh">
      <Pane>
        {/* <CategoryMap googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCuaV7aVdh3G0VmDW4wn3C9JJUGZXqGWaY&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px`, maxHeight: `50vh` }} />}
          mapElement={<div style={{ height: `100%` }} />} /> */}
        <SimpleMap />
      </Pane>
      <Pane display="flex" alignItems="center" padding={16} style={{ background: `linear-gradient(to bottom, transparent, #f1fbfc 50%)`, position: 'sticky', top: 0, marginTop: '-30px' }}>
        <IconButton is={Link} to="/" icon={ArrowLeftIcon} size={32} appearance="minimal" marginRight={8} />
        <Pane display="flex" flex={1}>
          <TextInput placeholder="Search by name.." width="100%" />
          <IconButton appearance="minimal" intent="none" icon={SearchIcon} size={32} marginLeft={8} />
        </Pane>
      </Pane>
      <Pane padding="16">
        <Heading is="h4" size={200} marginBottom={16}>Near you</Heading>
        <div className="list">
          <div className="list-order-item">
            <Link to="/product">
              <Pane display="flex">
                <Pane marginRight={16}>
                  <img src="https://via.placeholder.com/64" />
                </Pane>
                <Pane flex={1}>
                  <Paragraph>Product description Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                </Pane>
                <Pane marginLeft={8} textAlign="center">
                  <Heading size={300}>$123</Heading>
                  <Heading size={200} color="orange" display="flex" alignItems="center"><StarIcon size={10} marginRight={4} /> 4.5</Heading>
                </Pane>
              </Pane>
            </Link>
          </div>
          <div className="list-order-item">
            <Link to="/product">
              <Pane display="flex">
                <Pane marginRight={16}>
                  <img src="https://via.placeholder.com/64" />
                </Pane>
                <Pane flex={1}>
                  <Paragraph>Product description Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                </Pane>
                <Pane marginLeft={8} textAlign="center">
                  <Heading size={300}>$123</Heading>
                  <Heading size={200} color="orange" display="flex" alignItems="center"><StarIcon size={10} marginRight={4} /> 4.5</Heading>
                </Pane>

              </Pane>
            </Link>
          </div>
          <div className="list-order-item">
            <Link to="/product">
              <Pane display="flex">
                <Pane marginRight={16}>
                  <img src="https://via.placeholder.com/64" />
                </Pane>
                <Pane flex={1}>
                  <Paragraph>Product description Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                </Pane>
                <Pane marginLeft={8} textAlign="center">
                  <Heading size={300}>$123</Heading>
                  <Heading size={200} color="orange" display="flex" alignItems="center"><StarIcon size={10} marginRight={4} /> 4.5</Heading>
                </Pane>

              </Pane>
            </Link>
          </div>
        </div>
      </Pane>
    </Pane>
  )
}

const AnyReactComponent = ({ text }) => <IconButton appearance="minimal" intent="danger" icon={StarIcon} />;

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

const CategoryMap = withScriptjs(withGoogleMap((props) => {
  const history = useHistory();
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker onClick={() => history.push('/product/1')} position={{ lat: -34.397, lng: 150.644 }} />
      <Marker onClick={() => history.push('/product/2')} position={{ lat: -34.297, lng: 150.544 }} />
    </GoogleMap>
  )
}));

export default Category;