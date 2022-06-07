function CalculateArea(radious) {
  var area = Math.PI * radious * radious;
  console.log(`Yarıçapı ${radious} olan dairenin alanı: ${area}`);
}

const radius = process.argv[2];

CalculateArea(radius);
