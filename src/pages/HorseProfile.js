import React, { useState, useEffect } from 'react';
import { Pane, Paragraph, IconButton, ArrowLeftIcon, Heading, Spinner } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import { GoogleSpreadsheet } from "google-spreadsheet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import key from '../key.json';

function HorseProfile() {
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const SHEET_ID = process.env.REACT_APP_SHEET_ID;
  const [data, setData] = useState(null);
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  const loadData = async () => {
    try {
      await doc.useServiceAccountAuth(key);
      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID];
      const rows = await sheet.getRows();
      setData(rows[0]);
    } catch (e) {
      console.log('e', e)
    }
  }
  useEffect(() => {
    loadData();
  }, [])
  if (!data) return (
    <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
      <Spinner />
    </Pane>
  )
  return (
    <Pane>
      <Pane className="cover-image">
        <img src={data.cover_image} alt={data.horse_name} />
        <Pane display="flex" alignItems="center" paddingY={8} paddingX={8} style={{ background: `linear-gradient(to bottom, transparent, #ffffffee 60% )`, position: 'sticky', top: 0, marginTop: '-140px', paddingTop: '100px' }}>
          <IconButton is={Link} to="/" icon={ArrowLeftIcon} size={32} appearance="minimal" marginRight={8} />
          <Pane flex={1}>
            <Heading size={400}>{data.horse_fullname}</Heading>
            <Heading size={100}>{data.breed}</Heading>
          </Pane>
        </Pane>
      </Pane>
      <Pane padding={16} marginBottom={16}>
        <Paragraph>{data.description}</Paragraph>
        <hr />
        {/* <div className="social-media" style={{ marginTop: '16px' }}>
          <Pane display="flex">
            {data.instagram_link !== '' && (
              <Pane flex={1}>
                <a href={data.instagram_link}><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></a>
              </Pane>
            )}
            {data.youtube_link !== '' && (
              <Pane flex={1}>
                <a href={data.youtube_link}><FontAwesomeIcon icon={['fab', 'youtube']} size="2x" /></a>
              </Pane>
            )}
          </Pane>
        </div> */}
        <div className="gallery">
          <a href="#">Show All </a>
          {data.gallery && (
            <Pane display="flex" flexWrap="wrap">
              {data.gallery.split(', ').map((img) => (
                <Pane flex={1}><img src={img} /></Pane>
              ))}
            </Pane>
          )}
        </div>
      </Pane>

    </Pane>
  )
}

export default HorseProfile;