function simpleCalendar() {
    $(document).ready(function () {
      let momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
      let workHours = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.",
        "5 p.m."]
        
      //the current day is displayed at the top of the calendar
      function currentDay() {
        let currentDay = $("#currentDay").text(momentVar);
        return currentDay;
      }
  
      currentDay();
      let row;
      let timeCol;
  