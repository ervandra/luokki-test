import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import MainMenu from '../components/global/MainMenu';

import horse1 from '../assets/images/horse1.jpg'

function Horse() {
  let { horseId } = useParams();
  if (!horseId) return <Redirect to="/404" />
  return (
    <div className="app-container">
      <Helmet>
        <title>Horse: {`${horseId}`} | Luokki</title>
      </Helmet>
      <div className="cover-image">
        <img src={horse1} alt="horse service" />
      </div>
      <div className="internal-header">
        <div className="back-button">
          <Link to="/">
            <span className="fa fa-chevron-left"></span>
          </Link>
        </div>
        <div className="header-content align-middle">
          <div className="header-title">
            <h2>Horse Name {horseId}</h2>
            <h3><Link to="/search">Breed</Link></h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="main-content">
              <h1><Link to="/search">Full horse name</Link></h1>
              <p>Horse description lorem ipsum dolor sit amet</p>
              <p>Profile data fields lorem ipsum dolor sit amet. Freeform text field lorem ipsum dolor sit amet. Freeform text field lorem ipsum dolor sit amet.</p>
              <div className="horse-service-container">
                <h6><span className="fa fa-check-square-o mr-2 text-success"></span>Service History</h6>
                <div className="list-group mb-3">
                  <div className="list-group-item">
                    <h6 className="mb-0">Service Name</h6>
                    <p className="text-muted small mb-0">01.01.2020</p>
                  </div>
                  <div className="list-group-item">
                    <h6 className="mb-0">Service Name 2</h6>
                    <p className="text-muted small mb-0">01.04.2020</p>
                  </div>
                  <div className="list-group-item">
                    <h6 className="mb-0">Service Name 3</h6>
                    <p className="text-muted small mb-0">01.05.2020</p>
                  </div>
                </div>
              </div>
              <div className="horse-gallery-container">

              </div>
            </div>
          </div>
        </div>
      </div>

      <MainMenu />
    </div>
  )
}

export default Horse;