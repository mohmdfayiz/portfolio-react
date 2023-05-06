import HtmlIcon from "../../assets/html.png";
import CssIcon from "../../assets/css.png";
import JsIcon from "../../assets/javascript.png";
import TsIcon from "../../assets/typescript.png";
import ReactIcon from "../../assets/react.png";
import Redux from "../../assets/redux.png";
import NodejsIcon from "../../assets/node.png";
import ExpressIcon from "../../assets/express-original.svg";
import MongoIcon from "../../assets/mongodb-original.svg";
import NextjsIcon from "../../assets/nextjs-icon.svg";
import PostgresIcon from "../../assets/postgre.png";
import BootstrapIcon from "../../assets/bootstrap.png";
import TaiwindIcon from "../../assets/tailwindcss-icon.svg";
import MaterialIcon from "../../assets/mu5.png";
import FigmaIcon from "../../assets/figma.png";
import GitIcon from "../../assets/git.png";
import FirebaseIcon from "../../assets/firebase-icon.svg";
import AwsIcon from "../../assets/aws-icon.webp";

const SkillSet = () => {
  return (
    <div className="skills__box">
      <div className="skills__group grid">
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={HtmlIcon} alt="Html" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">HTML</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={CssIcon} alt="CSS" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">CSS</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={JsIcon} alt="Javascript" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">JavaScript</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={TsIcon} alt="Typescript" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">TypeScript</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={ReactIcon} alt="React" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">React</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={NextjsIcon} alt="Next.js" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">Next.js</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={Redux} alt="Redux" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">Redux</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={NodejsIcon} alt="Nodejs" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">Node js</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={ExpressIcon} alt="Express.js" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">Express js</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={MongoIcon} alt="MongoDB" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">MongoDB</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={PostgresIcon} alt="Postgres" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">PostgreSQL</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={BootstrapIcon} alt="Bootstrap" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">Bootstrap</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img
              src={TaiwindIcon}
              alt="Tailwind css"
              className="skills__icon"
            />
          </div>
          <div>
            <span className="skills__name">Tailwind CSS</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={MaterialIcon} alt="MUI" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">MUI</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={FigmaIcon} alt="Figma" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">Figma</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={GitIcon} alt="Git" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">Git</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={FirebaseIcon} alt="Firebase" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">Firebase</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__icon-container">
            <img src={AwsIcon} alt="AWS" className="skills__icon" />
          </div>
          <div>
            <span className="skills__name">AWS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
