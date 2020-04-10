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
import { FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa"

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
                url={"https://wa.me/?text=www.text.Netlify.com"}
                className="shareBtn col-md-1 col-sm-1 col-xs-1"
              >
                <FaWhatsapp />
              </WhatsappShareButton>
              <FacebookShareButton
                url={
                  "https://www.facebook.com/sharer/sharer.php?u=www.test.Netlify"
                }
                title="www.test.Netlify"
                className="shareBtn col-md-1 col-sm-1 col-xs-1"
              >
                <FaFacebook />
              </FacebookShareButton>
              <FacebookShareCount
                url={
                  "https://www.facebook.com/sharer/sharer.php?u=www.test.Netlify"
                }
              >
                {shareCount => (
                  <span className="myShareCountWrapper">{shareCount}</span>
                )}
              </FacebookShareCount>
              <TwitterShareButton
                url={"https://twitter.com/intent/tweet/?text=www.test.com"}
                className="shareBtn col-md-1 col-sm-1 col-xs-1"
              >
                <FaTwitter />
              </TwitterShareButton>
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
