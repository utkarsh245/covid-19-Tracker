import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <section>
        <h1>
          <span class="blink_me">🔴</span> LIVE
        </h1>
        <h2>COVID-19 TRACKER</h2>
        <ul>
          <li className="card">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span></span>COUNTRY
                </p>
                <p className="card-total card-small">INDIA</p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li className="card">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>TOTAL </span>RECOVERED
                </p>
                <p className="card-total card-small">{data.recovered}</p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li className="card">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>TOTAL </span>CONFIRMED
                </p>
                <p className="card-total card-small">{data.confirmed}</p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li className="card">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>TOTAL </span>DEATHS
                </p>
                <p className="card-total card-small">{data.deaths}</p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li className="card">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>TOTAL</span>ACTIVE
                </p>
                <p className="card-total card-small">{data.active}</p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li className="card">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>LAST </span>UPDATED
                </p>
                <p className="card-total card-small">{data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
