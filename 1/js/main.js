var car = Object.create(Object.prototype);

Object.defineProperty(car, 'name', {
  value: 'bmw',
  writable: true,
  configurable: true,
  enumerable: true
});

Object.defineProperty(car, 'color', {
  value: 'blue',
  writable: true,
  configurable: true,
  enumerable: true
});

Object.defineProperty(car, 'engine', {
  value: 'V-8 Engine',
  writable: false,
  configurable: true,
  enumerable: true
});

Object.defineProperty(car, 'isColorChangable', {
  value: true,
  writable: true,
  configurable: true,
  enumerable: true
});


// set Value from object
function render(object, name, color, engine, option) {
  name.innerHTML = object.name;
  color.innerHTML = object.color;
  engine.innerHTML = object.engine;
  option.innerHTML = object.isColorChangable;

  // console.log(car);

}


nameResult = document.getElementById('nameResult');
colorResult = document.getElementById('colorResult');
engineResult = document.getElementById('engineResult');
optionResult = document.getElementById('optionResult');

title = document.getElementById('title');


render(car, nameResult, colorResult, engineResult, optionResult);

// name
var inputName = document.getElementById('name');

inputName.oninput = function() {
  car.name = inputName.value;
  render(car, nameResult, colorResult, engineResult, optionResult);
};

// color
var radioColor = document.getElementsByName('color');

for(var i = 0; i < radioColor.length; i++){
  radioColor[i].onclick = function(){
   car.color = this.value;
   render(car, nameResult, colorResult, engineResult, optionResult);
 }
}

// engine
var selectEngine = document.getElementById('engine');

selectEngine.onchange = function() {
  selectValue = this[this.selectedIndex].value;
  car.engine = selectValue;
  console.log(car.engine + ' ' + 'You can"t change it');
  document.getElementById('engineResult').classList.add('warning');
  render(car, nameResult, colorResult, engineResult, optionResult);
};

// options
var checkboxOption = document.getElementById('option');


checkboxOption.onchange = function() {
  colorBlock = document.getElementById('color');

  if (checkboxOption.checked) {
    colorBlock.classList.add('hidden');
    car.isColorChangable = false;

    for(var i = 0; i < radioColor.length; i++){
      radioColor[i].setAttribute("disabled", "true");
    }
    render(car, nameResult, colorResult, engineResult, optionResult);
    
  } else {
    colorBlock.classList.remove('hidden');
    car.isColorChangable = true;

    for(var i = 0; i < radioColor.length; i++){
      radioColor[i].removeAttribute("disabled", "true");
    }
    render(car, nameResult, colorResult, engineResult, optionResult);
    
  }
};

