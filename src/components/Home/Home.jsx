import "./Home.css";
import homeImage from "../../images/home.jpg";
import Product from "../Product/Product";
import shortid from "shortid";
import ProductImg1 from "../../images/products/1.png";
import ProductImg2 from "../../images/products/2.png";
import ProductImg3 from "../../images/products/3.png";
import ProductImg4 from "../../images/products/4.png";
import ProductImg5 from "../../images/products/5.png";
import ProductImg6 from "../../images/products/6.png";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <div className="row">
            <div className="col-md-12 mt-0">
              <img src={homeImage} alt="Image-Home" className="home-image" />
            </div>
          </div>
          <div className="products">
            <div className="row">
              <div className="col-md-6">
                <Product
                  id={shortid.generate()}
                  image={ProductImg1}
                  price={64}
                  title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset"
                  rating={5}
                />
              </div>
              <div className="col-md-6">
                <Product
                  id={shortid.generate()}
                  image={ProductImg2}
                  price={682.95}
                  title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage "
                  rating={4}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <Product
                  id={shortid.generate()}
                  image={ProductImg3}
                  price={449}
                  title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt "
                  rating={5}
                />
              </div>
              <div className="col-md-4">
                <Product
                  id={shortid.generate()}
                  image={ProductImg4}
                  price={229}
                  title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
                  rating={3}
                />
              </div>

              <div className="col-md-4">
                {" "}
                <Product
                  id={shortid.generate()}
                  image={ProductImg5}
                  price={239}
                  title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini"
                  rating={5}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <Product
                  id={shortid.generate()}
                  image={ProductImg6}
                  price={(1, 142)}
                  title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, "
                  rating={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
