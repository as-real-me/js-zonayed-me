let name = new Map();
name.set('firstName', 'Ashiouzzaman');
name.set('lastName', 'Real');

console.log(name);
const fname = name.get('firstName');
console.log(fname);
name.delete('firstName');
console.log(name);
name.clear();
console.log(name);
