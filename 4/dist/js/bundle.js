var textChange;

textChange = function(text) {
  var attributes, attributesValues, count, end, i, n, newEntry, tab, tags;
  tags = text.match(/<((.*?)(?=\s))/gim);
  attributesValues = text.match(/[^>]("(.*?)")/gim);
  tab = text.match(/\t/gim);
  end = text.match(/\n/gim);
  attributes = text.match(/([a-z\-]+?(?=\=))/gi);
  n = 0;
  while (n < attributes.length) {
    text = text.replace(attributes[n], '<span>' + n + '</span>');
    n++;
  }
  count = text.match(/>\d*</gim);
  count.map(function(entry, index) {
    console.log;
    return text = text.replace(entry, ' class="attr-color">' + attributes[index] + '<');
  });
  tags.map(function(entry, index) {
    var newEntry;
    newEntry = entry.replace(/\>/gim, '<span class="text-color">&gt;</span>');
    newEntry = newEntry.slice(1);
    if (newEntry[0] === '/') {
      newEntry = newEntry.replace(/[^<]\/|^\//gim, '<span class="text-color">/</span>');
    }
    return text = text.replace(entry, '<span class="tag-color"><span class="text-color">&lt;</span>' + newEntry + '</span>');
  });
  i = 0;
  while (i < attributesValues.length) {
    newEntry = attributesValues[i].slice(1, attributesValues[i].length - 1);
    text = text.replace(attributesValues[i], '<span class="attr-value"><span class="text-color">=</span>' + newEntry + '"</span>');
    i++;
  }
  end.map(function(entry, index) {
    return text = text.replace(entry, '<span class="gray">↵</span>' + '<br>');
  });
  tab.map(function(entry, index) {
    return text = text.replace(entry, '<span class="gray">-</span>');
  });
  document.getElementById('pre').innerHTML = text;
};

textChange(document.getElementById('pre').innerHTML);
