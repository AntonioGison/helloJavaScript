class Field {
    constructor(field) {
      this.field = field;
      this.currentPosition = [0, 0];
    }
  
    print() {
      let fieldString = '';
      for (let row of this.field) {
        let formattedRow = '';
        for (let char of row) {
          switch (char) {
            case '*':
              formattedRow += '*'; 
              break;
            case '░':
              formattedRow += '░'; 
              break;
            case 'O':
              formattedRow += '0';
              break;
            case '^':
              formattedRow += '^'; 
              break;
          }
        }
        fieldString += formattedRow + '\n';
      }
    
      console.log(fieldString);
    }
    //When a user runs main.js, they should be prompted for input and be able to indicate which direction they’d like to “move”.
    move(direction) {
        let x = this.currentPosition[0];
        let y = this.currentPosition[1];
        switch (direction) {
          case 'up':
            y -= 1;
            this.field[y][x] = '*';
            this.currentPosition = [y][x];
            break;

          case 'down': 
            y += 1;
            this.field[y][x] = '*';
            this.currentPosition = [y][0];
            break;
          case 'left':
            this.currentPosition[0] -= 1;
            break;
          case 'right':
            this.currentPosition[0] += 1;
            break;
        }
        if (this.currentPosition[0] < 0 || this.currentPosition[0] >= this.field.length || this.currentPosition[1] < 0 || this.currentPosition[1] >= this.field[0].length) {
          console.log('You can’t go that way!');
        } else {
          this.print();
        }
      }
      

  }

  
  const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  console.log(`current position before move: ${myField.currentPosition}`);
  myField.print();
  myField.move('down');
  console.log(`current position: ${myField.currentPosition}`);
  myField.move('down');
  