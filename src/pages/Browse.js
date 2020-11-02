import React from 'react';
import Page from '../components/global/Page';
// import Select from 'react-select'
import { Select, Pane, IconButton, SearchIcon, HomeIcon, UserIcon, NotificationsIcon, CogIcon, CommentIcon, Heading, Paragraph, Avatar } from 'evergreen-ui';
import { Link } from 'react-router-dom'

function Browse() {
  return (
    <Pane background="tealTint" minHeight="100vh">
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding={16}>
        <Heading size={400}>Please select a product or search</Heading>
        <Avatar isSolid name="Jussi Hurmola" size={32} color="green" src="https://www.lifelearnplatform.com/wp-content/uploads/sites/8/2020/02/jussi.jpg" />
      </Pane>


      <Pane display="flex" style={{ position: 'sticky', top: 0, zIndex: 10 }} background="tealTint" padding={16}>

        <Select onChange={(e) => console.log('e', e)} flex={1} marginRight={8}>
          <option value="chocolate">Chocolate</option>
          <option value="strawberry">Strawberry</option>
          <option value="vanilla">Vanilla</option>
        </Select>

        <Link to="/category"><IconButton icon={SearchIcon} /></Link>
      </Pane>

      <Page>

        <Pane paddingY={16}>
          <Heading is="h4" size={200} marginBottom={16}>Recent Orders</Heading>
          <div className="list">
            <div className="list-order-item">
              <Link to="/product">
                <Pane display="flex">
                  <Pane marginRight={16}>
                    <img src="https://via.placeholder.com/64" alt="image1" />
                  </Pane>
                  <Pane flex={1}>
                    <Paragraph>Product description Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                  </Pane>
                </Pane>
              </Link>
            </div>
            <div className="list-order-item">
              <Pane display="flex">
                <Pane marginRight={16}>
                  <img src="https://via.placeholder.com/64" alt="image2" />
                </Pane>
                <Pane flex={1}>
                  <Paragraph>Product description Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                </Pane>
              </Pane>
            </div>
            <div className="list-order-item">
              <Pane display="flex">
                <Pane marginRight={16}>
                  <img src="https://via.placeholder.com/64" alt="image3" />
                </Pane>
                <Pane flex={1}>
                  <Paragraph>Product description Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                </Pane>
              </Pane>
            </div>
          </div>

          <Heading is="h4" size={200} marginBottom={16}>Most Ordered</Heading>
          <div className="list">
            <div className="list-order-item">
              <Link to="/product">
                <Pane display="flex">
                  <Pane marginRight={16}>
                    <img src="https://via.placeholder.com/64" alt="image3" />
                  </Pane>
                  <Pane flex={1}>
                    <Paragraph>Product description Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                  </Pane>
                </Pane>
              </Link>
            </div>
            <div className="list-order-item">
              <Pane display="flex">
                <Pane marginRight={16}>
                  <img src="https://via.placeholder.com/64" alt="image4" />
                </Pane>
                <Pane flex={1}>
                  <Paragraph>Product description Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                </Pane>
              </Pane>
            </div>
            <div className="list-order-item">
              <Pane display="flex">
                <Pane marginRight={16}>
                  <img src="https://via.placeholder.com/64" alt="image5" />
                </Pane>
                <Pane flex={1}>
                  <Paragraph>Product description Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                </Pane>
              </Pane>
            </div>
          </div>

          <Heading is="h4" size={200} marginBottom={16}>Promotions</Heading>
          <div className="list">
            <div className="list-order-item">
              <Link to="/product">
                <Pane display="flex">
                  <Pane marginRight={16}>
                    <img src="https://via.placeholder.com/64" alt="image6" />
                  </Pane>
                  <Pane flex={1}>
                    <Paragraph>Product description Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                  </Pane>
                </Pane>
              </Link>
            </div>
            <div className="list-order-item">
              <Pane display="flex">
                <Pane marginRight={16}>
                  <img src="https://via.placeholder.com/64" alt="image7" />
                </Pane>
                <Pane flex={1}>
                  <Paragraph>Product description Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                </Pane>
              </Pane>
            </div>
            <div className="list-order-item">
              <Pane display="flex">
                <Pane marginRight={16}>
                  <img src="https://via.placeholder.com/64" alt="image8" />
                </Pane>
                <Pane flex={1}>
                  <Paragraph>Product description Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                </Pane>
              </Pane>
            </div>
          </div>

        </Pane>
      </Page>
      <div className="mobile-menu" style={{ position: 'sticky', left: 0, right: 0, bottom: 0 }}>
        <Pane display="flex" justifyContent="space-around" padding={8} background="#fff" elevation="1">
          <Link to="/">
            <IconButton appearance="minimal" icon={HomeIcon} />
          </Link>
          <Link to="/">
            <IconButton appearance="minimal" icon={CommentIcon} />
          </Link>
          <Link to="/">
            <IconButton appearance="minimal" icon={NotificationsIcon} />
          </Link>
          <Link to="/">
            <IconButton appearance="minimal" icon={CogIcon} />
          </Link>
          <Link to="/">
            <IconButton appearance="minimal" icon={UserIcon} />
          </Link>

        </Pane>
      </div>
    </Pane>
  )
}

export default Browse;