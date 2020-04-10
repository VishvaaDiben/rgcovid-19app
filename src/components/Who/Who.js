import React from "react"
import Heading from "../Global/Heading"

export default function Who({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto">
            <p className="lead text-white mb-4 text-center">
              World Health Organization (WHO) external link
            </p>
            {/* <Link to="/about/">
              <button className="btn btn-warning btn-lg">MOH</button>
            </Link> */}
            <center>
              <a
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                target="_blank"
              >
                <button className="btn btn-success btn-lg">
                  WHO&nbsp;<i className="fa fa-external-link"></i>
                </button>
              </a>
            </center>
            {/* <Link to="/about/">
              <button className="btn btn-warning btn-lg">MCO</button>
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
