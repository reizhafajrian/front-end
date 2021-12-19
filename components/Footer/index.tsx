import React from "react";

export default function index() {
  return (
    <footer
      className="footer p-4 "
      style={{
        marginTop: 10,
        border: "1px solid grey",
      }}
    >
      <div
        className="container"
        style={{
          marginTop: 10,
        }}
      >
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-column">
              <ul>
                <li>
                  <a href="">
                    <h6>About Us</h6>
                  </a>
                </li>
                <li>
                  <a href="">
                    <h6>Feedback</h6>
                  </a>
                </li>
                <li>
                  <a href="">
                    <h6>Contact</h6>
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex flex-column">
              <ul>
                <li>
                  <a href="">
                    <h6>Term & conditions</h6>
                  </a>
                </li>
                <li>
                  <a href="">
                    <h6>Privacy policy</h6>
                  </a>
                </li>
                <li>
                  <a href="">
                    <h6>Help</h6>
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex flex-column">
              <ul>
                <li>
                  <a href="">
                    <h6>Awards</h6>
                  </a>
                </li>
                <li>
                  <a href="">
                    <h6>Newsletter</h6>
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex flex-column">
              <ul>
                <li>
                  <a href="">
                    <h6>Download our mobile app</h6>
                  </a>
                </li>
                <li>
                  <div className="d-flex flex-row">
                    <div
                      style={{
                        height: 60,
                        width: 120,
                        margin: "0px",
                        backgroundColor: "grey",
                      }}
                    ></div>
                    <div
                      style={{
                        height: 60,
                        width: 10,
                      }}
                    ></div>
                    <div
                      style={{
                        height: 60,
                        width: 120,
                        margin: "0px",
                        backgroundColor: "grey",
                      }}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="d-flex flex-row justify-content-between"
            style={{
              marginTop: "2rem",
            }}
          >
            <div className="d-flex flex-column ">
              <h3>Female Daily</h3>
              <p>
                Copyright @ 2015-2017 Female Daily Network . All rights reserved
              </p>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "blue",
                  margin: "0px 10px",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <p
                  style={{
                    color: "white",
                    margin: 0,
                  }}
                >
                  F
                </p>
              </div>{" "}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  margin: "0px 10px",
                  backgroundColor: "blue",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <p
                  style={{
                    color: "white",
                    margin: 0,
                  }}
                >
                  F
                </p>
              </div>{" "}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  margin: "0px 10px",
                  backgroundColor: "blue",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <p
                  style={{
                    color: "white",
                    margin: 0,
                  }}
                >
                  F
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
