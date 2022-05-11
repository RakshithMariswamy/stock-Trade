import React, { useState } from "react"
import PreferenceComponent from "./preference"
import { Container, Row, Col } from "react-bootstrap"
import CardComponent from "./card"
import CompanyMock from "../mock/company.json"

const CompanyComponent = props => {
  const companyMockInfo = CompanyMock.companyInfo
  const [companyData, setCompanyData] = useState(companyMockInfo)
  const searchByName = e => {
    const filterData = companyMockInfo.filter(item =>
      item.name.includes(e.target.value)
    )
    setCompanyData([...filterData])
  }

  const sortBy = e => {
    const value = e.target.value
    const sortByData = companyMockInfo.sort((x, y) =>
      x[value] < y[value] ? -1 : x[value] > y[value] ? 1 : 0
    )
    setCompanyData([...sortByData])
  }

  const filterBy = e => {
    const value = e.target.value
    const filterData =
      value === "0"
        ? companyMockInfo
        : companyMockInfo.filter(item => (value === "1" ? item.fav : !item.fav))
    setCompanyData([...filterData])
  }
  return (
    <>
      <div>
        <PreferenceComponent
          searchText="Search By Company"
          filterText={searchByName}
          sortBy={sortBy}
          filterBy={filterBy}
        />
        <Container fluid>
          <Row>
            {companyData.map(cmp => {
              return (
                <Col sm={12} md={6} lg={4}>
                  <CardComponent company={cmp} />
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
