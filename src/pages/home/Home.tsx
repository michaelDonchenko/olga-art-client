import About from '../../components/about-section/About'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact-us/Contact'
import HomeCarousel from '../../components/homepage-carousel/HomeCarousel'
import Banner from '../../components/news-banner/Banner'
import PolicyRules from '../../components/site-policy-rules/PolicyRules'
import StyledHr from '../../components/styled-hr/StyledHr'
import WelcomeMessage from '../../components/welcome-message/WelcomeMessage'

const Home = () => {
  return (
    <div>
      <WelcomeMessage />
      <Banner />
      <Categories />
      <StyledHr />
      <HomeCarousel />
      <StyledHr />
      <About />
      <StyledHr />
      <Contact />
      <StyledHr />

      <PolicyRules />
    </div>
  )
}

export default Home
