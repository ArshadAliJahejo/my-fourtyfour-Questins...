// unchanged povetrsnames

let poveterNames : string[] = ['aalma iqbal' , 'mera galib' , 'ahmad faraz'];

function copyarray(ass:string[]){
return[...ass]

}



function make_great(poveterNamesarray: string[]){
    for(let i=0; i<poveterNames.length; i++){
        poveterNamesarray[i] = 'The great   ' + poveterNamesarray[i]
    }
    
}

function show_poveterNames(poveterNames: string[]){
    poveterNames.forEach(element =>{
     console.log(element);
    })
}


const copypovetersnamesarray =   copyarray(poveterNames)
make_great(copypovetersnamesarray);

console.log('\n\n\nhe is the my orinal array ');
show_poveterNames(poveterNames)

console.log('\n\n he is the my modifed copy of array ');
show_poveterNames( copypovetersnamesarray)
