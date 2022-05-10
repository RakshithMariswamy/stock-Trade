import React, { useState } from "react"
import MicrosoftLogin from "react-microsoft-login"
import Header from "../components/header"
import { Card } from "react-bootstrap"
import DashBoard from "../components/dashboard"

const IndexPage = () => {
  const isBrowser = typeof window !== "undefined"
  const [msalInstance, onMsalInstanceChange] = useState()
  const loginHandler = (err, data, msal) => {
    if (!err && data) {
      onMsalInstanceChange(msal)
    }
  }

  const logoutHandler = () => {
    msalInstance.logout()
  }

  return (
    <>
      {isBrowser && (
        <div>
          <Header
            siteTitle="Stock Trade"
            userName={msalInstance?.account?.userName}
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
                    Please Login by Micrsoft Login Authenticator to use
                    Application
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
      )}
    </>
  )
}

export default IndexPage
