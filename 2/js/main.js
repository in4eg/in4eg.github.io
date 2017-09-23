function Bacteria(name, type,  caption, siblings, parent, isPrimary) {
  this.name = name || 'no name';
  this.type = type || 'no type';
  this.caption = caption || 'no caption';
  this.siblings = siblings || [];
  this.parent = parent || 'no parent';
  this.isPrimary = isPrimary || false;


  this.result = (function (name, type) {
    // console.log(name)

    var createName = document.createElement('div');
    createName.innerHTML = name;

    document.getElementById('result').appendChild(createName);

    var createType = document.createElement('div');
    createType.innerHTML = type;

    document.getElementById('result').appendChild(createType);

  }(this.name, this.type));

}
// kingdom
var kingdomBacteria = new Bacteria('Bacteria', 'kingdom', 'large domain of prokaryotic microorganisms', ['Viruses', 'Mushrooms', 'Plants', 'Animals'], 'Nature', true)

// phylum
var phylumAquificae = new Bacteria('Aquificae', 'phylum', 'Diverse collection of bacteria that live in harsh environmental settings', ['Chlamydiae', 'Proteobacteria', 'Spirochaetes'], 'Bacteria', false)
var phylumChlamydiae = new Bacteria('Chlamydiae', 'phylum', 'Its members are a group of obligate intracellular bacteria', ['Aquificae', 'Proteobacteria', 'Spirochaetes'], 'Bacteria', false)
var phylumSpirochaetes = new Bacteria('Spirochaetes', 'phylum', 'Contains distinctive diderm bacteria, most of which have long, helically coiled cells', ['Aquificae', 'Proteobacteria', 'Chlamydiae'], 'Bacteria', true)

// class
var classSpirochaetia = new Bacteria('Spirochaetia', 'class', 'The class currently consists of 14 validly named genera across 4 orders and 5 families', [], 'Spirochaetes', true)

// order
var orderSpirochaete = new Bacteria('Spirochaete', 'order', 'Many organisms within the Spirochaetes phylum cause prevalent diseases.', [], 'Spirochaetia', false)
var orderLeptospirales = new Bacteria('Leptospirales', 'order', 'It includes the genus Leptospira which contains some pathogenic species', [], 'Spirochaetia', false)


