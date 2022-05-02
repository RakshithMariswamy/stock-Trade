import React, { useState } from "react"
import MicrosoftLogin from "react-microsoft-login"

const IndexPage = () => {
  const [msalInstance, onMsalInstanceChange] = useState()
  const loginHandler = (err, data, msal) => {
    console.log(err, data)
    // some actions
    if (!err && data) {
      onMsalInstanceChange(msal)
    }
  }

  const logoutHandler = () => {
    msalInstance.logout()
  }

  return (
    <div>
      <h4>Arch Neo</h4>
      {msalInstance && <button onClick={logoutHandler}>Logout</button>}
      {!msalInstance && (
        <MicrosoftLogin
          clientId={"955997a3-35fa-4058-9dc8-7e087c8143f5"}
          authCallback={loginHandler}
        />
      )}
    </div>
  )
}

export default IndexPage
