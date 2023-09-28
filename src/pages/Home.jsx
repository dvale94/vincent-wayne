import oldData from '../Data.json';
import About from '../components/About/About';
import Iconbox from '../components/Iconbox/Iconbox';
// import Skill from '../components/Skill/Skill';
// import Resume from '../components/Resume/ResumeSection';
// import BlogSection from '../components/Blog/BlogSection';
import ReviewSection from '../components/Review/ReviewSection';
import Contact from "../components/Contact/Contact";
import PortfolioSection from '../components/Protfolio/PortfolioSection';
import Hero from '../components/Hero/Hero';

const Home = ({ data }) => {
  const { portfolioData, reviewData, contactData, socialData } = oldData;
  
  // TODO for testing - remove!!!
  console.log(data)
  
  return (
    <>
      <div className="st-height-b80 st-height-lg-b80"></div>
      <Hero data={data.heroData} socialData={socialData} />
      <About data={data.aboutData} data-aos="fade-right" />
      <PortfolioSection data={data.portfolioData} data-aos="fade-right" />
      <Iconbox data={data.servicesData} data-aos="fade-right" />
      {/* <Skill data={skillData} data-aos="fade-right" /> */}
      {/* <Resume data={resumeData} /> */}
      <ReviewSection data={reviewData} data-aos="fade-right" />
      {/* <BlogSection data={blogData} data-aos="fade-right" /> */}
      <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
    </>
  )
}

export default Home;
