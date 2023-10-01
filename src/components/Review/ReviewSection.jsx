import PropTypes from 'prop-types';
import "./Review.scss";
import SectionHeading from '../SectionHeading/SectionHeading';
import Carousel from '../Slider/Carousel';

const reviewCarouselSettings = {
  "useFor": "review",
  "sliderSetting": {
    "infinite": false,
    "arrows": true,
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "responsive": [
      {
        "breakpoint": 991,
        "settings": {
          "slidesToShow": 2,
        }
      },
      {
        "breakpoint": 767,
        "settings": {
          "slidesToShow": 1,
        }
      }
    ]
  },
};

const Review = ({ data }) => {

  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Testimonials" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <Carousel
          data={{
            ...reviewCarouselSettings,
            informations: data,
          }}
        />
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  )
}

Review.propTypes = {
  data: PropTypes.array
}

export default Review
