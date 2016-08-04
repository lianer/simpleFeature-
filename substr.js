/**
 * substr
 * @author lianer
 * @github https://github.com/lianer/simpleFeature-
 */

function substr(/* 字符串 */ str, /* 字符数 */ limit, /* 超出后缀 */suffix){
  if(typeof str !== 'string'){
    return ''
  }
  var result = ''
  var count = 0
  var strArr = str.split('')
  var char
  var charPattern = /[\x00-\xff]/
  if(suffix === void 0){
    suffix = '...'
  }
  for (var i = 0; i < strArr.length; i++) {
    char = strArr[i]
    if(charPattern.test(char)){
      count += 1
    }
    else{
      count += 2
    }
    if(count > limit * 2){
      break
    }
    else{
      result += char
    }
  }
  if(result === str){
    return result
  }
  else{
    return result + suffix
  }
}


// console.log(substr('南拳的妈妈1992', 4))    // => 南拳的妈...

// console.log(substr('imlianer.com', 4))     // => imlianer...

// console.log(substr('倒霉熊1992', 4))       // => 倒霉熊19...

// console.log(substr('小红', 4))             // => 小红