import React from "react"
import Heading from "../Global/Heading"
import { GoHeart, GoPrimitiveDot } from "react-icons/go"

export default function About({ heading }) {
  return (
    <section className="my-3 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-8 mx-auto">
            <p className="lead text-white mb-3">
              {/*Make it sound like a leader deliver message/leadership*/}
              {/*Add little description to comprehensible*/}
              To provide people with the official and credible gateway
              information source and access :-
            </p>
            {/* to make them hyperlinks to Link to other page */}
            <ul>
              <li>
                <p>Minimal Statistics of Covid-19</p>
              </li>
              <li>
                <p>Helps and aids by Government/NGO</p>
              </li>
              <li>
                <p>
                  Restricted Movement Order(RMO)/Movement Order Control(MCO)
                  updates
                </p>
                <li>
                  <p>Latest News & Announcements WHO</p>
                </li>
              </li>
            </ul>
            <br />
            Sources:
            <ul>
              <li>
                <a href="https://github.com/NovelCOVID/API" target="_blank">
                  John Hopkins University
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mathdroid/covid-19-api"
                  target="_blank"
                >
                  mathdroid/Covid-19 API
                </a>
              </li>
              <li>Photos by hitesh choudhary from Pexels</li>
            </ul>
            <p>
              <i>
                It is our duty to be aware and skeptical by taking information
                circled around as grain of salt and not literally. It is also
                crucial to validate and crosscheck with trusted sites and
                sources for credibility.
              </i>
            </p>
            <div>
              Note: Disclaimer on any and all representations with respect to
              the Website, including accuracy, and fitness for use.
              Non-commercial site to educate members of public.
            </div>
            <div className="text-center">
              {/* <b>Please take care of yourself during these times. We're all in this together!</b> */}
              <b>
                "Stay Safe
                <GoHeart />
                Stay Healthy
                <GoHeart />
                Stay Active
                <GoHeart />
                Stay At Home"
              </b>
            </div>
            {/* <center>
              <a
                href="https://www.pmo.gov.my/ms/bantuan-bantuan-kerajaan-kepada-rakyat/"
                target="_blank"
              >
                <button className="btn btn-primary btn-lg">
                  PMO&nbsp;<i className="fa fa-external-link"></i>
                </button>
              </a>
              <a
                href="https://www.malaysia.gov.my/portal/content/30936"
                target="_blank"
              >
                <button className="btn btn-primary btn-lg">
                  MyGOV&nbsp;<i className="fa fa-external-link"></i>
                </button>
              </a>
              <a href="http://www.moh.gov.my/index.php">
                <button className="btn btn-primary btn-lg">
                  MOH&nbsp;<i className="fa fa-external-link"></i>
                </button>
              </a>
              <a href="http://www.moh.gov.my/index.php">
                <button className="btn btn-primary btn-lg">
                  MOH&nbsp;<i className="fa fa-external-link"></i>
                </button>
              </a>
            </center> */}
          </div>
        </div>
      </div>
    </section>
  )
}
