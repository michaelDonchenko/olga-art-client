import About from '../../components/about-section/About'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact-us/Contact'
import HomeCarousel from '../../components/homepage-carousel/HomeCarousel'
import Banner from '../../components/news-banner/Banner'
import PolicyRules from '../../components/site-policy-rules/PolicyRules'
import StyledHr from '../../components/styled-hr/StyledHr'
import WelcomeMessage from '../../components/welcome-message/WelcomeMessage'
import { useDispatch } from 'react-redux'
import {
  resetErrorMessage,
  resetSuccessMessage,
} from '../../redux/reducers/adminSlice'
import { useEffect } from 'react'
import SiteRulesModal from '../../components/modals/SiteRulesModal'
import Seo from '../../hooks/Seo'

const Home = () => {
  const dispatch = useDispatch()

  const resetMessages = () => {
    dispatch(resetErrorMessage())
    dispatch(resetSuccessMessage())
  }

  useEffect(() => {
    return () => resetMessages()
  }, [])

  return (
    <div>
      <Seo title='Home page' name='Home' />
      <WelcomeMessage />
      <StyledHr />
      <Banner />
      <StyledHr />
      <Categories />
      <StyledHr />
      <HomeCarousel />
      <StyledHr />
      <About />
      <StyledHr />
      <Contact />
      <StyledHr />
      <PolicyRules />

      {/* modal */}
      <SiteRulesModal />
    </div>
  )
}

export default Home
