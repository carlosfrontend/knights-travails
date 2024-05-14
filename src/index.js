import LinkedList from './LinkedList.js';

const myList = new LinkedList();

myList.append('First');
myList.append('Second');
myList.append('Third');
myList.append('Four');

console.log('\n######## SIZE ##########\n');
console.log(myList.size());
console.log('\n##### LINKED LIST ######\n');
console.log(myList.toString());
console.log('\n####### HEAD ###########\n');
console.log(myList.head());
console.log('\n######## TAIL ############\n');
console.log(myList.tail());
console.log('\n##### NODE AT INDEX ######\n');
console.log(myList.at(3));
console.log('\n########## POP ###########\n');
console.log(myList.pop());
console.log(myList.pop());
console.log(myList.pop());
console.log(myList.pop());
console.log(myList.size());
myList.append('Mike');
myList.append('Sarah');
myList.append('Lewis');
myList.prepend('Lara');
console.log('\n#### CONTAINS A VALUE ###\n');
console.log(myList.contains('Lewis'));
console.log('\n####### FIND VALUE ######\n');
console.log(myList.find('Lewis'));
console.log('\n####### TO STRING #######\n');
console.log(myList.toString());
console.log('\n######## INSERT AT #######\n');
myList.insertAt('new Value', 4);
console.log(myList.toString());
console.log('\n#######################\n');
console.log('\n###### REMOVE AT ######\n');
myList.removeAt(2);
console.log(myList.toString());
myList.removeAt(0);
console.log(myList.toString());
console.log(myList.size());
console.log('\n#######################\n');