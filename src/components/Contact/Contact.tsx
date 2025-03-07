import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started Withour Events ? </p>
        <p>Contact Us now .</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:info@avsenggcollege.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:info@avsenggcollege.com">info@avsenggcollege</a>
        </div>
        <div>
        <a href="tel:+917604901617"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917604901617">(+91)7604901617</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}