/**
 * substr
 * @author lianer
 * @github https://github.com/lianer/simpleFeature-
 */

function parseQuery(href, key) {
  if(typeof href !== 'string'){
    return {}
  }

  var query, queryObj = {}, params, param, queryIndex = href.indexOf('?'), hashIndex = href.indexOf('#')

  if(queryIndex < 0){
    queryIndex = 0
  }
  else{
    queryIndex ++
  }

  if(hashIndex){
    query = href.slice(queryIndex, hashIndex)
  }
  else{
    query = href.slice(queryIndex)
  }
  params = query.split('&')

  for (var i = 0; i < params.length; i++) {
    param = params[i].split('=')
    if(param[0] !== ''){
      queryObj[param[0]] = param[1] === void 0 ? '' : param[1]
    }
  }

  if(key){
    return queryObj[key] === void 0 ? '' : queryObj[key]
  }
  else{
    return queryObj
  }
}


// console.log(parseQuery('appid=123456').appid);

// console.log(parseQuery('?sex=1&age=23&married')); // => { sex: '1', age: '23', married: '' }

// console.log(parseQuery('http://localhost/feature/parsequery?from=news&to=home', 'from')); // => news

// console.log(parseQuery('/path?query=123#!/path/to/spa', 'query')); // => news