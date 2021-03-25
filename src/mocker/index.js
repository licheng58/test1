import Mock from 'mockjs'

Mock.mock(
  '/getTest',
  `function cpmpareNum(a) {if ( a < 10 ) { console.log('a小于10')} else if (a > 10) { console.log('a大于10') }}`,
  // `"if(a>10){"console.log('a大于10')"}" +"if(a>10){"console.log('a小于10')"}" `
)
