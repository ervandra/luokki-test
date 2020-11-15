import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function MainMenu() {
  const { t } = useTranslation();
  return (
    <div className="main-menu shadow-md">
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
    </div>
  )
}