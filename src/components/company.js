import React from "react"
import PreferenceComponent from "./preference"
import { Container, Row, Col } from "react-bootstrap"
import CardComponent from "./card"
import CompanyMock from "../mock/company.json"

const CompanyComponent = props => {
  const companyMockInfo = CompanyMock.companyInfo
  return (
    <>
      <div>
        <PreferenceComponent />

        <Container fluid>
          <Row>
            {companyMockInfo.map(cmp => {
              return (
                <Col sm={12} md={6} lg={4}>
                  <CardComponent company={cmp}/>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CompanyComponent
