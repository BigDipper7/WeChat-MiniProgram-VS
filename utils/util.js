function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 以下函数返回 min（包含）～ max（包含）之间的数字：
function getRndInt_ALL(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 以下函数返回 min（包含）～ max（不包含）之间的数字：
function getRndInt_PARTIAL(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  formatTime: formatTime,
  getRndInt_ALL: getRndInt_ALL,
  getRndInt_PARTIAL: getRndInt_PARTIAL,
}
