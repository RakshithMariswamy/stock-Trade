import React from "react"
import { Tabs, Tab } from "react-bootstrap"
import BatchComponent from "./batch"
import ConfigComponent from "./configaration"
import CompanyComponent from "./company"
import GroupComponent from "./group"

const DashBoard = props => {
  return (
    <>
      <Tabs
        
        transition={false}
        id="noanim-tab-example"
        className="mb-4 tabMain"
      >
        <Tab eventKey="company" title="Company" tabClassName="tabLink">
            <CompanyComponent />
        </Tab>
        <Tab eventKey="group" title="Group" tabClassName="tabLink">
          <GroupComponent />
        </Tab>
        <Tab eventKey="configaration" title="Configaration" tabClassName="tabLink">
         <ConfigComponent />
        </Tab>
        <Tab eventKey="batch" title="Batch" tabClassName="tabLink">
          <BatchComponent />
        </Tab>
      </Tabs>
    </>
  )
}

export default DashBoard
