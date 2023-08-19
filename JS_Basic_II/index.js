console.log("Lets start");

// let rectangle={
//     length:1,
//     breadth:2,

//     draw: function() {
//         console.log('draw');
//     }
// };

// factory function

function createRectangle(len,bre) {

    let rectangle={
        length : len,
        breadth : bre,
    
        draw: function() {
            console.log('draw');
        }
    };
    return rectangle;

}
let rectangleobj1 = createRectangle(5,4);

// constructor function
function Rectangle(len,bre) {
    this.length=len;
    this.breadth=bre;

    this.draw = function() {
        console.log('Draw rectangle');

    }
}

let rectangleObject = new Rectangle(4,6);

rectangleObject.color='yellow';

let rectangle= {
    length:4,
    bredth:5,
};

for(let key in rectangle){
    console.log(key,rectangle[key]);
}

