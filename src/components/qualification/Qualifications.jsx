import "./qualification.css";

const Qualifications = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
        </div>

        <div className="qualification__section">
          <div className="qualification__content">
            <div className="qualification__data">
              <div className="qualification__align-right">
                <h3 className="qualification__title ">MERN Stack Development</h3>
                <span className="qualification__subtitle">Btototype, Calicut</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Graduation - BCA</h3>
                <span className="qualification__subtitle">
                  University of Calicut
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">

              <div className="qualification__align-right">
                <h3 className="qualification__title">Higher Secondary</h3>
                <span className="qualification__subtitle">IRHSS Edayur</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div> 
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">MET School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Completed in 2017
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
