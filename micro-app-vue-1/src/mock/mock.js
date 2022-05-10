const Mock = require('mockjs')

Mock.mock('/getUserInfo', {
  code: 0,
  userInfo: {
    nickname: '@cname',
    isMale: '@boolean',
    address: '@county(true)',
    avatarUrl () {
      return 'https://ws1.sinaimg.cn/large/0072Vf1pgy1foxkjcneg1j31kw0w0hbs.jpg'
    }
  }
})
