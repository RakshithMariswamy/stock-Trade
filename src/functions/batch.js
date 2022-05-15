import BatchMock from "../mock/batch.json"
exports.handler = async function (event, context) {
    const batchInfo = BatchMock.companyInfo
    return {
      statusCode: 200,
      body: JSON.stringify(batchInfo),
    };
  }