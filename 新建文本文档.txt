function parseQuery(href) {
    var hrefPattern=/^(?:([a-z]*):?\/\/)?([a-z0-9-_]{0,63})?(?::(\d*))?([^?]*)(?:\?([^#]*))?(?:#(.*))?$/i;

    if(!href){
        href=location.href;
    }

    if(!hrefPattern.test(href)){
        return false;
    }

    var query=RegExp.$5, url={};

    query.split("&").forEach(function(v){
        if(!v) return;v=v.split("=");url[v[0]]=v[1]||"";
    });
    return url;
}

console.log(parseQuery("?sex=1&age=23&married"));  // => { sex: '1', age: '23', married: '' }

console.log(parseQuery("http://localhost/feature/parsequery?a=yes"));  // => { a: 'yes' }
