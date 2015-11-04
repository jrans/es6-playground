import {animal, note} from './export.js';

console.log(animal);
note();

import { animal as pet } from './export.js';

console.log(pet);

import {importedFileName} from './export.js'

console.log('look at: '+ importedFileName + ', that name change worked!')

import theNameIWillGiveToWhatEverWasExportedAsDefault from './export.js'

console.log('default:', theNameIWillGiveToWhatEverWasExportedAsDefault);

/* can combine, choose different names i.e. */

import defaultThing , {ANIMAL as thing, NOTE} from './export.js'



// can import everything key for an object which you can name

import * as exported from './export.js';

console.log('the exported object:',  exported);

//notice it had a default parameter.. don;t use reserved words for variables this suggests as could casue problems!!!
