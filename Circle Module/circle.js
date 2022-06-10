function circleArea(radious){
    let area= Math.PI*radious*radious;
    console.log("Area of the circle: ", area)
}

function circleCircumference(radious){
    let circum= Math.PI*radious*2;
    console.log("Circumference of the circle: ", circum)
}

module.exports={
    circleArea,
    circleCircumference
}