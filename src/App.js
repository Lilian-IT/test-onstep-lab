import "./styles/App.scss";
import Header from "./pages/header";
import Images from "./assets/img/cat.jpg";
import Slider from './components/slider/index.js';


function App() {
  return (
    <div className="wrapper container">

      <header className="App-header">
        <Header />
      </header>

      <div className="content">
        <section className="section-one d-flex mt-4">
          <div>
            <h1 className="pt-5 d-flex title-cat mb-4">
              Your <span className="text-colors ms-2">Pet</span>, Our
              <span className=" ms-2 text-white">Passion</span>
            </h1>
            <div className="block-text">
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <button className="btn-lorem-ipsum">Lorem Ipsum</button>
          </div>
          <div className="block-img">
            <img src={Images} alt="cat" className="img-cat rounded-3" />
          </div>
        </section>
        <section className="section-two">
          <hr className="hr-color"/>

          <Slider/>
        </section>
      </div>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
