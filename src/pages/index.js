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
          clientId={"8c1ce88c-c0a0-4cc5-837f-baed7baf91ef"}
          authCallback={loginHandler}
        />
      )}
    </div>
  )
}

export default IndexPage
