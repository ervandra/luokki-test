import React from 'react';
// import { Link } from 'react-router-dom';

function Item() {
  return (
    <div className="app-container">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Item</h3>
          </div>
        </div>
      </div>
    </div>
    // <Pane>
    //   <Pane className="cover-image">
    //     <img src={data.cover_image} alt={data.horse_name} />
    //     <Pane display="flex" alignItems="center" paddingY={8} paddingX={8} style={{ background: `linear-gradient(to bottom, transparent, #ffffffee 60% )`, position: 'sticky', top: 0, marginTop: '-140px', paddingTop: '100px' }}>
    //       <IconButton is={Link} to="/" icon={ArrowLeftIcon} size={32} appearance="minimal" marginRight={8} />
    //       <Pane flex={1}>
    //         <Heading size={200}><Link to="/horse">{data.horse_name}</Link></Heading>
    //         <Heading size={100}>{data.category}</Heading>
    //       </Pane>
    //       <Pane textAlign="right">
    //         <Heading size={200}>Prices</Heading>
    //         <Heading size={200}>${data.price} - 456</Heading>
    //       </Pane>
    //     </Pane>
    //   </Pane>
    //   <Pane padding={16}>
    //     <Paragraph>{data.description}</Paragraph>
    //     <Heading size={500} marginTop={16}>Provider name</Heading>
    //     <Paragraph>{data.provider_description}</Paragraph>
    //     <div className="social-media" style={{ marginTop: '16px' }}>
    //       <Pane display="flex">
    //         {data.instagram_link !== '' && (
    //           <Pane flex={1}>
    //             <a href={data.instagram_link}><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></a>
    //           </Pane>
    //         )}
    //         <Pane flex={1}>
    //           <a href={data.youtube_link}><FontAwesomeIcon icon={['fab', 'youtube']} size="2x" /></a>
    //         </Pane>
    //       </Pane>
    //     </div>
    //     {/* <Heading>Name: {data.horse_name}</Heading>
    //     <Heading>Owner: {data.owner_name}</Heading>
    //     <Heading>Price: {data.price}</Heading>
    //     <Heading>Rating: {data.rating}</Heading>
    //     <Heading>Description: {data.description}</Heading> */}
    //   </Pane>

    // </Pane>
  )
}

export default Item;