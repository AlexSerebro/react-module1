import PropTypes from "prop-types";
import defaultImg from "../img/default.jpg";

export default function Painting(props) {
  const {
    imgUrl = defaultImg,
    title,
    authorName = "Leater",
    profileUrl,
    price,
    quantity,
  } = props;
  return (
    <div>
      <img src={imgUrl} alt={title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Author<a href={profileUrl}>{authorName}</a>
      </p>
      <p>Price:{price} credit</p>
      <p>Доступность: {quantity < 10 ? "Заканчивается" : "есть в наличии"}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Painting.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  authorName: PropTypes.string,
  profileUrl: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
