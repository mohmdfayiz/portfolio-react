/* eslint-disable react/prop-types */
const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="work_img" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <span className="work__subtitle">{item.subtitle}</span>
      <a href={item.link} target="__blank" className="work__button">
       View site
        <i className="uil uil-angle-double-right work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
