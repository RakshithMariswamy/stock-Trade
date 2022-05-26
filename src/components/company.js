import React, { useState, useEffect } from "react"
import PreferenceComponent from "./preference"
import { Container, Row, Col } from "react-bootstrap"
import CardComponent from "./card"
import { useDispatch, useSelector } from "react-redux"

const CompanyComponent = props => {
  const dispatch = useDispatch()
  const { customerList } = useSelector(st => st.customReduceData)
  const [companyData, setCompanyData] = useState([])
  const searchByName = e => {
    const filterData = customerList.filter(item =>
      item.symbol.includes(e.target.value)
    )
    setCompanyData([...filterData])
  }

  const apiCallCustomer = async () => {
    const url = `/.netlify/functions/company`

    try {
      const response = await fetch(url)
      const responsedata = await response.json()
      dispatch({ type: "CustomerInfo", payload: responsedata.data })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setCompanyData(customerList)
  }, [customerList])

  useEffect(() => {
    apiCallCustomer()
  }, [])

  const sortBy = e => {
    const value = e.target.value
    const sortByData = customerList.sort((x, y) =>
      x[value] < y[value] ? -1 : x[value] > y[value] ? 1 : 0
    )
    setCompanyData([...sortByData])
  }

  const filterBy = e => {
    const value = e.target.value
    const filterData =
      value === "0"
        ? customerList
        : customerList.filter(item => (value === "1" ? item.fav : !item.fav))
    setCompanyData([...filterData])
  }
  console.log(companyData)
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
