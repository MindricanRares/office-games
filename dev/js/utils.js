export function createDate(time){
  if(/^\d{2,}:(?:[0-5]\d)$/.test(time)==false){
    throw("Invalid number format");
  }
    const today=new Date();
    const todaysYear=today.getFullYear();
    const todaysMonth=today.getMonth();
    const todayDay=today.getDay();
    const entryHour=time.split(':')[0];
    const entryMin=time.split(':')[1];
    let day=new Date(todaysYear,todaysMonth,todayDay,entryHour,entryMin);
    return day;
}
