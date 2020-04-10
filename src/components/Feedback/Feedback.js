import React from "react"
import Heading from "../Global/Heading"

export default function Feedback({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-sm mx-auto">
            {/* <p className="lead text-white mb-4 text-center">Feedback</p> */}
            <div className="justify-content-center"> 
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSedK7z1EPTOk6fEKPPx_v7lllFrm4nyt__wCq3M5RtHuJbJUQ/viewform?embedded=true"
              // width="320"
              height="800"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              max-width= "100%" 
              // max-height= "500%" 
            >
              Loading…
            </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
