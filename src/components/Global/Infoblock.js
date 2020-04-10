import React from "react"
import Heading from "./Heading"

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto">
            <p className="lead text-white mb-4">
              Malaysian Government News and Updates access one-stop-info-center.
            </p>
            {/*to add more hyperlink links button to various Government sites*/}
            {/*to add more hyperlink pdf button to various Government sites*/}
            {/* <Link to="/about/">
              <button className="btn btn-warning btn-lg">MOH</button>
            </Link> */}
            <center>
              <a
                href="http://www.moh.gov.my/index.php/pages/view/2019-ncov-wuhan"
                target="_blank"
              >
                <button className="btn btn-success btn-lg">
                  MOH&nbsp;<i className="fa fa-external-link"></i>
                </button>
              </a>
              <a
                href="https://www.malaysia.gov.my/portal/content/30936"
                target="_blank"
              >
                <button className="btn btn-success btn-lg">
                  MyGOV&nbsp;<i className="fa fa-external-link"></i>
                </button>
              </a>
              {/* <a href="http://www.moh.gov.my/index.php"><button className="btn btn-success btn-lg">MOH&nbsp;<i className="fa fa-external-link"></i></button></a> */}
            </center>
            {/* <Link to="/about/">
              <button className="btn btn-warning btn-lg">MCO</button>
            </Link>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">RMO</button>
            </Link>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">example</button>
            </Link>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">example</button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}
