import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

import DateTimePicker from 'react-datetime-picker'

import horse1 from '../assets/images/horse1.jpg';
import horse2 from '../assets/images/horse2.jpg';

function Purchase() {
  const { t } = useTranslation();
  const initialData = [
    { checked: false, name: 'Horse Name 1', img: horse1 },
    { checked: false, name: 'Horse Name 2', img: horse2 },
    { checked: false, name: 'Horse Name 3', img: horse1 },
    { checked: false, name: 'Horse Name 4', img: horse2 }
  ];
  const [horseData, setHorseData] = useState(initialData);
  const onCheckChange = (idx) => {
    const items = horseData.concat();
    items[idx].checked = !items[idx].checked;
    setHorseData(items);
  }
  const [date, setDate] = useState(new Date());
  return (
    <div className="app-container">
      <Helmet>
        <title>Purchase | Luokki</title>
      </Helmet>
      <div className="internal-header sticky-top bg-light shadow-sm">
        <div className="back-button">
          <Link to="/item/10">
            <span className="fa fa-chevron-left"></span>
          </Link>
        </div>
        <div className="header-content">
          <div className="header-title">
            <h2>Product Name</h2>
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
                      <button className="multisteps-form__progress-btn js-active" type="button" title={t('request_header_label')}>{t('request_header_label')}</button>
                      <button className="multisteps-form__progress-btn" type="button" title={t('quotation_header_label')}>{t('quotation_header_label')}</button>
                      <button className="multisteps-form__progress-btn" type="button" title={t('confirmation_header_label')}>{t('confirmation_header_label')}</button>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="mb-3">Product/Service Name</h5>

              <small className="text-success">Product/Service Information</small>
              <p className="mb-0">Horse Maintenance</p>
              <h6 className="text-primary">€ 123-156</h6>

              <p className="mb-0">Horses First</p>
              <h6 className="text-primary mb-3">ID: 123-xxxxx-xxxx</h6>

              <small className="text-success">User Information</small>
              <h6 className="mb-0 ">Ervandra Halim</h6>
              <h6 className="small">+6281731233</h6>
              <hr />

              <h6 className="mb-3 text-primary">Selected Horse: {horseData.filter(props => props.checked).length}</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-wrapper">
        <div className="my-horse-container">
          {horseData.map((horse, idx) => (
            <div className="my-horse-item" key={horse.name + idx}>
              <label className="card card-selection position-relative">
                <input type="checkbox" name="selected_horse" onChange={() => onCheckChange(idx)} checked={horse.checked} />
                <img src={horse.img} alt={horse.name} className="card-img-top" />
                <span className="card-body">
                  <p className="card-text">{horse.name}</p>
                </span>
              </label>
            </div>
          ))}

        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="content">
              <div className="form-quotation-container mb-3">
                <label htmlFor="datetime">Select your preferred date and time</label>
                <DateTimePicker name="datetime" onChange={setDate} value={date} format="y-MM-dd h:mm" calendarIcon={<span className="fa fa-calendar" />} clearIcon={null} className="d-flex w-100 mb-3 bg-white rounded" showLeadingZeros={true} />

                <textarea className="form-control mb-3" id="additional-info" rows="5" placeholder="Type additional information"></textarea>
                <Link to="/quotation"><button className="btn btn-primary w-100">Place Order</button></Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase;