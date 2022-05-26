import React, { useState, useEffect } from "react"
import PreferenceComponent from "./preference"
import { Container, Row, Col, Table } from "react-bootstrap"
import GroupTableRow from "./groupTableRow"
import { useDispatch, useSelector } from "react-redux"

const GroupComponent = props => {
  const dispatch = useDispatch()
  const { groupList } = useSelector(st => st.customReduceData)
  const [groupData, setGroupData] = useState([])
  const apiCallGroup = async () => {
    const url = `/.netlify/functions/group`
    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch({ type: "GroupInfo", payload: data })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setGroupData(groupList)
  }, [groupList])

  useEffect(() => {
    apiCallGroup()
  }, [])

  const searchByName = e => {
    const filterData = groupList.filter(item =>
      item.symbol.includes(e.target.value)
    )
    setGroupData([...filterData])
  }
  const sortBy = e => {
    const value = e.target.value
    const sortByData = groupList.sort((x, y) =>
      x[value] < y[value] ? -1 : x[value] > y[value] ? 1 : 0
    )
    setGroupData([...sortByData])
  }

  const filterBy = e => {
    const value = e.target.value
    const filterData =
      value === "0"
        ? groupList
        : groupList.filter(item => (value === "1" ? item.fav : !item.fav))
    setGroupData([...filterData])
  }
  console.log(groupData)
  return (
    <>
      <div>
        <PreferenceComponent
          searchText="Search By Group Name"
          filterText={searchByName}
          sortBy={sortBy}
          filterBy={filterBy}
        />
        <Container fluid>
          <Row>
            <Col sm={12}>
              <Table striped hover responsive>
                <thead className="batch-table-head">
                  <tr>
                    <th>Group Name</th>
                    <th>Group Details</th>
                    <th>Total Amount</th>
                    <th>Today Status</th>
                    <th>Favorite Group</th>
                  </tr>
                </thead>
                <tbody>
                  {groupData.map(group => {
                    return <GroupTableRow group={group} />
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default GroupComponent
