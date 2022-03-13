import Painting from "./components/Painting";
import paintings from "./paintings.json";

export default function App() {
  return (
    <div>
      <Painting
        imgUrl={paintings[1].url}
        title={paintings[1].title}
        authorName={paintings[1].author.tag}
        profileUrl={paintings[1].author.url}
        price={paintings[1].price}
      />
    </div>
  );
}
