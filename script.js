function area(){
  let base, height, result;
  base = document.getElementById('base').value;
  height = document.getElementById('height').value;
  result = (0.5 * base * height).toFixed(2);
  document.getElementById('answer').value = result;
}


