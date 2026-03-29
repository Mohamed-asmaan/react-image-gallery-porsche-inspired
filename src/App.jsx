import Header from "./components/Header";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Gallery />
      </main>
      <footer className="site-footer">
        <p>
          Independent fan / learning project. Porsche and the Porsche crest
          are trademarks of their owner. No affiliation.
        </p>
      </footer>
    </div>
  );
}
