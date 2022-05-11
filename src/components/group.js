import React, { useState } from "react"
import PreferenceComponent from "./preference"
import { Container, Row, Col, Table } from "react-bootstrap"
import GroupTableRow from "./groupTableRow"
import GroupComanyMock from "../mock/group.json"

const GroupComponent = props => {
  const GroupMockInfo = GroupComanyMock.groupInfo
  const [groupData, setGroupData] = useState(GroupMockInfo)
  const searchByName = e => {
    const filterData = GroupMockInfo.filter(item =>
      item.groupName.includes(e.target.value)
    )
    setGroupData([...filterData])
  }
  const sortBy = e => {
    const value = e.target.value
    const sortByData = GroupMockInfo.sort((x, y) =>
      x[value] < y[value] ? -1 : x[value] > y[value] ? 1 : 0
    )
    setGroupData([...sortByData])
  }

  const filterBy = e => {
    const value = e.target.value
    const filterData =
      value === "0"
        ? GroupMockInfo
        : GroupMockInfo.filter(item => (value === "1" ? item.fav : !item.fav))
        setGroupData([...filterData])
  }
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
