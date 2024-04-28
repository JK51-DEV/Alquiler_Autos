import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "-150px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Sobre nosotros</h4>
              <h2 className="section__title">Bienvenido al servicio de alquiler de coches</h2>
              <p className="section__description">
              ¡Bienvenido a Alquiler de Autos, tu opción número uno para alquilar vehículos en Lima, Perú! Nos enorgullece ofrecerte un servicio excepcional y una experiencia de alquiler de coches sin igual en la capital peruana. En Alquiler de Autos, nos esforzamos por brindarte una solución de transporte confiable, conveniente y asequible para que puedas explorar Lima y sus alrededores con total libertad y comodidad.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Amplia selección de vehículos
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Precios competitivos
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Atención al cliente excepcional
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Conveniencia y flexibilidad
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
