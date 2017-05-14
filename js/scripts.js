var iPhone6S = new Telefon ("Apple", 2250, "srebrny", "iOS");
var GalaxyS6 = new Telefon ("Samsung", 1500, "czarny", "Android");
var OnePlusOne = new Telefon ("OnePlus", 1700, "biały", "Android");

function Telefon (marka, cena, kolor, system) {
  this.marka = marka; 
  this.cena = cena;
  this.kolor = kolor;
  this.system = system
}
Telefon.prototype.printInfo = function() {
  console.log ("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", cena to " + this.cena + ", a system to " + this.system + ".");
}
iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlusOne.printInfo();