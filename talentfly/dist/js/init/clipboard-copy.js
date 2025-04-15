var buttons, i;

buttons = document.querySelectorAll('#copyButton');

i = 0;

while (i < buttons.length) {
  console.log(new Clipboard(buttons[i]));
  new Clipboard(buttons[i]);
  i++;
}
