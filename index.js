// expecting time to be a string in the format like '8:15' or '12:30'
const numberAsWords = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine',
]

const getWordValue = (int) => {
  return numberAsWords[int -1]
}

const formatTimeToWords = (h, m) => {
  console.log(h, m)
  if(h === 0 && m === 0) {
    return 'midnight'
  }

  if(h === 12 && m === 0) {
    return 'midday'
  }

  if(m === 0) {
    return `${getWordValue(h)} o'clock`
  }

  if(m === 15) {
    return `quarter past ${getWordValue(h)}`
  }

  if(m === 30) {
    return `half past ${getWordValue(h)}`
  }

  if(m === 45) {
    return `quarter to ${getWordValue(h == 12 ? 1 : h + 1)}`
  }

  if(m < 30) {
    return `${getWordValue(m)} past ${getWordValue(h)}`
  } else {
    return `${getWordValue(60 - m)} to ${getWordValue(h == 12 ? 1 : h + 1)}`
  }
}

function convertTimeToWords(time) {

  const timeValue = time.split(':')

  if(timeValue.length < 2) {
    return 'Weird time format'
  }

  const hours = parseInt(timeValue[0])
  const minutes = parseInt(timeValue[1])

  if(isNaN(hours) || isNaN(minutes)) {
    return 'Invalid time'
  }

  if(hours > 12) {
    return 'We only support 12 hour format'
  }

  if(minutes > 59) {
    return 'Invalid minutes'
  }

  return formatTimeToWords(hours, minutes)
}

module.exports = { convertTimeToWords };