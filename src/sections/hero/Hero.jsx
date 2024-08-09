// Constants
import content from "../../constants/content";

// Components
import Article from "../../components/article/Article";

// Styles
import "./hero.css";

export default function Hero() {
  const { image1 } = content.hero.images;

  return (
    <section className="hero">
      <div className="image-container">
        <picture>
          <source media="(min-width:1440px)" srcSet={image1.large} />
          <source media="(min-width:768px)" srcSet={image1.medium} />
          <img src={image1.small} alt="People visiting an art gallery" />
        </picture>
      </div>
      <Article content={content.hero} />
    </section>
  )
}