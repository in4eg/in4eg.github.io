//Construstor
function Bacteria(name, type,  caption, siblings, parent, isPrimary) {
  this.name = name || 'no name';
  this.type = type || 'no type';
  this.caption = caption || 'no caption';
  this.siblings = siblings || [];
  this.parent = parent || 'no parent';
  this.isPrimary = isPrimary || false;


  this.result = (function (name, type, caption, isPrimary) {

    var createSection = document.createElement('section');
    document.getElementById('result').appendChild(createSection).classList.add("section");

    if (isPrimary == true) {
      createSection.classList.add("primary");
    }

    var createName = document.createElement('div');
    createName.innerHTML = name;

    createSection.appendChild(createName).classList.add("title");

    var createType = document.createElement('div');
    createType.innerHTML = type;

    createSection.appendChild(createType).classList.add("type");

    var createCaption = document.createElement('div');
    createCaption.innerHTML = caption;

    createSection.appendChild(createCaption).classList.add("caption");

  }(this.name, this.type, this.caption, this.isPrimary));

  //get family ties
  this.familyTies = function(obj){
    if (this.name == obj.parent) {
      console.log('they are parent and child');
    } else if(inArray(obj.siblings, this.name)){
     console.log('they are siblings');
   } else {
     console.log('other');
   }
 };
};
// kingdom
var kingdomBacteria = new Bacteria('Bacteria', 'kingdom', 'large domain of prokaryotic microorganisms', ['Viruses', 'Fungus', 'Plants', 'Animals'], 'Nature', true)

// phylum
var phylumAquificae = new Bacteria('Aquificae', 'phylum', 'Diverse collection of bacteria that live in harsh environmental settings', ['Chlamydiae', 'Proteobacteria', 'Spirochaetes'], 'Bacteria', false)
var phylumChlamydiae = new Bacteria('Chlamydiae', 'phylum', 'Its members are a group of obligate intracellular bacteria', ['Aquificae', 'Proteobacteria', 'Spirochaetes'], 'Bacteria', false)
var phylumSpirochaetes = new Bacteria('Spirochaetes', 'phylum', 'Contains distinctive diderm bacteria, most of which have long, helically coiled cells', ['Aquificae', 'Proteobacteria', 'Chlamydiae'], 'Bacteria', true)

// class
var classSpirochaetia = new Bacteria('Spirochaetia', 'class', 'The class currently consists of 14 validly named genera across 4 orders and 5 families', [], 'Spirochaetes', true)

// order
var orderSpirochaete = new Bacteria('Spirochaete', 'order', 'Many organisms within the Spirochaetes phylum cause prevalent diseases.', ['Leptospirales'], 'Spirochaetia', false)
var orderLeptospirales = new Bacteria('Leptospirales', 'order', 'It includes the genus Leptospira which contains some pathogenic species', ['Spirochaete'], 'Spirochaetia', false)


//get family ties
phylumChlamydiae.familyTies(phylumAquificae)

//find in array
function inArray(arr, prop){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === prop) {
      return true;
    }
  }
  return false;
}

//Factory
function Virus(name, group, order, description){

  var tempVirus = {};

  tempVirus.name = name || 'no name';
  tempVirus.order = order || 'no order';
  tempVirus.group = group || 'no group';
  tempVirus.description = description || 'no description';

  tempVirus.createVirus = function(){
    console.log("\n");
    console.log("New Virus has been created");
    console.log(this.name+"\n"+"group: "+this.group+"\n"+"order: "+this.order+"\n"+"description: "+this.description);
    console.log("\n");
  }

  return tempVirus;
};

var batrachovirus = Virus('Batrachovirus', 'Group I (dsDNA)', ' Herpesvirales', 'There are currently only two species in this genus, including the type species Ranid herpesvirus ');

batrachovirus.createVirus();


//Prototype
function Fungus(){
  this.type = 'fungus';
};

Fungus.prototype.group = 'eukaryotic organisms';

Fungus.prototype.newFungus = function(){
  console.log("\n");
  console.log("New Fungus has been created");
  console.log("type: "+this.type+"\n"+"group: "+this.group+"\n"+"name: "+this.name+"\n");
  console.log("\n");
}

microsporidia = new Fungus();
microsporidia.name = "microsporidia";
microsporidia.newFungus();

console.log("group in microsporidia"+" is "+("group" in microsporidia));