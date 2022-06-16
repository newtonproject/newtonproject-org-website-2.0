export default function arrDate(dateTime:string) {
    let dateArr = dateTime.split("-")
    let timeArr = dateArr[2].split(' ')
    let month = dateArr[1]
    let mm
    if (month == '1' || month == '01' ) {
        mm = 'January'
      } else if (month == '2' || month == '02' ) {
        mm = 'February'
      } else if (month == '3' || month == '03' ) {
        mm = 'March'
      } else if (month == '4' || month == '04' ) {
        mm = 'April'
      } else if (month == '5' || month == '05' ) {
        mm = 'May'
      } else if (month == '6' || month == '06' ) {
        mm = 'June'
      } else if (month == '7' || month == '06' ) {
        mm = 'July'
      } else if (month == '8' || month ==  '08' ) {
        mm = 'August'
      } else if (month == '9' || month ==  '09' ) {
        mm = 'September'
      } else if (month == '10' ) {
        mm = 'October'
      } else if (month == '11' ) {
        mm = 'November'
      } else if (month == '12' ) {
        mm = 'December'
    }
    return mm + ' ' + timeArr[0] + ',' + dateArr[0]
}