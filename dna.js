// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    // it will randomly select a base and return the base ('A','T','C', or 'G').
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    // console.log(newStrand);
    return newStrand;
  };
  
  function pAequorFactory(specimenNum, arrayDNA) {
    return (obj = {
      specimenNum: specimenNum,
      dna: arrayDNA, //deve essere 15
      mutate() {
        let randIndex = Math.floor(Math.random() * this.dna.length - 1);
        const currentBase = this.dna[randIndex];
        const dnaBases = ["A", "T", "C", "G"];
        const newBases = dnaBases.filter((elemento) => {
          return elemento != currentBase;
        });
        const newBase = newBases[Math.floor(Math.random() * 3)];
        this.dna[randIndex] = newBase;
        return this.dna;
      },
      compareDNA(pAequor) {
        let currentDNA = this.dna;
        let paequor = pAequor.dna;
        let counter = 0;
        let currentNum = this.specimenNum;
        let paequorNum = pAequor.specimenNum;
  
        if (currentNum != paequorNum) {
          for (let i = 0; i <= 14; i++) {
            if (currentDNA[i] === paequor[i]) {
              counter++;
            }
          } //for
          let percentage = (counter / 15) * 100;
  
          return `the percentage of ${currentNum} in ${paequorNum} is ${percentage}%`;
        } else {
          console.log("same dna comparison");
        }
      },
      willLikelySurvive() {
        let currentDNA = this.dna;
        let counterCG = 0;
  
        for (let i = 0; i <= 14; i++) {
          if (currentDNA[i] === "C" || currentDNA[i] === "G") {
            counterCG++;
          }
        }
        let percentage = (counterCG / 15) * 100;
        //console.log(`the percentage of C and G is ${percentage}%`);
        if (percentage > 60) {
          return true;
        } else {
          return false;
        }
      }, //willLikelySurvive
    }); //obj
  } //function
  
  const organism = pAequorFactory(1, mockUpStrand());
  const organism2 = pAequorFactory(2, mockUpStrand());
  
  //console.log(organism.compareDNA(organism2));
  //console.log(organism.willLikelySurvive());
  
  //--------- last requirement, create and store 30 dna likely to survive
  
  function surviveNaturalEnv() {
    let survivors = 0;
    let organism = [];
    let survArray = [];
    let i = 0;
    while (survivors < 30) {
      //call the function mockUpStrand to create dna of 15
      organism[i] = pAequorFactory(i, mockUpStrand());
      //call willLikelySurvive
      //if survives store in a new array
      if (organism[i].willLikelySurvive()) {
        survivors++;
        survArray[i] = organism[i];
        console.log(`indice ${i} ${survArray[i].dna}`);
      }
      i++;
    }
  }
  
  surviveNaturalEnv();
  