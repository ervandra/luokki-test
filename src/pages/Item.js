import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

import service1Img from '../assets/images/service1.jpg'

function Item() {
  let { itemId } = useParams();
  const { t } = useTranslation();
  if (!itemId) return <Redirect to="/404" />
  return (
    <div className="app-container">
      <Helmet>
        <title>Item {`${itemId}`} | Luokki</title>
      </Helmet>
      <div className="cover-image">
        <img src={service1Img} alt="horse service" />
      </div>
      <div className="internal-header sticky-top bg-light shadow-sm">
        <div className="back-button">
          <Link to="/">
            <span className="fa fa-chevron-left"></span>
          </Link>
        </div>
        <div className="header-content">
          <div className="header-title">
            <h2>Product Name {itemId}</h2>
            <h3>category name</h3>
          </div>
          <div className="header-additional">
            <h4>Prices</h4>
            <h5>$120-230</h5>
          </div>
        </div>
      </div>
      <div className="container pt-3">
        <div className="row">
          <div className="col">
            <div className="main-content">
              <p>Horses share many of the same physiologic characteristics of people and domestic pets, in that they have a circulatory system, a respiratory system, a nervous system, and so on. However, they also have many unique characteristics that differ from those of people and other companion animals. For example, horses have developed a large strong band of connective tissue, called the nuchal ligament, to provide support for their relatively long and heavily muscled neck.</p>
              <h3>Provider name</h3>
              <p>Horses are used primarily for pleasure riding, showing, racing, and pulling carts or carriages. Horses are still used for agricultural purpose</p>
              <div className="social-media" style={{ marginTop: '16px' }}>
                <div display="flex">

                  <div flex={1}>
                    <a href="https://instagram.com/ervandrahalim"><span className="fa fa-instagram"></span></a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-menu">
        <div className="menu-item">
          <Link to="/purchase" className="btn btn-primary">
            <span className="menu-icon"><span className="fa fa-send"></span></span>
            <span className="menu-text">{t('request_quotation_label')}</span>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Item;