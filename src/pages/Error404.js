import React from 'react';
import Page from '../components/global/Page';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom'

import toolsImg from '../assets/images/tools.png';

function Error404() {
  const { t } = useTranslation();

  return (
    <div className="app-container error-container">
      <Helmet>
        <title>Home | Luokki</title>
      </Helmet>
      <div className="error-page">
        <Page>
          <div className="error-image">
            <img src={toolsImg} alt={t('404_not_found')} width="80" />
          </div>
          <h2>{t('404_not_found')}</h2>
          <p>What you're looking for are not found yet, you can try to search our product/service on the homepage</p>
          <Link to="/" className="btn btn-outline-primary btn-sm" href="/">Explore more services
          </Link>
        </Page>
      </div>
    </div >
  )
}

export default Error404;