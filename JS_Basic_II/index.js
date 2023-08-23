console.log('Lets start');
object creation
const rectangle = {
    length:1,bredth:2,

    draw:function(){
        console.log('draw');
    }
};

// Factory function

function createRectangle(len,bre){
    return rectangle = {
        length:len,
        bredth:bre,
    
        draw:function(){
            console.log('draw');
        }
    };
    return rectangle;
}

let rectangleObj1 = createRectangle(5,6);

// constructor function -> PascalNotation
// Constructor function -> props/methods -> initialise/define

function Rectangle(len,bre){
    this.length =len;
    this.breadth =bre;
    this.draw = function(){
        console.log('Draw rectangle');
    }
}

let rectangleObject = new Rectangle(10,15);

rectangleObject.color ='blue';
delete rectangleObject.color;

let a =10;
let b=a;
a++;
console.log(a);
console.log(b);

let a = {
    value:12,
};
let b=a;
a.value++;
console.log(a.value);
console.log(b.value);


let Rectangle ={
    length:3,
    brefth:4
};
for(let key in Rectangle){
    console.log(key,Rectangle[key ]);
}

OBJECT CLONING

let src = {
    a:10,
    b:20
};

let dest ={};

iteration

for (let key in src){
    dest[key] = src[key];
}

assign

let src = {
    a:30,
    b:50
};

let src2 = {
    value:25
};

let dest = Object.assign({},src,src2);

spread

let src = {
    a:29,
    b:30
};
let dest={...src};





