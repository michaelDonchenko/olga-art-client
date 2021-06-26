import styles from './styles'

const SocialMediaSection = () => {
  const classes = styles()

  return (
    <div className={classes.flexDiv}>
      <div className={classes.iconDiv}>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/odartshop/'
          className={classes.myIcons}
        >
          <i className='fab fa-instagram '></i>
          <span className={classes.span}>Instagram</span>
        </a>
      </div>

      <div className={classes.iconDiv}>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.facebook.com/Olga.Don.art'
          className={classes.myIcons}
        >
          <i className='fab fa-facebook-square '></i>
          <span className={classes.span}>Facebook</span>
        </a>
      </div>
      <div className={classes.iconDiv}>
        <a
          href='https://wa.me/972546659069'
          className={classes.myIcons}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i style={{ color: 'green' }} className='fab fa-whatsapp'></i>
          <span className={classes.span}>054-665-9069</span>
        </a>
      </div>
    </div>
  )
}

export default SocialMediaSection
