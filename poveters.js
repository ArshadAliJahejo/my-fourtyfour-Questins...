"use strict";
// unchanged povetrsnames
let poveterNames = ['aalma iqbal', 'mera galib', 'ahmad faraz'];
function copyarray(ass) {
    return [...ass];
}
function make_great(poveterNamesarray) {
    for (let i = 0; i < poveterNames.length; i++) {
        poveterNamesarray[i] = 'The great   ' + poveterNamesarray[i];
    }
}
function show_poveterNames(poveterNames) {
    poveterNames.forEach(element => {
        console.log(element);
    });
}
const copypovetersnamesarray = copyarray(poveterNames);
make_great(copypovetersnamesarray);
console.log('\n\n\nhe is the my orinal array ');
show_poveterNames(poveterNames);
console.log('\n\n he is the my modifed copy of array ');
show_poveterNames(copypovetersnamesarray);
