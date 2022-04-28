import * as React from "react"
import MicrosoftLogin from "react-microsoft-login"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
import { MsalProvider } from "@azure/msal-react";
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";


// const configuration = {
//   auth: {
//       clientId: "1d5088f9-2914-47e9-bc37-87f3de4b2cde"
//   }
// };

// const pca = new PublicClientApplication(configuration);
const IndexPage = () => {
  const authHandler = (err, data) => {
    console.log(err, data)
  }

  const clientId = "1d5088f9-2914-47e9-bc37-87f3de4b2cde";

  return (
    <nav
      style={{
        display: "flex",
        padding: "20px",
        borderBottom: "1px solid blue",
      }}
    >
       {/* <MsalProvider instance={pca}>
       <h4 style={{}}>Stock Trade</h4>
       </MsalProvider> */}
     
      <div style={{ float: "right", padding: "20px" }}>
        <MicrosoftLogin clientId={clientId} authCallback={authHandler} />
      </div>
    </nav>
  )

  // <Layout>
  //   <Seo title="Home" />
  //   Hi Arch Neo Team 1

  // </Layout>
}

export default IndexPage
