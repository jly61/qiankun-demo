const Mock = require('mockjs')

Mock.mock('/login', {
  code: 0,
  data: {
    token: '@string'
  }
})
