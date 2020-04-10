import React from "react"
import Heading from "./Heading"

export default function DualInfoblock({ heading }) {
  return (
    <section className="my-3 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-8 mx-auto">
            <p className="lead text-white mb-5">
              {/*Make it sound like a leader deliver message/leadership*/}
              {/*Add little description to comprehensible*/}
              Government Aid info. Stay updated on the aids by Government. Check
              eligibility and apply. Contact the authority and get help.
            </p>
            <center>
              <a
                href="https://www.pmo.gov.my/ms/bantuan-bantuan-kerajaan-kepada-rakyat/"
                target="_blank"
              >
                <button className="btn btn-primary btn-lg">
                  PMO&nbsp;<i className="fa fa-external-link"></i>
                </button>
              </a>
              {/* <a href="http://www.moh.gov.my/index.php"><button className="btn btn-primary btn-lg">MOH&nbsp;<i className="fa fa-external-link"></i></button></a> */}
            </center>
          </div>
        </div>
      </div>
    </section>
  )
}
