import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

const CardComponent = props => {
  const { company } = props

  const nFormatter = (num) => {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}

  const renderTooltip = message => <Tooltip {...props}>{message}</Tooltip>
  return (
    <Card className="card-main">
      <Card.Header className="batch-table-head">
        {company?.symbol} {company?.fav ? <AiFillStar /> : <AiOutlineStar />}
      </Card.Header>
      <Card.Body className="cardBody">
        <Row>
          <Col sm={12}>
            <b>{company?.identifier}</b>
            <div>{company?.symbol}</div>
          </Col>
          <OverlayTrigger
            placement="top"
            overlay={renderTooltip("Total traded value")}
          >
            <Col sm={6}>TTV : {nFormatter(company?.totalTradedValue)} </Col>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip("Open")}>
            <Col sm={6} >
              open : {company?.open}
            </Col>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip("Day High")}>
            <Col sm={6} >
              DH : {company?.dayHigh}
            </Col>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip("Day Low")}>
            <Col sm={6}>DL : {company?.dayLow} </Col>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip("Year High")}>
            <Col sm={6} >
              YH : {company?.yearHigh}
            </Col>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip("Year Low")}>
            <Col sm={6} >
              YL : {company?.yearLow}
            </Col>
          </OverlayTrigger>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
