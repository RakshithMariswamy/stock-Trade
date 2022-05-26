import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

const CardComponent = props => {
  const { company } = props

  const renderTooltip = message => <Tooltip {...props}>{message}</Tooltip>
  return (
    <Card className="card-main">
      <Card.Header className="batch-table-head">
        {company?.name} {company?.fav ? <AiFillStar /> : <AiOutlineStar />}
      </Card.Header>
      <Card.Body className="cardBody">
        <Row>
          <Col sm={6}>
            <b>{company?.identifier}</b>
            <div>{company?.symbol}</div>
          </Col>
          <OverlayTrigger
            placement="top"
            overlay={renderTooltip("Total traded value")}
          >
            <Col sm={6}>TTV : ${company?.totalTradedValue} </Col>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip("Open")}>
            <Col sm={6} className="statColor">
              open : {company?.open}
            </Col>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip("Day High")}>
            <Col sm={6} className="statColor">
              DH : {company?.dayHigh}
            </Col>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip("Day Low")}>
            <Col sm={6}>DL : ${company?.dayLow} </Col>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip("Year High")}>
            <Col sm={6} className="statColor">
              YH : {company?.yearHigh}
            </Col>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip("Year Low")}>
            <Col sm={6} className="statColor">
              YL : {company?.yearLow}
            </Col>
          </OverlayTrigger>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
