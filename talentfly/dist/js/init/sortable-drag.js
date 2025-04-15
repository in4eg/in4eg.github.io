(function() {
  var byId, console, loadScripts;
  byId = function(id) {
    return document.getElementById(id);
  };
  loadScripts = function(desc, callback) {
    var deps, idx, key;
    deps = [];
    key = void 0;
    idx = 0;
    for (key in desc) {
      key = key;
      deps.push(key);
    }
    (function() {
      var name, pid, script;
      pid = void 0;
      name = deps[idx];
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = desc[deps[idx]];
      pid = setInterval((function() {
        if (window[name]) {
          clearTimeout(pid);
          deps[idx++] = window[name];
          if (deps[idx]) {
            _next();
          } else {
            callback.apply(null, deps);
          }
        }
      }), 30);
      document.getElementsByTagName('head')[0].appendChild(script);
    })();
  };
  console = window.console;
  if (!console.log) {
    console.log = function() {
      alert([].join.apply(arguments, ' '));
    };
  }
  if (window.innerWidth > 640) {
    Sortable.create(byId('sortableTable'), {
      group: 'words',
      animation: 150,
      filter: "textarea, input, select, button",
      preventOnFilter: false,
      dataIdAttr: 'data-block',
      store: {
        get: function(sortable) {
          var order;
          order = localStorage.getItem(sortable.options.group);
          if (order) {
            return order.split('|');
          } else {
            return [];
          }
        },
        set: function(sortable) {
          var order;
          order = sortable.toArray();
          localStorage.setItem(sortable.options.group, order.join('|'));
        }
      },
      onEnd: function(evt) {
        var id, index, url;
        index = $(evt.item).index();
        id = $(evt.item).find('.title-input').data('push');
        url = $(evt.from).data('url');
      }
    });
    Sortable.create(byId('interestsBody'), {
      group: 'words',
      animation: 150,
      filter: "textarea, input, select, button",
      preventOnFilter: false,
      dataIdAttr: 'data-block',
      store: {
        get: function(sortable) {
          var order;
          order = localStorage.getItem(sortable.options.group);
          if (order) {
            return order.split('|');
          } else {
            return [];
          }
        },
        set: function(sortable) {
          var order;
          order = sortable.toArray();
          localStorage.setItem(sortable.options.group, order.join('|'));
        }
      },
      onEnd: function(evt) {
        var id, index, url;
        index = $(evt.item).index();
        id = $(evt.item).find('.input-simple').data('push');
        url = $(evt.from).data('url');
      }
    });
    return Sortable.create(byId('langBody'), {
      group: 'words',
      animation: 150,
      filter: "textarea, input, select, button",
      preventOnFilter: false,
      dataIdAttr: 'data-block',
      store: {
        get: function(sortable) {
          var order;
          order = localStorage.getItem(sortable.options.group);
          if (order) {
            return order.split('|');
          } else {
            return [];
          }
        },
        set: function(sortable) {
          var order;
          order = sortable.toArray();
          localStorage.setItem(sortable.options.group, order.join('|'));
        }
      },
      onEnd: function(evt) {
        var id, index, url;
        index = $(evt.item).index();
        id = $(evt.item).find('.input-simple').data('push');
        url = $(evt.from).data('url');
      }
    });
  }
})();
