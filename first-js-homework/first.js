let ad = "Ömer";
let resitYas = 18;
let evlenecegiYas = prompt("Lütfen Ömer'in evlendiği yaşı giriniz : ");

for(i=0; i<36;i++){
  if(i == 0){
    document.write("Ömer doğdu -> ");
  }
  else if (i == resitYas){
    document.write("Ömer reşit oldu -> ");
  }
  else if (i == evlenecegiYas){
    document.write("Ömer "+ evlenecegiYas + " yaşında evlendi -> ");
  }
  else if (i == 35){
    document.write("Ömer " + i + " yaşında");
  }
  else{
    document.write("Ömer " + i + " yaşında -> ");
  }
}
