import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex justify-end">
          <li className="mx-1 text-xl p-2 text-maizecrayola font-brand">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/login" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } 
  }

  return (
    <header className="flex justify-between px-1 bg-charcoal mobile-m, mobile-l, tablet:justify-center">
      <h1 className="font-brand text-3xl tracking-wide p-2 text-maizecrayola">
        <Link to="/">
          <span>
            <svg
              id="emoji"
              viewBox="0 0 72 72"
              xmlns="http://www.w3.org/2000/svg"
              className="w-9 inline"
            >
              <g id="color">
                <polygon
                  fill="#5c9e31"
                  stroke="none"
                  points="11.3803,52.367 13.1303,47.992 15.8183,45.054 19.6933,43.179 24.0053,43.054 30.0813,43.63 48.8353,51.987 58.5053,57.054 58.2553,58.242 44.9513,59.982 24.1773,60.945"
                />
                <path
                  fill="#b1cc33"
                  stroke="none"
                  d="M18.4553,50.754c0.006,0.548,0.452,0.989,1,0.989h0.011l1.132-0.014c3.9774,0.0945,7.93-0.6507,11.6-2.187 c8.23-3.493,4.665-25.974,4.157-28.931v-0.133c0.0039-3.0745,2.4955-5.5657,5.57-5.569c3.4,0,7.962,2.765,7.962,5.592 c0,3.252-6.458,3.5-6.523,3.5c-0.5521,0.0125-0.9896,0.4702-0.9771,1.0224c0.0014,0.0631,0.0088,0.1259,0.0221,0.1876 c3.074,14.237,1.364,29.705-2.2,31.3c-5.617,2.519-16.071,2.844-23.41,2.081c-1.858-0.193-3.148-0.744-3.833-1.637 c-0.7-0.916-0.881-2.275-0.561-4.279c0.005-0.032-0.006-0.061,0-0.092"
                />
              </g>
              <g id="hair" />
              <g id="skin" />
              <g id="skin-shadow" />
              <g id="line">
                <path
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M44.9693,59 c2.194,0.007,9.422-0.092,12.491-0.183c0.6551-0.0245,1.1663-0.5754,1.1418-1.2305c-0.016-0.4279-0.2613-0.8141-0.6418-1.0105 l-9.472-3.638"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19.4543,50.74 c0.368-0.004,0.7433-0.0087,1.126-0.014c3.8491,0.1018,7.6758-0.6165,11.226-2.107c7.82-3.319,3.549-27.92,3.549-27.92v-0.224 c0-3.6285,2.9415-6.57,6.57-6.57h0c3.628,0,8.962,2.964,8.962,6.592c0,4.333-7.5,4.5-7.5,4.5c2.935,13.6,1.708,30.419-2.772,32.428 c-5.794,2.6-16.262,2.959-23.923,2.163c-5.217-0.542-5.83-3.608-5.278-7.068"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M29.6873,44.563 c-13.331-5.972-18.322,6.062-18.275,7.957"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLiterlimit="10"
                  strokeWidth="2"
                  d="M48.7393,24.452 c0,0,3.793,4.054,7.585,4.577"
                />
                <polyline
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLiterlimit="10"
                  strokeWidth="2"
                  points="56.8733,33.606 55.8273,29.029 60.6653,26.806"
                />
              </g>
            </svg>
          </span>
          Animal Showdown 2.0
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
