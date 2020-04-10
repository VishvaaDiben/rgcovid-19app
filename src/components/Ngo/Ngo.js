import React from "react"
import Heading from "../Global/Heading"

export default function Ngo({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto">
            <p className="lead text-white mb-4 text-center">
              Non-Governmental Organisation (NGO)
            </p>
            <p>
              To be aware of the volunteers donating around local area. If help
              needed in terms of supplies to contact local authority in-charge
              without hesitation. Or to volunteer as part of NGO, but to be
              aware of crime.
              {/*to add a Link gatsby to redirect to prevention page*/}
              
            </p>
            <div>
              Note: No external links of NGOs to share due to copyright issues. In effort get to
              permission from other sites admins to share. 
            </div>
            <i>
              "We can't help everyone, but everyone can help someone" - Ronald
              Reagan
            </i>
            {/* <Link to="/about/">
              <button className="btn btn-warning btn-lg">MOH</button>
            </Link> */}
            {/* <center>
              <a
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                target="_blank"
              >
                <button className="btn btn-success btn-lg">
                  WHO&nbsp;<i className="fa fa-external-link"></i>
                </button>
              </a>
            </center> */}
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
