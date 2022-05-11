import React, { useState } from "react"
import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { AiFillCaretDown } from "react-icons/ai"
import { AiFillCaretUp } from "react-icons/ai"
import { Container, Row, Col } from "react-bootstrap"
import CardComponent from "./card"

const GroupTableRow = props => {
  const { group } = props
  const [expandCol, setExpandCol] = useState(false)
  const toggleExpand = () => {
    setExpandCol(!expandCol)
  }
  return (
    <>
      <tr
        class="view"
        onClick={() => {
          toggleExpand()
        }}
      >
        <td>
          {expandCol ? <AiFillCaretUp /> : <AiFillCaretDown />}{" "}
          {group.name}
        </td>
        <td>{group.groupDescription}</td>
        <td>${group.pValue} {group.totalType}</td>
        <td>{group.pStat}</td>
        <td>{group.fav ? <AiFillStar /> : <AiOutlineStar />}</td>
      </tr>
      {expandCol && (
        <tr class="fold">
          <td colspan="7">
            <div class="fold-content">
              <h3>{group.name}</h3>
              <p>{group.groupDescription}</p>
              <Container fluid>
                <Row>
                  {group.companyInfo.map(cmp => {
                    return (
                      <Col sm={12} md={6} lg={4}>
                        <CardComponent company={cmp} />
                      </Col>
                    )
                  })}
                </Row>
              </Container>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export default GroupTableRow
