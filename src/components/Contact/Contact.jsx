import { useCallback, useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Contact.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import SocialLinks from '../SocialLinks/SocialLinks';

const Contact = ({ data, socialData }) => {
  const { title, text, subTitle, phone, email } = data;
  const [isSendingMail, setIsSendingMail] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false);

  const defaultFormData = useMemo(
    () => ({
      name: '',
      email: '',
      subject: '',
      msg: '',
    }),
    [],
  );

  const [formData, setFormData] = useState(defaultFormData);

  const handleSendMessage = useCallback(async (event) => {
    event.preventDefault();
    setIsSendingMail(true);

    const result = await emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE,
      import.meta.env.VITE_EMAIL_TEMPLATE,
      event.currentTarget,
      import.meta.env.VITE_EMAIL_USER,
    );

    result.status == 200 ? setIsMailSent(true) : console.log(result.text);

    setIsSendingMail(false);
  }, []);

  const onChange = useCallback((event) => {
    const {name, value} = event.target;
    const fieldData = {[name]: value};
    setFormData({...formData, ...fieldData});
  }, [formData]);

  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Just say Hello</h3>
            <div id="st-alert"></div>
            <form method="POST" className="st-contact-form" id="contact-form" onSubmit={handleSendMessage}>
              <div className="st-form-field">
                <input type="text" id="name" name="name" placeholder="Your Name" required onChange={onChange}/>
              </div>
              <div className="st-form-field">
                <input type="email" id="email" name="email" placeholder="Your Email" required onChange={onChange}/>
              </div>
              <div className="st-form-field">
                <input type="text" id="subject" name="subject" placeholder="Your Subject" required onChange={onChange}/>
              </div>
              <div className="st-form-field">
                <textarea cols="30" rows="10" id="msg" name="msg" placeholder="Your Message" required onChange={onChange}></textarea>
              </div>
              <button className='st-btn st-style1 st-color1' type="submit" id="submit" name="submit" disabled={isSendingMail || isMailSent}>
                {isMailSent ? 'Sent' : isSendingMail ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{text}</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link to="#">{email}</Link>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>{phone}</span>
                </div>
              </div>
              {/* <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>2661 High Meadow Lane Bear Creek, <br />Olancha, KY 93544</span>
                </div>
              </div> */}
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  )
}

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
}

export default Contact;
