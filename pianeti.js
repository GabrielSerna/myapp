//ex01()
// import {square, surfaceArea, pi} from './index.js'

//ex02()
// import * as mate from './index.js'

//ex03()
import square2 from './index.js'

// =============================================================================
// IMPORT EVERY SINGLE FUNCTION
// import {<function name>} from '<path file>'

let ex01 = () => {
const annoQuadrato = square(2020);

const surfaceMarte = surfaceArea(3390);

console.log(annoQuadrato);
console.log(surfaceMarte);
}
// ex01()
// =============================================================================
// IMPORT ALL FUNCTIONS
// import * as <name to use> from '<path file>'

let ex02 = () => {
  const annoQuadrato = mate.square(2020);
  
  const surfaceMarte = mate.surfaceArea(3390);
  
  console.log(annoQuadrato);
  console.log(surfaceMarte);
  console.log(mate.pi);

  }
  // ex02()
  // =============================================================================
  // IMPORT DEFAULT
// import <name function> from '<path file>'
let ex03 = () => {

  const quadrato = square2(5);

  console.log(quadrato);

}
// ex03();
  // =============================================================================
