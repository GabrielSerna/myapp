// =============================================================================
// RESTRUCTURING PRE ES6
function ex01() {
  let utente = {
    datiPersonali: {
      nome: "Gabriel",
      genere: "M",
      anni: 35
    },
    hobbies: {
      sport:   ['motocross', 'minigp', 'stradale'],
      netflix: ['Lucifer', 'Baki'] 
    }
  };

  let ageGab = utente.datiPersonali.anni; // 35
  
  
  let coord = [1, 2, 3];
  let x = coord[0]; // 1
  let Y = coord[1]; // 2
  let Z = coord[2]; // 3

  console.log(ageGab);
  console.log(x, y. z);
}

// =============================================================================
// RESTRUCTURING POST ES6
function ex02() {
  
  let coord = [1, 2, 3];
  let [x, y, z] = coord;

  // console.log(x, y, z);     // 1 2 3

  let auto = {
    marca: 'Lamborghini',
    modello: 'Murcielago',
    velMax: '350 k/h'
  }

  let {marca, modello, velMax} = auto;

  console.log(marca, modello, velMax);
}

// =============================================================================
// RESTRUCTURING POST ES6
function ex03() {
  
  // 1.
  let marca = 'Lamborghini';
  let modello = 'Murcielago';
  let velMax = '350k/h';
  let posti = 2;
  
  let auto = {
    marca: marca,
    modello: modello,
    velMax: velMax,
    posti: posti
  }

  // console.log(auto);      // {marca: 'Lamborghini', modello: 'Murcielago', velMax: '350k/h'}

  // 2.
  let motoHouse = 'Yamaha';
  let model = 'R1M';
  let rider = 'Matteo';

  let mc7Corse = { motoHouse, model, rider }

  console.log(mc7Corse);     // {motoHouse: 'Yamaha', model: 'R1M', rider: 'Matteo'}

}

// =============================================================================
// RESTRUCTURING POST ES6
function ex04() {

  let mixArray = [ 15, 30, 45, 'Gabriel', 'Federica', 'Luca'];

  let [let1, let2, let3, ...names] = mixArray

  console.log(let1);    // 15
  console.log(let2);    // 30
  console.log(let3);    // 45
  console.log(names);   // 'Gabriel', 'Federica', 'Luca'

}

// =============================================================================
// SPREAD ...
function ex05() {

  arrNum1 = ['1', '2', '43', '54', '75', '45'];
  arrNum2 = ['100', '200'];
  arrLet1 = [...arrNum1, ...arrNum2];               // ['1', '2', '43', '54', '75', '45', '100', '200']
  arrLet2 = [...arrNum1, ...arrNum2].toString();    // 1,2,43,54,75,45,100,200

  console.log(arrLet2);

}

// =============================================================================
// SPREAD ...
function ex06() {

  function somma(...nums) {
    let total = 0;

    for (let num of nums) {
      total += num;
    }

    return total;
  };

  console.log(somma(10, 20));
  console.log(somma(10, 20, 100));
  console.log(somma(10, 20, 100, 1000));

};

// =============================================================================
// MAP
function ex07() {
  let names = [ 'Gabriel', 'Federica', 'Riccardo', 'Michele' ];

  let modifyNames = names.map( x => `${x}!!`);
  // let modifyNames = names.map( x => x + '!!' );

  console.log(modifyNames); // ['Gabriel!!', 'Federica!!', 'Riccardo!!', 'Michele!!']

}

// =============================================================================
// FILTER
function ex08() {
  let names = [ 'Gabriel', 'Federica', 'Riccardo', 'Michele', 'Luca', 'Lele', 'Francesca', 'Claudio', 'Jessica' ];

  let namesTooLength = names.filter( x => x.length > 5);  // (7) ['Gabriel', 'Federica', 'Riccardo', 'Michele', 'Francesca', 'Claudio', 'Jessica']
  let shortSnamesLength = names.filter( el => el.length < 5).map( el => el.length); // (2) [4, 4]

  console.log(namesTooLength);
  console.log(shortSnamesLength);

}

// =============================================================================
// ARROW FUNCTIONS
function ex09() {

  let names = [ 'Gabriel', 'Federica', 'Riccardo', 'Michele', 'Luca', 'Lele', 'Francesca', 'Claudio', 'Jessica' ];

  let namesUpper = names.map( el => el.toUpperCase());

  // let namesUpper = names.map( function(el) {
  //   return el.toUpperCase();
  // })

  console.log(namesUpper);
}

// =============================================================================
//
function ex10() {

  const nums = [1, 2, 3, 5, 6, 10, 20, 30];

  const result = nums.filter( el => el > 5).map( num => num * 2 );

  console.log(result);

}

// =============================================================================
// ARROW FUNCTION
function ex11() {

  let hello1 = name => `Hello ${name}`; // dichiaro il parametro <name>
  console.log(hello1('Gabriel'));

  let hello2 = () => `Ciao a tutti`;     // non passo nessun parametro
  console.log(hello2);

  let names = (name1, name2, name3) => `lo staff è composto da ${name1}, ${name2}, ${name3}`;     // passo 3 parametri
  console.log(names('Gabriel', 'Luca', 'Riccardo'));

}

// =============================================================================
// ARROW FUNCTION
function ex12() {

  let saluta = (name1, name2, name3) => {
    name1 = name1.toUpperCase();
    name2 = name2.toUpperCase();

    return `Ciao ${name1}, il tuo nome è lungo ${name1.length} caratteri, sei insieme a ${name2} e ${name3}`;
  }

  console.log(saluta('Gabriel', 'Claudio', 'Mattia'));

}

// =============================================================================
// THIS - function
function ex13() {

  function Prefisso(prefisso) {
    this.prefisso = prefisso;
  }

  Prefisso.prototype.prefissoArray = function(arr) {

    let that = this;
    return arr.map(function(x) {
      return that.prefisso + x;
    });
  };

  let pre = new Prefisso('Ciao ');
  console.log(pre.prefissoArray(['Gabriel', 'Claudio']));

}

// =============================================================================
// THIS - arrow function
// le arrow function ereditano THIS dal contesto che le contiene
function ex14() {

  function Prefisso(prefisso) {
    this.prefisso = prefisso;
  }

  Prefisso.prototype.prefissoArray = function(arr) {

    return arr.map( x => this.prefisso + x );
    };

  let pre = new Prefisso('Ciao ');
  console.log(pre.prefissoArray(['Gabriel', 'Claudio']));

}

// =============================================================================
//
function ex15() {

  function creaMatrice([ righe = 5, colonne = 3] = []) {

    return `Creo una matrice ${righe} x ${colonne}`
  }

    console.log(creaMatrice([]));               // Creo una matrice 5 x 3
    console.log(creaMatrice([2]));              // Creo una matrice 2 x 3
    console.log(creaMatrice([2, 4]));           // Creo una matrice 2 x 4
    console.log(creaMatrice([undefined, 6]));   // Creo una matrice 5 x 6
    console.log(creaMatrice([, 10]));           // Creo una matrice 5 x 10
    console.log(creaMatrice());                 // Creo una matrice 5 x 3

}

// =============================================================================
//