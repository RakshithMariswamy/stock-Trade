import React from "react"
import { Accordion, InputGroup, FormControl, Button } from "react-bootstrap"

const ConfigComponent = props => {
  return (
    <>
      <div className="batch-table">
        <Accordion defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header bsPrefix="config-header">
              Request URL
            </Accordion.Header>
            <Accordion.Body bsPrefix="config-body">
              <span>Request URL * : </span>
              <InputGroup className="mb-3 configInput">
                <FormControl
                  placeholder="Request URL"
                  aria-label="Request URL"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header bsPrefix="config-header">
              Header Parameters
            </Accordion.Header>
            <Accordion.Body bsPrefix="config-body">
              <span>X Host * : </span>
              <InputGroup className="mb-3 configInput">
                <FormControl
                  placeholder="Request URL"
                  aria-label="Request URL"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>

              <span>X Key * : </span>
              <InputGroup className="mb-3 configInput">
                <FormControl
                  placeholder="Request URL"
                  aria-label="Request URL"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header bsPrefix="config-header">
              Parameters
            </Accordion.Header>
            <Accordion.Body bsPrefix="config-body">
              <span>Request-Param * : </span>
              <InputGroup className="mb-3 configInput">
                <FormControl
                  placeholder="Request URL"
                  aria-label="Request URL"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
              <span>Optional-Param * : </span>
              <InputGroup className="mb-3 configInput">
                <FormControl
                  placeholder="Request URL"
                  aria-label="Request URL"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button
          variant="primary"
          className="batch-table-head config-save-button"
          onClick={() => {}}
          right
        >
          Save
        </Button>
      </div>
    </>
  )
}

export default ConfigComponent
