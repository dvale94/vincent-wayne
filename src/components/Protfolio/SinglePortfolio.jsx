import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const SinglePortfolio = ({ data, getData, index }) => {
  const { imgLink, imgLinkLg, title, subTitle } = data;

  return (
    <div className="col-lg-4 col-md-6" data-aos='fade-up' data-aos-duration={500} data-aos-delay={(index % 6) * 100 + 100}>
      <div className="st-portfolio-single st-style1" onClick={() => getData(imgLinkLg, title, subTitle)}>
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={imgLink} alt="portfolio" />
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon="mdi:plus-circle" />
              <h5>{title}</h5>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

SinglePortfolio.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number
}

export default SinglePortfolio
