import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import "./App.scss";

export default function App() {
  return (
    <main className="App">
      <Header />
      <Content />
      <Footer />
    </main>
  );
}