import React, { useState } from "react"
import MicrosoftLogin from "react-microsoft-login"
import "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/Header"
import { Card } from "react-bootstrap"
import DashBoard from "./dashboard"

const IndexPage = () => {
  const [msalInstance, onMsalInstanceChange] = useState()
  const loginHandler = (err, data, msal) => {
    console.log(err, data)
    // some actions
    if (!err && data) {
      localStorage.setItem("auth", data)
      onMsalInstanceChange(msal)
    }
  }

  const logoutHandler = () => {
    msalInstance.logout()
  }

  return (
    <div>
      <Header
        siteTitle="Stock Trade"
        userName="Rakshith"
        isLogedIn={msalInstance}
        logoutHandler={logoutHandler}
      />
      {msalInstance && <DashBoard />}
      {!msalInstance && (
        <>
          <Card className="text-center loginCard">
            <Card.Body>
              <Card.Title>Welcome Stock Trade Application</Card.Title>
              <Card.Text>
                Please Login by Micrsoft Login Authenticator to use Application
              </Card.Text>
              <MicrosoftLogin
                clientId={"955997a3-35fa-4058-9dc8-7e087c8143f5"}
                authCallback={loginHandler}
              />
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  )
}

export default IndexPage
