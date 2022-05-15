import GroupComanyMock from "../mock/group.json"
exports.handler = async function (event, context) {
  const groupMockInfo = GroupComanyMock.groupInfo
  return {
    statusCode: 200,
    body: JSON.stringify(groupMockInfo),
  }
}
