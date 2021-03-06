import React from 'react';
import Page from '../components/global/Page';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import { Link, useHistory } from 'react-router-dom'

import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';

import MainMenu from '../components/global/MainMenu';

function Home() {
  const { t } = useTranslation();
  const history = useHistory();
  const formSubmit = e => {
    e.preventDefault();
    history.push('/search')
  }
  return (
    <div className="app-container">
      <Helmet>
        <title>Home | Luokki</title>
      </Helmet>
      <div className="home-header">
        <div className="container">
          <div className="row align-items-center  ">
            <div className="col">
              <h2>{t('guidance_browse_view')}</h2>
            </div>
            <div className="col col-auto">
              <div className="user-avatar">
                <Link to="/profile">
                  <img src="https://www.lifelearnplatform.com/wp-content/uploads/sites/8/2020/02/jussi.jpg" alt="avatar" width="32" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-widget sticky-top bg-light shadow-sm py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <form action="search" id="search-form" onSubmit={formSubmit}>
                <div className="input-group mb-0 ">
                  <select className="form-select form-select-sm" aria-label={t('select_tip_browse_view')} name="category">
                    <option defaultValue="none">{t('select_tip_browse_view')}</option>
                    <option value="1">Category 1</option>
                    <option value="1">Category 2</option>
                    <option value="1">Category 3</option>
                  </select>
                  <button className="btn btn-sm btn-outline-primary" type="submit"><span className="fa fa-search"></span></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Page>
        <div className="list-order-container pt-3">
          <h3><span className="fa fa-history"></span>{t('my_recent_orders_title')}</h3>
          <div className="list-order-item">
            <div className="order-item">
              <div className="order-item-image">
                <Link to="/item/10"><img src={image1} alt="Item 1" /></Link>
              </div>
              <div className="order-item-description">
                <h4><Link to="/item/10">Lorem ipsum dolor sit amet.</Link></h4>
              </div>
            </div>
            <div className="order-item">
              <div className="order-item-image">
                <Link to="/item/11"><img src={image2} alt="Item 2" /></Link>
              </div>
              <div className="order-item-description">
                <h4><Link to="/item/12">Consectetur adipisicing elit. Quasi veniam ea.</Link></h4>
              </div>
            </div>
          </div>
        </div>

        <div className="list-order-container">
          <h3><span className="fa fa-hourglass"></span>{t('most_ordered_products_title')}</h3>
          <div className="list-order-item">
            <div className="order-item">
              <div className="order-item-image">
                <Link to="/item/13"><img src={image1} alt="Item 3" /></Link>
              </div>
              <div className="order-item-description">
                <h4><Link to="/item/13">Consectetur adipisicing elit.</Link></h4>
              </div>
            </div>
            <div className="order-item">
              <div className="order-item-image">
                <Link to="/item/14"><img src={image2} alt="Item 4" /></Link>
              </div>
              <div className="order-item-description">
                <h4><Link to="/item/14">Dolor sit amet consectetur adipisicing at.</Link></h4>
              </div>
            </div>
          </div>
        </div>

        <div className="list-order-container">
          <h3><span className="fa fa-star"></span>{t('promoted_products_title')}</h3>
          <div className="list-order-item">
            <div className="order-item">
              <div className="order-item-image">
                <Link to="/item/15"><img src={image1} alt="Item 5" /></Link>
              </div>
              <div className="order-item-description">
                <h4><Link to="/item/15">Coluptatibus ullam est hic consequuntur illo!</Link></h4>
              </div>
            </div>
            <div className="order-item">
              <div className="order-item-image">
                <Link to="/item/16"><img src={image2} alt="Item 6" /></Link>
              </div>
              <div className="order-item-description">
                <h4><Link to="/item/16">Lorem ipsum dolor sit amet cons.</Link></h4>
              </div>
            </div>
          </div>
        </div>
      </Page>
      <MainMenu />
    </div >
  )
}

export default Home;