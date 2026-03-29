import porscheLogo from "../assets/images/porsche_logotype.svg";

// Logo import: Vite returns a URL string, same idea as images in galleryData.
export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#gallery" className="logo">
          <img
            src={porscheLogo}
            alt="Porsche wordmark used for fan styling only"
            className="logo__mark"
          />
          <span className="logo__tag">Image gallery</span>
        </a>
        <button type="button" className="head-button">
          Explore
        </button>
      </div>
    </header>
  );
}
