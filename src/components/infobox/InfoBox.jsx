import "./infobox.css";

const InfoBox = ({ props }) => {
  return (
    <div className="info-box">
      <p>Firstname: {props.firstname}</p>
      <p>Lastname: {props.lastname}</p>
      <p>Color: {props.pant_color}</p>
      <p>Favourite-food: {props.favorite_food}</p>
      <p>Favourite-tool: {props.favorite_tool}</p>
      <p>Pet: {props.pet}</p>
      <p>Hobby: {props.hobby}</p>
    </div>
  );
};

export default InfoBox;
