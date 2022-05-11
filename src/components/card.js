import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"

const CardComponent = props => {
  const { company } = props
  return (
    <Card className="card-main">
      <Card.Header className="batch-table-head">
        {company?.name} {company?.fav ? <AiFillStar /> : <AiOutlineStar />}
      </Card.Header>
      <Card.Body className="cardBody">
       
          <Row>
            <Col sm={6}>
             <b>{company?.name}</b> 
              <div>{company?.cmpShort}</div>
            </Col>
            <img src={company?.cLogo} alt="logo" className="smallImage" width="100px" />
            <Col sm={6}>${company?.pValue} {company?.pType}</Col>
            <Col sm={6} className="statColor" >{company?.pStat}</Col>
          </Row>
    
      </Card.Body>
    </Card>
  )
}

export default CardComponent
