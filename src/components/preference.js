import * as React from "react"
import {
    InputGroup,
    FormControl,
    Button,
    Row,
    Col,
    Container,
    Form
  } from "react-bootstrap"


const PreferenceComponent = (props) => {
  const { searchText, filterText, sortBy, filterBy } = props;
 
  return ( <Container fluid>
    <Row>
      <Col xs={4}>
        <InputGroup className="mb-3" >
          <FormControl
            placeholder={searchText}
            aria-label={searchText}
            aria-describedby="basic-addon2"
            onChange={filterText}
          />
        </InputGroup>
      </Col>
      <Col xs={3}>
      <Form.Select aria-label="Default select example" onChange={sortBy}>
            <option>Select to Sort</option>
            <option value="name">Sort By Name</option>
            <option value="fav">Sort By Fav</option>
            <option value="pValue">Sort By Total Value</option>
      </Form.Select>
      </Col>
      <Col xs={3}>
      <Form.Select aria-label="Default select example" onChange={filterBy}>
            <option value="0">Filter By All</option>
            <option value="1">Filter By Favorite</option>
            <option value="2">Filter By Non Favorite</option>
      </Form.Select>
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
  </Container>)
   
  }



export default PreferenceComponent
