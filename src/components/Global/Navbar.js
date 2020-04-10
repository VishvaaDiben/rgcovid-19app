import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { GiHamburgerMenu } from "react-icons/gi"

export default class Navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menus: [
      {
        id: 1,
        text: "Dashboard",
        url: "/"
      },
      {
        id: 2,
        text: "Government/NGO",
        url: "/government",
      },
      {
        id: 3,
        text: "WHO",
        url: "/who",
      },
      {
        id: 4,
        text: "About",
        url: "/about",
      },
      {
        id: 5,
        text: "Feedback",
        url: "/feedback",
      },
    ],
  }

  myToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark text-white">
        <Link to="/" className="navbar-brand ml-5">
          <img src={logo} alt="logo goes here" width="40px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.myToggler}
        >
          <span className="navbar-toggler-icon"><GiHamburgerMenu /></span>
          {/* <span className="text-white">=</span> */}
        </button>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-dark"></span>
        </button> */}
        <div className={this.state.navbarClass}>
          <ul className="navbar-nav ml-auto mr-5">
            {this.state.menus.map(menu => {
              return (
                <li key={menu.id} className="nav-item">
                  <Link to={menu.url} className="nav-link">
                    {menu.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item">
              <Link className="nav-link">
                
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
