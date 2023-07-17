document.getElementById('output')!.style.visibility = 'hidden';

document.getElementById('lbsInput')!.addEventListener('input', function(e) {
  document.getElementById('output')!.style.visibility = 'visible';
  let lbs = (e.target as HTMLInputElement).value;

  document.getElementById("gramsOutput")!.innerHTML = (lbs / 0.0022046).toString();
  document.getElementById("kgOutput")!.innerHTML = (lbs / 2.2046).toString();
  document.getElementById("ozOutput")!.innerHTML = (lbs * 16).toString();
});
