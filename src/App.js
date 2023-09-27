import "./styles/App.scss";
import Header from "./pages/header";
import Images from "./assets/img/cat.jpg";
import Slider from "./components/slider/index.js";
import SliderInfo from "./components/sliderInfo/infoSlider";
import { BsSearch } from "react-icons/bs";
import imgOne from "./assets/img/1.png";
import imgTwo from "./assets/img/2.png";
import imgThree from "./assets/img/3.png";
import FooterMenu from "./components/Footer-Menu/index";


function App() {
  return (
    <div className="wrapper ">
      <header className="App-header">
        <Header />
      </header>

      <div className="content">
        <section className="section-one d-flex mt-4 container">
          <div className="menu-tablet">
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

        <section className="section-two container">
          <hr className="hr-color" />
          <Slider />
        </section>

        <section className="section-three d-flex  justify-content-center align-items-center">
          <div className="block d-flex  justify-content-center align-items-center">
            <label>HEALTHY PETS</label>
            <input
              type="text"
              placeholder="Search for ..."
              className="input-search"
            />
            <div className="btn-icon-search d-flex  justify-content-center align-items-center">
              <BsSearch className="icon-search" />
            </div>
          </div>
        </section>

        <section className="section-four container mb-4">
          <div className="info-text d-flex flex-column justify-content-center align-items-center mb-4">
            <h1 className="title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h1>
            <p className="title-item">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-around mb-4">
              <div className="info-one d-flex align-items-center">
                <div className=" img-container me-5 d-flex align-items-center justify-content-center">
                  <img src={imgOne} alt="one" />
                </div>
                <div className="block-lorem">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>

              <div className="price-info ">
                <p className="price pe-3">$ 00</p>
                <h2 className="ps-3 mb-3">1 MONTH</h2>
                <p className="ps-3 title-text">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
            </div>

            <div className="d-flex flex-column  flex-md-row-reverse align-items-center justify-content-around ps-5 ms-3 mb-4 mobile-edit">
              <div className="info-one d-flex align-items-center justify-content-end">
                <div className="mobile-img img-container me-5 d-flex align-items-center justify-content-center">
                  <img src={imgTwo} alt="two" />
                </div>
                <div className="block-lorem">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>

              <div className="price-info mobile-edit ms-5 ">
                <p className="price pe-3">$ 00</p>
                <h2 className="ps-3 mb-3">1 MONTH</h2>
                <p className="ps-3 title-text">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row align-items-center justify-content-around">
              <div className="info-one info-mrg d-flex align-items-center ">
                <div className="img-container me-4 d-flex align-items-center justify-content-center ">
                  <img src={imgThree} alt="three" />
                </div>
                <div className="block-lorem ms-2 mobile-edit">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>

              <div className="price-info ">
                <p className="price pe-3">$ 00</p>
                <h2 className="ps-3 mb-3">1 MONTH</h2>
                <p className="ps-3 title-text">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-five container mt-5 mb-4">
          <h1>Subscription to food</h1>
          <SliderInfo />
        </section>
      </div>

      <footer className="footer d-flex  justify-content-around align-items-center">
        <h1>LOGO</h1>

        <div>
          <FooterMenu  className="menu-footer "/>

          {/* <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active text-black" aria-current="page" href="#">
               HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                SHOP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                MEDIA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">CONTACT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">SIGN IN</a>
            </li>
          </ul> */}
        </div>
      </footer>
    </div>
  );
}

export default App;
