function MovieTickets() {
    this.tickets = {};
    this.currentId = 0;
}

MovieTickets.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};

function Ticket(name, age, time, price) {
    this.name = name;
    this.age = age;
    this.time = time;
    this.price = price;
}

Ticket.prototype.calculatePrice = function() {
    // Implement the pricing logic based on movie name, time, and age
    // For example:
    if (this.age >= 60) {
        this.price = 8; // Senior discount
    } else if (this.time === "matinee") {
        this.price = 7; // Matinee discount
    } else {
        this.price = 10; // Regular price
    }
};

MovieTickets.prototype.addMovieTicket = function(ticket) {
    ticket.id = this.assignId();
    ticket.calculatePrice(); // Calculate the ticket price
    this.tickets[ticket.id] = ticket;
};

// Inside the window load event or after defining the Ticket and MovieTickets constructors
window.addEventListener("load", function() {
    const ticketForm = document.querySelector("#ticket-form");
    const resultDiv = document.querySelector("#result");
  
    ticketForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const movieName = document.querySelector("#movie-name").value;
      const time = document.querySelector("#time").value;
      const age = parseInt(document.querySelector("#age").value);
  
      // Create a new Ticket object with user inputs
      const ticket = new Ticket(movieName, age, time);
  
      // Calculate the ticket price based on the Ticket prototype method
      ticket.calculatePrice();
  
      // Display the ticket price to the user
      resultDiv.textContent = `Ticket Price: $${ticket.price}`;
    });
  });
  