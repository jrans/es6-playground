/*
This is a pretty comprehensive example of all the ways in which to export. If some missing please add.
*/

// basics

export var animal = 'dog';

console.log('notice I have also defined animal in the file to be:' + animal);

export function note () {
  console.log('this function can also be called in the file');
}

note();
console.log('a little reminder never hurt nobody')



// alternatively I coudl have done this:

var ANIMAL = 'dog';

var NOTE = function() {
  console.log('I was exported');
}

export { NOTE, ANIMAL };



// if I wanted another file to have another name for a value

var exportedFileName = 'export.js';

export { exportedFileName as importedFileName };

// note importedFileName cannot be used locally



// finally if I want to export something (an expression or function) as the default result if importing doesn't specify anything

export default 'Default Expression';


/* Note I can also re-export stuff from other modules like so:

export * from 'additional.js'
will export all name functions or values from the additional module

export {something, something2} from 'you_can_be_selective_too.js'

In a very similar way to how importing works. Check import.js to understand more

*/
