import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

import horse1 from '../assets/images/horse1.jpg';
import horse2 from '../assets/images/horse2.jpg';

function Profile() {
  return (
    <div className="app-container">
      <Helmet>
        <title>Profile | Luokki</title>
      </Helmet>
      <div className="profile-container">
        <div className="cover-image">
          <img src="https://www.lifelearnplatform.com/wp-content/uploads/sites/8/2020/02/jussi.jpg" alt="avatar" />
        </div>
      </div>
      <div className="internal-header sticky-top">
        <div className="back-button">
          <Link to="/">
            <span className="fa fa-chevron-left"></span>
          </Link>
        </div>
        <div className="header-content">
          <div className="header-title">
            <h2>Full Name</h2>
            <div className="user-social-link">
              <div className="social-link-item">
                <a href="#fb">
                  <span className="item-text">username</span>
                  <span className="item-icon"><span className="fa fa-facebook"></span></span>
                </a>
              </div>
              <div className="social-link-item">
                <a href="#ig">
                  <span className="item-text">username</span>
                  <span className="item-icon"><span className="fa fa-instagram"></span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consectetur tenetur esse quia iusto aspernatur tempore id impedit, dolor dolores iure eum delectus nobis ipsam magnam expedita dolore ad! Repellendus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium numquam blanditiis tenetur error nostrum culpa tempore assumenda velit perferendis?</p>
              <p>Cumque odit cupiditate deleniti, perspiciatis fuga iste atque labore alias qui harum molestiae nihil ad? Magni illum odit vitae vel!</p>
              <p>Quo rem earum illo nostrum, quam suscipit rerum, aspernatur facere laudantium ex alias quia tempora. Officiis labore pariatur rerum ullam?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-wrapper">
        <div className="my-horse-container">
          <div className="my-horse-item">
            <div class="card position-relative">
              <Link className="stretched-link" to="/horse/1"><img src={horse1} alt="horse 1" classaName="card-img-top" /></Link>
              <div class="card-body">
                <p class="card-text small">Horse Name 1</p>
              </div>
            </div>
          </div>
          <div className="my-horse-item">
            <div class="card position-relative">
              <Link className="stretched-link" to="/horse/2"><img src={horse2} alt="horse 2" classaName="card-img-top" /></Link>
              <div class="card-body">
                <p class="card-text small">Horse Name 2</p>
              </div>
            </div>
          </div>
          <div className="my-horse-item">
            <div class="card position-relative">
              <Link className="stretched-link" to="/horse/3"><img src={horse1} alt="horse 3" classaName="card-img-top" /></Link>
              <div class="card-body">
                <p class="card-text small">Horse Name 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="content">
              <div className="horse-service-container">
                <h6><span className="fa fa-check-square-o mr-2 text-success"></span>Service History</h6>
                <div className="list-group mb-3">
                  <div className="list-group-item">
                    <h6>Horse 1</h6>
                    <div class="d-flex justify-content-between">
                      <h6 className="mb-0 small text-muted">Service Name</h6>
                      <p className="text-muted small mb-0">01.01.2020</p>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <h6>Horse 1</h6>
                    <div class="d-flex justify-content-between">
                      <h6 className="mb-0 small text-muted">Service Name 2</h6>
                      <p className="text-muted small mb-0">01.04.2020</p>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <h6>Horse 2</h6>
                    <div class="d-flex justify-content-between">
                      <h6 className="mb-0 small text-muted">Service Name 3</h6>
                      <p className="text-muted small mb-0">01.05.2020</p>
                    </div>
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

export default Profile;