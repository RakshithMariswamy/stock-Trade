import * as React from "react"
import MicrosoftLogin from "react-microsoft-login"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const authHandler = (err, data) => {
    console.log(err, data)
  }

  const clientId = "8c1ce88c-c0a0-4cc5-837f-baed7baf91ef";

  return (

     <Layout>
    <Seo title="Home" />
    Hi Arch Neo Team 1
    <MicrosoftLogin clientId={clientId} authCallback={authHandler} />
  </Layout>
    // <nav
    //   style={{
    //     display: "flex",
    //     padding: "20px",
    //     borderBottom: "1px solid blue",
    //   }}
    // >
    //  <Layout>
    //    <Seo title="Home"/>
    //   <div style={{ float: "right", padding: "20px" }}>
       
    //   </div>
    //   </Layout>
    // </nav>
  )

 
}

export default IndexPage
