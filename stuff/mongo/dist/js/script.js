
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var input = document.createElement("input");
  var btn = document.createElement("button");
  var edit = document.createElement("button");

  edit.className = "waves-effect waves-circle btn-floating edit-list";
  btn.className = "waves-effect waves-circle btn-floating red close";
  edit.innerHTML = "<i class='material-icons'>done</i>";
  btn.innerHTML = "<i class='material-icons'>delete_forever</i>";

  myNodelist[i].appendChild(btn);
  myNodelist[i].appendChild(edit);
  myNodelist[i].appendChild(input);

}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
  }
}
//создание элементов листа
function newElement() {
  totalList();

  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  var button = document.createElement("button");
  var editBtn = document.createElement("button");
  var innerInput = document.createElement("input");
  innerInput.type = "text";

  innerInput.value = inputValue;

  if (inputValue === '') {
    alert("Add smth!");
  } else {
    document.getElementById("myList").appendChild(li).classList.add("collection-item");
  }
  document.getElementById("myInput").value = "";
  
  editBtn.className = "waves-effect waves-circle btn-floating edit-list";
  button.className = "waves-effect waves-circle btn-floating red close";
  button.innerHTML = "<i class='material-icons'>delete_forever</i>";
  editBtn.innerHTML = "<i class='material-icons'>done</i>";

  li.appendChild(button);
  li.appendChild(editBtn);
  li.appendChild(innerInput);

  myNodelist[i].appendChild(button);
  myNodelist[i].appendChild(editBtn);
  myNodelist[i].appendChild(innerInput);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
  }

}
// изменить заголовок листа
function modifyText() {
  var title = document.getElementsByClassName("title")[0];
  var edit = document.getElementsByClassName("edit-title")[0];

  if (title.hasAttribute('disabled')) {
    title.removeAttribute("disabled");
    title.classList.add("title-edit");
    title.focus();
    edit.classList.remove("red");
    edit.innerHTML = "<i class='material-icons'>done</i>";
  } else {
   title.setAttribute("disabled", '');
   title.classList.remove("title-edit");
   edit.innerHTML = "<i class='large material-icons'>mode_edit</i>";
   edit.classList.add("red");
 }
}
var edit = document.getElementsByClassName("edit-title")[0];
edit.addEventListener("click", modifyText, false);

// посчитать общее кол-во задач
function totalList(total) {
  var total = document.getElementById('myList').children.length;
  total++;
  document.getElementById('total').innerHTML = total;
}
// save

function saveList() {
  $.ajax({
    url: '/',
    method: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json; charset=utf-8',
    success: function (result) {
      //result
    }
  })
};
function loadList() {

  $.post('/',function (result) {
    console.log('befor data',data);
    console.log('load data',result);
    $.each(data, function (index, params) {
      removeElement(params);
    });
    data = result[0];
    $.each(data, function (index, params) {
      generateElement(params);
    });
  })
};