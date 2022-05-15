import CompanyMock from "../mock/company.json"
exports.handler = async function (event, context) {
    const companyMockInfo = CompanyMock.companyInfo
    return {
      statusCode: 200,
      body: JSON.stringify(companyMockInfo),
    };
  }