let s = '';
for(let i=0;i<=10;i++){
    for(let j=0;j<i;j++){
        s+='*';
        //s+='\n';
    }
    s+='\n'; 
}

console.log(s);

for(let i=10;i>=10;i--){
    for(let j=0;j<i;j++){
        s+='*';
        //s+='\n';
    }
    s+='\n'; 
}