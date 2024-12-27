import { NgClass } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
      calendarElement = Array()
      currentMonthElement = ""
      @Output() clickDays = new EventEmitter<{year:number , month:number , day:number}>();
      getEvent(day:number){

      }

      generateCalendar(year:number, month:number) {
        const calendarElement = document.getElementById('calendar');
        
        // Create a date object for the first day of the specified month
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
            
        // Set the current month text
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.currentMonthElement = `${monthNames[month]} ${year}`;
        
        // Calculate the day of the week for the first day of the month (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
        const firstDayOfWeek = firstDayOfMonth.getDay();
    
        // Create headers for the days of the week
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        daysOfWeek.forEach(day => {
            // dayElement.className = 'text-center font-semibold';
            // this.calendarElement.push(day);
        });
    
        this.calendarElement = Array()
        // Create empty boxes for days before the first day of the month
        for (let i = 0; i < firstDayOfWeek; i++) {
            // const emptyDayElement = document.createElement('div');
            this.calendarElement.push(null);
        }
    
        // Create boxes for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'text-center py-2 border cursor-pointer';
            // dayElement.innerText = day;
    
            // Check if this date is the current date
            const currentDate = new Date();
            let isCurent = false
            if (year === currentDate.getFullYear() && month === currentDate.getMonth() && day === currentDate.getDate()) {
              isCurent = true
            }
    
            this.calendarElement.push({dayNumber:day , current:isCurent , events:isCurent?["meeting:12h30-13h40"]:[]});
        }
    }

    ngOnInit(): void {
      const currentDate = new Date();
      this.currentYear = currentDate.getFullYear();
      this.currentMonth = currentDate.getMonth();
      this.generateCalendar(this.currentYear, this.currentMonth);
    }

    splitPerWeeks(){
      let splitElement = Array()
      let weeks = Array()
      for(let day of this.calendarElement){
        weeks.push(day)
        if(weeks.length == 7){
          splitElement.push(weeks)
          weeks = Array()
        }
      }
      if(weeks.length > 0){
        for(let i = weeks.length ; i < 7;i++ ) weeks.push(null)
        splitElement.push(weeks)
      }
      return splitElement
    }

    currentMonth = 0
    currentYear = 0
    prevMonth(){
      this.currentMonth--;
      if (this.currentMonth < 0) {
          this.currentMonth = 11;
          this.currentYear--;
      }
      this.generateCalendar(this.currentYear, this.currentMonth);

    }

    nextMonth(){
      this.currentMonth++;
      if (this.currentMonth > 11) {
          this.currentMonth = 0;
          this.currentYear++;
      }
      this.generateCalendar(this.currentYear, this.currentMonth);

    }

    // Function to show the modal with the selected date
    showModal(selectedDate:number) {
        
    }
    
    // Function to hide the modal
    hideModal() {
        
    }
}
