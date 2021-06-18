
let re
re = /hello/i

re = /^h/i
re = /d$/i

const str = 'hello world'
const result = re.exec(str)
console.log(result)

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`)
  } else {
    console.log(`${str} does not match ${re.source}`)
  }
}

reTest(re, str)