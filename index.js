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

  let ageGab = utente.datiPersonali.anni;
  
  
  let coord = [1, 2, 3];
  let x = coord[0];
  let Y = coord[1];
  let Z = coord[2];

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

  console.log(let1);
  console.log(let2);
  console.log(let3);
  console.log(names);

}

// =============================================================================
function ex05() {

  arrNum1 = ['1', '2', '43', '54', '75', '45'];
  arrNum2 = ['100', '200'];
  arrLet = [...arrNum1, ...arrNum2].toString();
  // arrLet2 = arrLet.toString();

  console.log(arrLet);

}

// =============================================================================
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
