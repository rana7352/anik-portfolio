import React from "react";
import Header from "../Header/Header";

export default function Blog() {
  return (
    <div>
      <Header />
      <section id="blog" className="blogs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blogs-wrapper">
                <div className="section-heading-middle">
                  {/* <div className="sub-heading d-flex align-items-center mx-auto">
                    <img src="img/orangeDot.png" alt="orange-dot" />
                    <p>My Blog</p>
                  </div> */}
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    LATEST BLOG
                  </h2>
                </div>
                <div className="blogs-container row-mobile-margin mt-50">
                  <div
                    className="modal fade"
                    id="blogModalOne"
                    tabIndex={-1}
                    aria-hidden="true"
                  ></div>
                  <div className="card p-0 blog-card">
                    <div
                      // data-bs-toggle="modal"
                      // data-bs-target="#blogModalOne"
                      className="img-overlay"
                    >
                      <img
                        src="img/Javascript-DOM.jpg"
                        className="card-img-top img-fluid blog-card-img"
                        alt="blog image"
                      />
                    </div>
                    <div className="card-body blog-card-body">
                      <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">
                        29 July, 2022
                      </p>
                      <a
                      // data-bs-toggle="modal"
                      // data-bs-target="#blogModalOne"
                      // href="#blogModalOne"
                      >
                        <span className="card-title h5 fw-600 line-height-3 black-color">
                          The Document Object Model (DOM) is the data
                          representation of the objects that comprise the
                          structure and content of a document on the web.
                        </span>
                      </a>
                      <a
                      // data-bs-toggle="modal"
                      // data-bs-target="#blogModalOne"
                      // href="#blogModalOne"
                      >
                        <div className="blog-card-btn d-flex align-items-center mt-4">
                          <a
                            href="https://dev.to/aniksaha12/javascript-dom-399j"
                            target="_blank"
                          >
                            <span className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">
                              Read More
                            </span>
                          </a>
                          <i className="fa-solid fa-arrow-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card p-0 blog-card">
                    <div
                      // data-bs-toggle="modal"
                      // data-bs-target="#blogModalOne"
                      className="img-overlay"
                    >
                      <img
                        src="img/datatype.webp"
                        className="card-img-top img-fluid blog-card-img"
                        alt="blog image"
                      />
                    </div>
                    <div className="card-body blog-card-body">
                      <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">
                        17 August, 2022
                      </p>
                      <a
                      // data-bs-toggle="modal"
                      // data-bs-target="#blogModalOne"
                      // href="#blogModalOne"
                      >
                        <span className="card-title h5 fw-600 line-height-3 black-color">
                          Programming languages all have built-in data
                          structures, but these often differ from one language
                          to another. This article attempts to list the built-in
                          data structures available in JavaScript and what
                          properties they have.
                        </span>
                      </a>
                      <a
                      // data-bs-toggle="modal"
                      // data-bs-target="#blogModalOne"
                      // href="#blogModalOne"
                      >
                        <div className="blog-card-btn d-flex align-items-center mt-4">
                          <a
                            href="https://dev.to/aniksaha12/javascript-es6-data-type-13ee"
                            target="_blank"
                          >
                            <span className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">
                              Read More
                            </span>
                          </a>
                          <i className="fa-solid fa-arrow-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card p-0 blog-card">
                    <div
                      // data-bs-toggle="modal"
                      // data-bs-target="#blogModalOne"
                      className="img-overlay"
                    >
                      <img
                        src="img/jsloop.jpg"
                        className="card-img-top img-fluid blog-card-img"
                        alt="blog image"
                      />
                    </div>
                    <div className="card-body blog-card-body">
                      <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">
                        26 August, 2022
                      </p>
                      <a
                      // data-bs-toggle="modal"
                      // data-bs-target="#blogModalOne"
                      // href="#blogModalOne"
                      >
                        <span className="card-title h5 fw-600 line-height-3 black-color">
                          Loops offer a quick and easy way to do something
                          repeatedly. This chapter of the JavaScript Guide
                          introduces the different iteration statements
                          available to JavaScript.
                        </span>
                      </a>
                      <a
                      // data-bs-toggle="modal"
                      // data-bs-target="#blogModalOne"
                      // href="#blogModalOne"
                      >
                        <div className="blog-card-btn d-flex align-items-center mt-4">
                          <a
                            href="https://dev.to/aniksaha12/javascript-loops-4gdg"
                            target="_blank"
                          >
                            <span className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">
                              Read More
                            </span>
                          </a>
                          <i className="fa-solid fa-arrow-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card p-0 blog-card">
                    <div
                      // data-bs-toggle="modal"
                      // data-bs-target="#blogModalOne"
                      className="img-overlay"
                    >
                      <img
                        src="img/reactDom.png"
                        className="card-img-top img-fluid blog-card-img"
                        alt="blog image"
                      />
                    </div>
                    <div className="card-body blog-card-body">
                      <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">
                        19 July, 2023
                      </p>
                      <a
                      // data-bs-toggle="modal"
                      // data-bs-target="#blogModalOne"
                      // href="#blogModalOne"
                      >
                        <span className="card-title h5 fw-600 line-height-3 black-color">
                          React popularized something called the Virtual DOM.
                          The virtual DOM is only a virtual representation of
                          the actual DOM.
                        </span>
                      </a>
                      <a
                      // data-bs-toggle="modal"
                      // data-bs-target="#blogModalOne"
                      // href="#blogModalOne"
                      >
                        <div className="blog-card-btn d-flex align-items-center mt-4">
                          <a
                            href="https://dev.to/aniksaha12/reactjs-virtual-dom-1jff"
                            target="_blank"
                          >
                            <span className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">
                              Read More
                            </span>
                          </a>
                          <i className="fa-solid fa-arrow-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
