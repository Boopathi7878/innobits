import { Container } from "./styles";

import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          AVS Engineering College's Computer Science and Engineering department is excited to host a National-level Technical symposium. The event features compelling technical competitions like Paper Presentation, focusing on emerging technologies such as AI/ML, Big Data, Blockchain, Quantum Computing, and IoT. 
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Join and explore the potential impact of these transformative technologies through Project Expo..</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          In addition to the technical competitions, the symposium offers an array of non-technical events. Mark your calendar for this exciting event that ensures to blend innovation, knowledge, and fun !</p>
        </ScrollAnimation>
      </div>
     
    </Container>
  )
}
