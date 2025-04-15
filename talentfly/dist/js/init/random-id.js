var randomId;

randomId = function(length) {
  var chars, i, str;
  chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
  if (!length) {
    length = Math.floor(Math.random() * chars.length);
  }
  str = '';
  i = 0;
  while (i < length) {
    str += chars[Math.floor(Math.random() * chars.length)];
    i++;
  }
  return str;
};
