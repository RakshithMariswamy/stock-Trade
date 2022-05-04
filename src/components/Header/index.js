import * as React from "react"
import PropTypes from "prop-types"
import "../layout"
import { Navbar, Container, Button } from "react-bootstrap"
import { FcPositiveDynamic } from "react-icons/fc"

const Header = ({ siteTitle, userName, isLogedIn, logoutHandler }) => (
  <Navbar className="navBarHeader">
    <Container>
      <Navbar.Brand href="/" className="navHeaderColor navBold">
        <FcPositiveDynamic /> {siteTitle}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {isLogedIn && (
          <Navbar.Text className="navHeaderColor">
            Signed in as: {userName}
          </Navbar.Text>
        )}
        {isLogedIn && (
          <Navbar.Text>
            {" "}
            <Button
              variant="primary"
              className="batch-table-head"
              onClick={logoutHandler}
            >
              Logout
            </Button>
          </Navbar.Text>
        )}
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  userName: PropTypes.string,
  isLogedIn: PropTypes.bool,
  logoutHandler: PropTypes.func.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
  userName: "",
  isLogedIn: false,
}

export default Header
