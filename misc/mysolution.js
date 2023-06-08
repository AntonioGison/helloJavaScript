// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
   // it will randomly select a base and return the base ('A','T','C', or 'G').
    return dnaBases[Math.floor(Math.random() * 4)] 
  
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    console.log(newStrand);
    return newStrand
  }
  
  function pAequorFactory(specimenNum,arrayDNA){
  //uniquenumber++
  //specimenNum = uniquenumber;
    return obj = {
      num: specimenNum,
      DNA: arrayDNA,
      mutate(){
        let diffBase;
        //rand select a base
        diffBase = returnRandBase();
        //change the current base to a different base
        if(diffBase === 'A'){
            console.log(`prima ${diffBase}`);
            diffBase = returnRandBase();
            console.log(`dopo ${diffBase}`);
        }
        else if(diffBase === 'T'){
          console.log(`prima ${diffBase}`);
            diffBase = returnRandBase();
             console.log(`dopo ${diffBase}`);
        }
         else if(diffBase === 'C'){
           console.log(`prima ${diffBase}`);
            diffBase = returnRandBase();
             console.log(`dopo ${diffBase}`);
        }
         else if(diffBase === 'G'){
           console.log(`prima ${diffBase}`);
            diffBase = returnRandBase();
             console.log(`dopo ${diffBase}`);
        }
      return this.DNA = diffBase;
      },//mutate
      compareDNA(pAequor){
        // save mockUpStrand into a new let
        //let compDNA = mockUpStrand;
        //iterate each value of mockupstrand
        //compare each single i value of both
        //if one value is ===
        //increment comparison
        //console log the percentage of DNA the two objects have in common
      }
    }//object
  }//function
  
  /*// Call pAequorFactory and store the returned obj in a variable
  const organism = pAequorFactory(1, ['A', 'T', 'C', 'G']);
  
  // Call obj.mutate on the stored organism variable
  
  console.log(organism.mutate());
  */
  
  
  
  