import React, { useState, useEffect } from "react";
import API_URL from "../component/constant.js";
import APIService from "../component/APIservice.js";
import "./main-style.css";

function HomePage(props) {
  const [inputVal, setInputVal] = useState("");
  const [longURL, setLongURL] = useState("");
  const [APIData, setAPIData] = useState({});
  // const [domain, setDomain] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [isActive, setIsActive] = useState("shrtco.de");
  const [loading, setLoading] = useState(false);
  const { shortDomains } = props;

  const onHandleChange = (e) => {
    setInputVal(e.target.value);
  };

  const onHandleClickDomain = (value) => {
    setIsActive(value);
  };

  const onHandleClickSubmit = (input) => {
    setLongURL(input);
    resetInput();
  };

  // get shortURL by domain type
  const getDataByDomain = (value, data) => {
    switch (value) {
      case "shrtco.de":
        setShortURL(data.full_short_link);
        break;
      case "9qr.de":
        setShortURL(data.full_short_link2);
        break;
      case "shiny.link":
        setShortURL(data.full_short_link3);
        break;
      default:
        break;
    }
  };

  async function fetchData() {
    setLoading(true);
    const result = await APIService.getShortURL(longURL);
    setAPIData(result);
    getDataByDomain(isActive, result);
    result && setLoading(false);
    setLoading(false);
  }

  // reset input field
  const resetInput = () => {
    setInputVal("");
  };

  useEffect(() => {
    longURL && fetchData();
  }, [longURL, isActive]);

  console.log({ APIData, shortURL });

  // control active status of each button
  const buttons = shortDomains.map((name, index) => {
    return (
      <>
        <input
          type="button"
          className={isActive === name ? "active" : ""}
          value={name}
          onClick={() => onHandleClickDomain(name)}
          key={index}
        />
      </>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div id="input-field" className="col-sm-12 col-md-12 col-lg-12">
          <div>
            <h1 className="fw-bold">Link Shortener</h1>
            <div className="d-flex flex-wrap align-items-center input-container">
              <label htmlFor="link-shortener" />
              Enter a Link:
              <input
                id="urlInput"
                type="text"
                placeholder="http://example.com"
                name="link-shortener"
                value={inputVal}
                onChange={onHandleChange}
              />
              <a
                id="submit-link"
                href="#"
                onClick={() => {
                  onHandleClickSubmit(inputVal);
                }}
              >
                {loading === false ? (
                  <i className="bi bi-caret-right-fill"></i>
                ) : (
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border text-dark" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
              </a>
            </div>
            <div className="d-flex flex-wrap align-items-center btn-group">
              <label>Short domain: </label>
              <div>{buttons}</div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12">
          {shortURL && (
            <div className="m-auto result-field">
              <h2 id="text-noti" className="fw-bold text-center">
                Link Generated!
              </h2>
              <a id="result-link">{shortURL}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
