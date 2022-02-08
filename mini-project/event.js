class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
      this.addAvailableTickets = function(ticketName, price) {
          this.ticketName = ticketName;
          this.price = price;
          this.availableTickets.push(ticketName, price);
      }
      this.allTickets = function() {
          let text = "All tickets: ";
          for(let i=0; i < this.availableTickets.length; i++) {
              text += `${i+1}. ${this.availableTickets}, ${this.price}`;
            //   console.log(text);
          }
          return text;
      }
    }
}
  
  // The below statement creates an object.
  let eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
  );


let eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
let eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');


let eventArray = new Array();


// pushing single object to an array
//eventArray.push(eventObj1);
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

console.log(eventArray);


document.addEventListener('DOMContentLoaded', () => {
    // Handler when the DOM is fully loaded
    let html = '';
    eventArray.forEach((item) => {
      html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
  });





  class TicketType {
      constructor(name, price) {
        this.name = name;
        this.price = price;
      }
  }



  eventObj1.addAvailableTickets("human", 299);
  eventObj1.addAvailableTickets("vampire", 99);



//   let newTicket = new TicketType("Zenon", "75");
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)
eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)


//to call
console.log(eventObj1.allTickets());












