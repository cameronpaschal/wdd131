const PI = 3.14;
let area = 0;
let r = 5;

function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}
area = circleArea(r);
console.log("the area of a circle with a radius of ", r, " is: ", area);