import React from "react";
import { Link } from "react-router-dom";

const DesignComponent = () => {
  return (
    <div className="container flow">
      <h1 className="numbered-title ">
        <span>01</span>main header of the page
      </h1>
      <section>
        <div className="flex">
          <div className="flow" style={{ flexGrow: "1" }}>
            <div
              className="bg-dark text-white ff-serif fs-500"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </div>
          <div className="flow" style={{ flexGrow: "1" }}>
            <div
              className="bg-accent text-dark ff-serif fs-500"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </div>
          <div className="flow" style={{ flexGrow: "1" }}>
            <div
              className="bg-dark text-white ff-serif fs-500"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="numbered-title">
          <span>02 </span>Typography
        </h2>
        <div className="flex">
          <div className="flow" style={{ flexBasis: "100%" }}>
            <div>
              <p className="text-accent">
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p className="fs-900 ff-serif uppercase">Earth</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="fs-800 ff-serif uppercase">Venus</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p className="fs-600 ff-serif uppercase">
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className="text-accent">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
                So, you want to travel to space
              </p>
            </div>
          </div>
          <div className="flow" style={{ flexBasis: "100%" }}>
            <div>
              <p className="text-accent">
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p className="fs-500 ff-serif uppercase">384,400 km</p>
            </div>
            <div>
              <p className="text-accent">
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">
                Avg. Distance
              </p>
            </div>
            <div>
              <p className="text-accent">
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p className="fs-300 uppercase ff-sans-cond letter-spacing-2">
                Europa
              </p>
            </div>
            <div>
              <p className="text-accent">Body Text</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flow">
          <h2 className="numbered-title">
            <span>03</span> Interactive elements
          </h2>
          <div>
            <nav>
              <ul className="primary-navigation underline-indicators flex">
                <li className="active">
                  <Link
                    className="uppercase text-white letter-spacing-2"
                    to="/home"
                  >
                    <span>01</span>Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="uppercase text-white letter-spacing-2"
                    to="/destination"
                  >
                    <span>02</span>Destination
                  </Link>
                </li>
                <li>
                  <Link
                    className="uppercase text-white letter-spacing-2"
                    to="/crew"
                  >
                    <span>03</span>Crew
                  </Link>
                </li>
                <li>
                  <Link
                    className="uppercase text-white letter-spacing-2"
                    to="/technology"
                  >
                    <span>04</span>Technology
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <div style={{ marginTop: "5rem" }}>
            <Link
              to="/home"
              className="large-button uppercase ff-serif fs-600 text-dark bg-white"
            >
              Explore
            </Link>
          </div>
          <div
            className="flow flow-space"
            style={{ marginBottom: "8vh", flexGrow: "100%" }}
          >
            <div className="tab-list underline-indicators flex">
              <button className="uppercase tab-selected ff-sans-cond text-accent bg-dark letter-spacing-2">
                Moon
              </button>
              <button className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">
                Mars
              </button>
              <button className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">
                Europa
              </button>
              <button className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">
                Titan
              </button>
            </div>
          </div>
          <div class="dot-indicators flex">
            <button className="dot-selected">
              <span class="sr-only">Slide title</span>
            </button>
            <button>
              <span class="sr-only">Slide title</span>
            </button>
            <button>
              <span class="sr-only">Slide title</span>
            </button>
          </div>

          <div class="number-indicator grid tab-list">
            <button className="number-indicator-selected">
              <span>1</span>
            </button>
            <button>
              <span>2</span>
            </button>
            <button>
              <span>3</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignComponent;
