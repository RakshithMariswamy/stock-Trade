import * as React from "react"
import "../layout"
import {
    InputGroup,
    FormControl,
    Button,
    Row,
    Col,
    Container,
  } from "react-bootstrap"


const PreferenceComponent = () => (
    <Container fluid>
    <Row>
      <Col xs={4}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search By Company"
            aria-label="Search By Company"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
      </Col>
      <Col xs={3}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Sort By"
            aria-label="Sort By"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
      </Col>
      <Col xs={3}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Filter By"
            aria-label="Filter By"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
      </Col>
      <Col xs={2}>
        <Button
          variant="primary"
          className="batch-table-head "
          onClick={() => {}}
          right
        >
          Export
        </Button>
      </Col>
    </Row>
  </Container>
)



export default PreferenceComponent
