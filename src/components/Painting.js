import defaultImg from "../img/default.jpg";

export default function Painting(props) {
  const {
    imgUrl = defaultImg,
    title,
    authorName = "Leater",
    profileUrl,
    price,
  } = props;
  return (
    <div>
      <img src={imgUrl} alt={title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Author<a href={profileUrl}>{authorName}</a>
      </p>
      <p>Price:{price} credit</p>
      <p>some text</p>
      <button type="button">Add to cart</button>
    </div>
  );
}
