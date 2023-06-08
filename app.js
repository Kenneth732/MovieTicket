function MovieTickets() {
    this.tickets = {};
    this.currentId = 0;
  }
  
  MovieTickets.prototype.addMovieTicket = function(ticket) {
    ticket.id = this.assignId();
    ticket.calculatePrice();
    this.tickets[ticket.id] = ticket;
  };
  
  MovieTickets.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  };
  
  function Ticket(name, age, time) {
    this.name = name;
    this.age = age;
    this.time = time;
    this.price = 0; // Initialize price to 0
  }
  
  Ticket.prototype.calculatePrice = function() {
    if (this.age >= 60) {
      this.price = 8; // Senior discount
    } else if (this.time === "matinee") {
      this.price = 7; // Matinee discount
    } else {
      this.price = 10; // Regular price
    }
  };
  
  // User Interface Logic
  const resultDiv = document.querySelector("#result");
  const movieTickets = new MovieTickets();
  
document.querySelector('#ticket-form').addEventListener("submit", function(event) {
    event.preventDefault();
    const movieName = document.querySelector("#movie-name").value;
    const time = document.querySelector("#time").value;
    const age = parseInt(document.querySelector("#age").value);
  
    const ticket = new Ticket(movieName, age, time);
    movieTickets.addMovieTicket(ticket);
  
    resultDiv.textContent = `Ticket Price: $${ticket.price}`;
  });
  