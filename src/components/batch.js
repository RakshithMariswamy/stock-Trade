import React, { useEffect } from "react"
import { Table } from "react-bootstrap"
import BatchMock from "../mock/batch.json"
import { FcCheckmark } from "react-icons/fc"
import { FcDisapprove } from "react-icons/fc"
import { useDispatch, useSelector } from "react-redux"

const BatchComponent = props => {
  const dispatch = useDispatch()
  const { batchList } = useSelector(st => st.customReduceData)
  const apiCallBatch = async () => {
    const url = `/.netlify/functions/batch`
    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch({ type: "BatchInfo", payload: data })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    apiCallBatch()
  }, [])
  return (
    <>
      <div className="batch-table">
        <Table striped hover responsive>
          <thead className="batch-table-head">
            <tr>
              <th>Batch No.</th>
              <th>Batch Id.</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {batchList.map(batch => {
              return (
                <tr key={batch?.batchId}>
                  <td>{batch?.batchId}</td>
                  <td>{batch?.batchNumber}</td>
                  <td>{batch?.date}</td>
                  <td>{batch?.time}</td>
                  <td>{batch?.status ? <FcCheckmark /> : <FcDisapprove />}</td>
                  <td className={!batch?.status && "linkColor"}>
                    {batch?.status ? "No action" : "Triger Batch"}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default BatchComponent
