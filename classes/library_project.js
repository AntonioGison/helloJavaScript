class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(newstatus) {
      this._isCheckedOut = newstatus;
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
  
   addRating(rate) {
      return this.ratings.push(rate);
    }
  
    getAverageRating() {
      let sumtotal = this.ratings.reduce(function (total, num) {return total + num;}, 0);
      return sumtotal / this.ratings.length;
    }
  
   
  }
  
  // three subclasses: Book, Movie, and
  class Book extends Media {
    //in the constructor we pass any value that doesn't have a default value
    constructor(author, title, pages) {
      super(title); // don't need this._title because we use the parent's argument
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._author;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book(
    "Bill Bryson",
    "A Short History of Nearly Everything",
    544
  );
  
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  
  const speed = new Movie('Jan de Bont','Speed',116);
  
  speed.toggleCheckOutStatus();
  
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  console.log(speed.getAverageRating());
  
  
  
  