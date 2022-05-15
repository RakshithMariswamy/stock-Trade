import React, { useState, useEffect } from "react"
import PreferenceComponent from "./preference"
import { Container, Row, Col } from "react-bootstrap"
import CardComponent from "./card"

const CompanyComponent = props => {
  const [companyData, setCompanyData] = useState([])
  const searchByName = e => {
    const filterData = companyData.filter(item =>
      item.name.includes(e.target.value)
    )
    setCompanyData([...filterData])
  }

  const apiCall = async(parameter) =>{
    //`/.netlify/functions/company`
    // `http://localhost:8888/.netlify/functions/company`
    const url = `/.netlify/functions/company`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        setCompanyData(data)
    } catch (err) {
        console.log(err);
    }
}

useEffect(()=>{
  apiCall()
},[])

  const sortBy = e => {
    const value = e.target.value
    const sortByData = companyData.sort((x, y) =>
      x[value] < y[value] ? -1 : x[value] > y[value] ? 1 : 0
    )
    setCompanyData([...sortByData])
  }

  const filterBy = e => {
    const value = e.target.value
    const filterData =
      value === "0"
        ? companyData
        : companyData.filter(item => (value === "1" ? item.fav : !item.fav))
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
