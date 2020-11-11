import React from 'react';
import { Link } from 'react-router-dom';

function Item() {
  return (
    <div class="app-container">
      <div className="cover-image">
        <img src="https://i.imgur.com/Z95yaKb.jpg" alt="horse service" />
        <div className="internal-header">
          <div className="back-button">
            <Link to="/">
              <span className="fa fa-chevron-left"></span>
            </Link>
          </div>
          <div className="header-content">
            <div className="header-title">
              <h2>Horse Service A</h2>
              <h3>Helsynki</h3>
            </div>
            <div className="header-additional">
              <h4>Price</h4>
              <h5>$120-230</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div padding={16}>
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


    </div>
  )
}

export default Item;