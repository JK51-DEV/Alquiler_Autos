import React from "react";
import Header from "../components//Header/Header";
import Footer from "../components/Footer/Footer";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <Header/>
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                Estamos comprometidos a proporcionar soluciones de viaje seguro
                </h2>

                <p className="section__description">
                En Alquiler de Autos, la seguridad de nuestros clientes es nuestra máxima prioridad. Nos aseguramos de que cada vehículo en nuestra flota se someta a rigurosas inspecciones y mantenimiento regular para garantizar su seguridad y fiabilidad en la carretera. Además, nuestros equipos están capacitados para ofrecerte asistencia y orientación en caso de cualquier emergencia o situación imprevista durante tu viaje.
                </p>

                <p className="section__description">
                Nuestro compromiso con la seguridad no se limita solo a los vehículos. También nos esforzamos por proporcionarte información útil y consejos prácticos para garantizar un viaje sin contratiempos. Desde sugerencias sobre rutas seguras hasta recordatorios sobre las normas de tráfico locales, estamos aquí para ayudarte a tener una experiencia de alquiler de autos segura y sin problemas.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">¿Necesitas ayuda?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

 
      <Footer/>
    </Helmet>
  );
};

export default About;
