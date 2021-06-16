// 1.
for(let i = 0; i < 5; i++){
    console.log("Olá mundo");
}

// 2.
for(let i = 1; i <= 10; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}

// 3.
for(let i = 1; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(i + ' x ' + j + ' = ' + (i*j));
    }
    console.log();
}