import { useState } from "react";
import "./services.css";

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-icons services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designing
            </h3>

            <span className="services__button" onClick={toggleModal}>
              View More
              <i className="uil uil-angle-double-right services__button-icon "></i>
            </span>

            <div className={showModal ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={toggleModal} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">
                  UI/UX Designing
                </h3>
                <p className="services__modal-description">
                  Some description about the service
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user Interface
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user Interface
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user Interface
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-react services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Development
            </h3>

            <span className="services__button">
              View More
              <i className="uil uil-angle-double-right services__button-icon "></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title"></h3>
                <p className="services__modal-description">
                  Some description about the service
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user Interface
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user Interface
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user Interface
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-brackets-curly services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Development
            </h3>

            <span className="services__button">
              View More
              <i className="uil uil-angle-double-right services__button-icon "></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title"></h3>
                <p className="services__modal-description">
                  Some description about the service
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user Interface
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user Interface
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user Interface
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
