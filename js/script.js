// Remove spl char

let a = "barathbeiem@gmail.com"
let b = " ";
for(i=0; i<a.length;i++){
    if(a[i] == "@"){
        continue;
    }
    b+= a[i];

}
console.log(b)


//

let d1 = "bha/ssetu/rath075@gmail.com"
console.log(d1.split("."));
console.log(d1[2]);