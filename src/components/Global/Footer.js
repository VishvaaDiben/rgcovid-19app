import React from "react"
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  EmailShareButton,
} from "react-share"
import {
  FacebookShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
} from "react-share"
import { FaTwitter, FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa"

export default function Footer({ hero }) {
  return (
    <footer>
      <div className="footer-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mx-auto text-center bg-dark text-light">
              <h6>
                Designed & Developed by {hero}&nbsp;
                 {new Date().getFullYear()}&nbsp;
              Share the site
              </h6>
              <WhatsappShareButton
                url={"https://covid-19-mys-update.netlify.com/"}
                className="shareBtn col-md-1 col-sm-1 col-xs-1"
                // text={"https://covid-19-mys-update.netlify.com/"}
              >
                <FaWhatsapp />
              </WhatsappShareButton>
              <FacebookShareButton
                url={
                  "https://covid-19-mys-update.netlify.com/"
                }
                title="https://covid-19-mys-update.netlify.com/"
                className="shareBtn col-md-1 col-sm-1 col-xs-1"
              >
                <FaFacebook />
              </FacebookShareButton>
              <FacebookShareCount
                url={
                  "https://covid-19-mys-update.netlify.com/"
                }
              >
                {shareCount => (
                  <span className="myShareCountWrapper">{shareCount}</span>
                )}
              </FacebookShareCount>
              <TwitterShareButton
                url={"https://covid-19-mys-update.netlify.com/"}
                className="shareBtn col-md-1 col-sm-1 col-xs-1"
              >
                <FaTwitter />
              </TwitterShareButton>
              <LinkedinShareButton
              url={"https://covid-19-mys-update.netlify.com/"}
              className="shareBtn col-md-1 col-sm-1 col-xs-1">
                <FaLinkedin/>
              </LinkedinShareButton>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// *A function with return
// function Footer() {
//     return()
// }
