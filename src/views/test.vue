<template>
  <div class="test">test</div>
</template>

<script>
export default {
  created() {
    //1-求和 - 方式1
    const res = this.getsum(1, 2, 3)

    //1-求和 - 方式2
    const res2 = this.getSum2([1, 2, 3])

    //2- 求2个数的差
    const res3 = this.getSub(2, 4)

    //3-正则表达式
    //3-1:精确匹配 - 匹配有‘hello’这个字符
    var regex = /hello/
    // console.log(regex.test('hello1'))

    //3-2：横向模糊匹配
    //需求 - 匹配第一个是a 第2个b出现2-5次 第3个c  所以下面满足的是4个
    //使用String的match方法  找出满足需求的元素 返回一个数组
    var regex = /ab{2,5}c/g
    var string = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
    // console.log(string.match(regex))
    // => ["abbc", "abbbc", "abbbbc", "abbbbbc"]

    //3-3: 纵向模糊匹配
    //可以匹配 a1b a2b a3b 的任意一种情况
    var regex = /a[123]b/g
    var string = 'a0b a1b a2b a3b a4b'
    // console.log(string.match(regex))
    // => ["a1b", "a2b", "a3b"]

    //3-4 ：匹配数字出现 2-5次的元素
    var regex = /\d{2,5}/g
    var string = '123 1234 12345 123456'
    // console.log(string.match(regex))
    // => ["123", "1234", "12345", "12345"]

    //3-5: 惰性匹配
    //当加了？之后就变成惰性模式了  匹配到2个数字之后就会重新匹配
    var regex = /\d{2,5}?/g
    var string = '123123412345123456'
    // console.log(string.match(regex))
    // => ['12', '31', '23', '41', '23', '45', '12', '34', '56']

    //3-6：匹配16进制颜色值
    var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
    var string = '#ffbbad #Fc01DF #FFF #ffE'
    // console.log(string.match(regex))
    // => ["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]

    //3-7: string search方法 - 返回索引
    var str = 'Visit Runoob!'
    // var n = str.search(/Runoob/i)
    // var n = str.search('Runoob')
    // console.log(n)

    //3-8: string方法 replace
    var str = 'microsofT123'
    var txt = str.replace(/microsoft/i, 'Runoob')
    // console.log(txt)

    //3-9: 匹配手机号码
    var str = '13127730987'
    var regex = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/
    // console.log(regex.test(str))

    //4-js计算一个字符串的每个字符出现的次数
    this.getNum('aabbbcccdd')
  },

  methods: {
    //1-求和 - 方式1
    getsum() {
      let sum = 0
      for (let x = 0; x < arguments.length; x++) {
        sum += arguments[x]
      }
      return sum
    },

    //1-求和 - 方式2
    getSum2(arr) {
      let sum = 0
      for (let x = 0; x < arr.length; x++) {
        sum += arr[x]
      }
      return sum
    },

    //2- 求2个数的差
    getSub() {
      let sub = arguments[0]
      for (let x = 1; x < arguments.length; x++) {
        sub -= arguments[x]
      }
      return sub
    },

    //4-js计算一个字符串的每个字符出现的次数,并找出出现最多的那个字符和次数
    //注意：有可能出现最多的会是2个以上的字符
    getNum(str) {
      let obj = {}
      let maxVal = ''
      let maxNum = 0
      for (let x = 0; x < str.length; x++) {
        let key = str[x]
        if (obj[key]) {
          obj[key]++
        } else {
          obj[key] = 1
        }

        if (obj[key] > maxNum) {
          maxVal = key
          maxNum = obj[key]
        }
      }
      //出现最多次数的元素可能不是一个的情况
      for (let i in obj) {
        if (obj[i] === maxNum && maxVal !== i) {
          maxVal += i
        }
      }

      // console.log('出现最多次的字符是：' + maxVal + ' 出现次数是：' + maxNum)
    },
  },
}
</script>

<style></style>
