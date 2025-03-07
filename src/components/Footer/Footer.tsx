import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://www.google.com/url?q=https://avsenggcollege.ac.in/&sa=U&sqi=2&ved=2ahUKEwjon-_I-fWLAxWLmq8BHUP9EMoQFnoECDgQAQ&usg=AOvVaw1U12J4_oyc4RnXfWajKHSS" className="logo">
        <span>www.AvsEngineering</span>
        <span>College.in</span>
      </a>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/school/avs-engineering-college/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://www.instagram.com/avsecenggslm?igsh=Nm1jcGhrcmQ2aGZo"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
