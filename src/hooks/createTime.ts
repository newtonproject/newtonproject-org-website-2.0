export function arrDate(dateTime: string) {
  let dateArr = dateTime.split('-')
  let timeArr = dateArr[2].split(' ')
  let month = dateArr[1]
  let mm
  if (month == '1' || month == '01') {
    mm = 'January'
  } else if (month == '2' || month == '02') {
    mm = 'February'
  } else if (month == '3' || month == '03') {
    mm = 'March'
  } else if (month == '4' || month == '04') {
    mm = 'April'
  } else if (month == '5' || month == '05') {
    mm = 'May'
  } else if (month == '6' || month == '06') {
    mm = 'June'
  } else if (month == '7' || month == '06') {
    mm = 'July'
  } else if (month == '8' || month == '08') {
    mm = 'August'
  } else if (month == '9' || month == '09') {
    mm = 'September'
  } else if (month == '10') {
    mm = 'October'
  } else if (month == '11') {
    mm = 'November'
  } else if (month == '12') {
    mm = 'December'
  }
  return mm + ' ' + timeArr[0] + ',' + dateArr[0]
}

export function arrDateBanner(dateTime: string) {
  let dateArr = dateTime.split(' ')
  let timeArr = dateArr[0].split('-')
  return timeArr[2] + '/' + timeArr[1] + '/' + timeArr[0]
}

export function Weekly(WeeklyItem: string) {
  let dateItem = WeeklyItem.split(' | ')
  let dateArrItem = dateItem[1].split('-')
  let dateItemArr0 = dateArrItem[0].split('.')
  let dateItemArr1 = dateArrItem[1].split('.')
  return (
    dateItem[0] +
    ' ' +
    dateItemArr0[2] +
    '/' +
    dateItemArr0[1] +
    '/' +
    dateItemArr0[0] +
    '-' +
    dateItemArr1[2] +
    '/' +
    dateItemArr1[1] +
    '/' +
    dateItemArr1[0]
  )
}

export function numFormat(num: any) {
  num = parseFloat(num)
  let res = num.toString().replace(/\d+/, function (n: any) {
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1: any) {
      return $1 + ','
    })
  })
  return res
}
