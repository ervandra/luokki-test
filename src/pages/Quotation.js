import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

import toolImg from '../assets/images/tools.png';

function Quotation() {
  const { t } = useTranslation();
  return (
    <div className="app-container">
      <Helmet>
        <title>Quotation | Luokki</title>
      </Helmet>
      <div className="internal-header sticky-top bg-light shadow-sm">
        <div className="back-button">
          <Link to="/purchase">
            <span className="fa fa-chevron-left"></span>
          </Link>
        </div>
        <div className="header-content">
          <div className="header-title">
            <h2>Quotation</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="content">
              <div className="multisteps-form pt-5">
                <div className="row">
                  <div className="col-12  ml-auto mr-auto mb-5">
                    <div className="multisteps-form__progress">
                      <button className="multisteps-form__progress-btn active js-active" type="button" title={t('request_header_label')}>{t('request_header_label')}</button>
                      <button className="multisteps-form__progress-btn active js-active" type="button" title={t('quotation_header_label')}>{t('quotation_header_label')}</button>
                      <button className="multisteps-form__progress-btn" type="button" title={t('confirmation_header_label')}>{t('confirmation_header_label')}</button>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="mb-3">Quotation for: <span className="text-primary">Product/Service Name</span></h6>

              {/* <small className="text-success">Product/Service Information</small>
              <p className="mb-0">Horse Maintenance</p>
              <h6 className="text-primary">€ 123-156</h6>

              <p className="mb-0">Horses First</p>
              <h6 className="text-primary mb-3">ID: 123-xxxxx-xxxx</h6>

              <small className="text-success">User Information</small>
              <h6 className="mb-0 ">Ervandra Halim</h6>
              <h6 className="small">+6281731233</h6> */}
              <div className="quotation-status py-5">
                <p className="text-center"><img src={toolImg} width="80" alt="waiting vendor" /></p>
                <h6 className="text-secondary text-center">Waiting from vendor..</h6>
              </div>

              <Link to="/confirm"><button className="btn mb-5 btn-primary w-100">Check Confirmation</button></Link>

            </div>
          </div>
        </div>
      </div>
      {/* <div className="main-menu shadow-md fixed-bottom">
        <div className="menu-item">
          <Link to="/">
            <span className="menu-icon"><span className="fa fa-home"></span></span>
            <span className="menu-text">{t('home_button_label')}</span>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/profile">
            <span className="menu-icon"><span className="fa fa-user"></span></span>
            <span className="menu-text">{t('profile_button_label')}</span>
          </Link>
        </div>
      </div> */}
    </div>
  )
}

export default Quotation;