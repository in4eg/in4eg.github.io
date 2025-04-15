var Graph, LightenDarkenColor, graphInit;

Graph = function(selector, data) {
  var arc, color, getBoundingBoxCenter, getData, height, key, outerArc, pie, radius, setData, slice, svg, tooltip, width;
  if ($(selector).parents('.tabs-content > .content:not(.active)').length > 0) {
    $(selector).parents('.tabs-content > .content:not(.active)').attr('data-temp-class', 'true').addClass('active');
  }
  svg = d3.select(selector).append('svg').attr("viewBox", "0 0 " + ($(selector).outerWidth()) + " " + ($(selector).outerHeight() + 12)).classed("svg-content", true).append('g');
  $(selector).append($("<div class=\"graph-tooltip\"> <span class=\"label\"></span> <span class=\"sub-text\"></span> <span class=\"text\"></span> <span class=\"caption\"></span> <div>"));
  tooltip = $(selector).find('.graph-tooltip');
  getData = function() {
    var names;
    names = color.domain();
    return names.map(function(name, index) {
      return {
        index: name,
        label: data.labels[index] || '',
        value: data.values[index] || 1,
        caption: data.captions[index] || '',
        text: data.text[index] || '',
        subText: data.subText[index] || '',
        suffix: data.suffix[index] || ''
      };
    });
  };
  slice = null;
  setData = function(data) {
    var coef, midAngle, polyline, text;
    coef = $(window).width() > 480 ? 1.3 : 1;

    /* ------- PIE SLICES ------- */
    slice = svg.select('.slices').selectAll('path.slice').data(pie(data), key);
    midAngle = function(d) {
      return d.startAngle + (d.endAngle - d.startAngle) / 2;
    };
    slice.enter().insert('path').style('fill', function(d) {
      return color(d.data.index);
    }).attr('class', 'slice activateTooltip');
    slice.transition().duration(1000).attrTween('d', function(d) {
      var interpolate;
      this._current = this._current || d;
      interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        return arc(interpolate(t));
      };
    });
    slice.exit().remove();

    /* ------- TEXT LABELS ------- */
    text = svg.select('.labels').selectAll('text').data(pie(data), key);
    text.enter().append('text').attr('dy', '.35em').attr('class', function(d, index) {
      if ($(text).parents('.graph').attr('id') === 'chart1') {
        return 'activateTooltip label' + index + 'tech';
      } else {
        return 'activateTooltip popupLabel label' + index + 'exp';
      }
    }).text(function(d) {
      if ($(document).width() < 1600 && $(document).width() > 1270) {
        if (d.data.label.length > 12) {
          return d.data.label.slice(0, 12) + '. . .';
        }
      }
      if ($(document).width() <= 1270 && $(document).width() > 995) {
        if (d.data.label.length > 10) {
          return d.data.label.slice(0, 10) + '. . .';
        }
      }
      if (d.data.label.length > 16) {
        return d.data.label.slice(0, 16) + '. . .';
      }
      return d.data.label;
    }).append('tspan').attr("fill", "#8A98AD").text(function(d) {
      return " " + d.data.subText;
    });
    text.transition().duration(1000).attrTween('transform', function(d) {
      var interpolate;
      this._current = this._current || d;
      interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        var d2, pos;
        d2 = interpolate(t);
        pos = outerArc.centroid(d2);
        pos[0] = radius * (midAngle(d2) < Math.PI ? coef : -coef);
        return 'translate(' + pos + ')';
      };
    }).styleTween('text-anchor', function(d) {
      var interpolate;
      this._current = this._current || d;
      interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        var d2;
        d2 = interpolate(t);
        if (midAngle(d2) < Math.PI) {
          return 'start';
        } else {
          return 'end';
        }
      };
    });
    text.exit().remove();

    /* ------- SLICE TO TEXT POLYLINES ------- */
    polyline = svg.select('.lines').selectAll('polyline').data(pie(data), key);
    polyline.enter().append('polyline');
    polyline.transition().duration(1000).attrTween('points', function(d) {
      var interpolate;
      this._current = this._current || d;
      interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        var a, d2, pos;
        d2 = interpolate(t);
        a = arc.centroid(d2);
        pos = outerArc.centroid(d2);
        pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? coef : -coef);
        a[0] *= 1.1;
        a[1] *= 1.1;
        return [a, outerArc.centroid(d2), pos];
      };
    });
    polyline.exit().remove();
  };
  svg.append('g').attr('class', 'slices');
  svg.append('g').attr('class', 'labels');
  svg.append('g').attr('class', 'lines');
  width = $(selector).outerWidth();
  height = $(selector).outerHeight();
  radius = Math.min(width, height) / 2;
  pie = d3.layout.pie().sort(null).value(function(d) {
    return d.value;
  });
  arc = d3.svg.arc().outerRadius(radius * (data.outerRadius || 0.9)).innerRadius(radius * (data.innerRadius || 0.75));
  outerArc = d3.svg.arc().innerRadius(radius * 0.95).outerRadius(radius * 1);
  svg.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
  key = function(d) {
    return d.data.index;
  };
  getBoundingBoxCenter = function(element) {
    var bbox;
    bbox = element.getBBox();
    return {
      x: bbox.x + bbox.width / 2,
      y: bbox.y + bbox.height / 2
    };
  };
  color = d3.scale.ordinal().domain(data.names).range(data.colors);
  setData(getData());
  $(selector).parents('[data-temp-class]').removeClass('active');
  return svg.selectAll('.activateTooltip').on("mouseover", function(d, index) {
    var centroid, currentTransform, labelToFind, myLabel, parsedArray, positionX, positionY, relatedBlock, svgCenter, transX, transY;
    svgCenter = {
      x: $(selector)[0].getBoundingClientRect().width / 2,
      y: $(selector)[0].getBoundingClientRect().height / 2
    };
    centroid = getBoundingBoxCenter(this);
    centroid.x += svgCenter.x;
    centroid.y += svgCenter.y;
    relatedBlock = $(this).parents('.graph').attr('id');
    currentTransform = d3.select(this).attr('transform');
    if (currentTransform === null) {
      labelToFind = void 0;
      if (relatedBlock === 'chart1') {
        labelToFind = '.label' + index + 'tech';
      } else if (relatedBlock === 'chart3') {
        labelToFind = '.label' + index + 'exp';
      }
      myLabel = d3.selectAll('svg').select('g').select('.labels').select(labelToFind);
      currentTransform = myLabel.attr('transform');
    }
    parsedArray = currentTransform.replace(/(transform|translate|scale|rotate|\(|\))/gim, '').split(/(\s| |,)/gim);
    positionX = parseInt(parsedArray[0]);
    positionX = Math.floor(positionX);
    positionY = parseInt(parsedArray[2]);
    positionY = Math.floor(positionY);
    if (positionX > 0) {
      if ($(document).width() <= 1500 && $(document).width() > 1400) {
        transX = positionX - 50 + 'px';
      }
      if ($(document).width() <= 1400 && $(document).width() > 1300) {
        transX = positionX - 80 + 'px';
      }
      if ($(document).width() <= 1300 && $(document).width() > 1000) {
        transX = positionX - 90 + 'px';
      }
      if ($(document).width() <= 1000 || $(document).width() > 1500) {
        transX = positionX - 40 + 'px';
      }
    } else {
      if ($(document).width() <= 1400 && $(document).width() > 1300) {
        transX = positionX - 130 + 'px';
      }
      if ($(document).width() <= 1300 && $(document).width() > 1000) {
        transX = positionX - 120 + 'px';
      }
      if ($(document).width() <= 1000 || $(document).width() > 1400) {
        transX = positionX - 180 + 'px';
      }
    }
    transY = positionY - 20 + 'px';
    tooltip.find('.label').html(d.data.label);
    tooltip.find('.caption').html(d.data.caption);
    tooltip.find('.text').html(d.data.text);
    tooltip.find('.sub-text').html(d.data.subText);
    tooltip.attr('style', "left: " + svgCenter.x + "px; top: " + svgCenter.y + "px; transform: translate(" + transX + "," + transY + "); -webkit-transform: translate(" + transX + "," + transY + "); -moz-transform: translate(" + transX + "," + transY + "); -ms-transform: translate(" + transX + "," + transY + "); -o-transform: translate(" + transX + "," + transY + ");");
    tooltip.addClass('active');
  }).on("mouseout", function(d) {
    return tooltip.removeClass('active');
  });
};


/*
	color
 */

LightenDarkenColor = function(col, amt) {
  var b, g, num, r, usePound;
  usePound = false;
  if (col) {
    if (col[0] === '#') {
      col = col.slice(1);
      usePound = true;
    }
    num = parseInt(col, 16);
    r = (num >> 16) + amt;
    if (r > 255) {
      r = 255;
    } else if (r < 0) {
      r = 0;
    }
    b = (num >> 8 & 0x00FF) + amt;
    if (b > 255) {
      b = 255;
    } else if (b < 0) {
      b = 0;
    }
    g = (num & 0x0000FF) + amt;
    if (g > 255) {
      g = 255;
    } else if (g < 0) {
      g = 0;
    }
    return (usePound ? '#' : '') + (g | b << 8 | r << 16).toString(16);
  }
};


/*
	init
 */

graphInit = function(block) {
  $(block).each(function(i, elem) {
    var captionsArr, chartCaptions, chartLabels, chartSubText, chartSuffix, chartText, chartValues, coefficient, colorGen, indexArr, item, labelsArr, startColor, subTextArr, textArr, valuesArr;
    chartLabels = $(this).data('labels') ? $(this).data('labels') : 'Other Skill';
    labelsArr = chartLabels.split('Fo9NBddG54DwuTrcvSah');
    indexArr = [];
    labelsArr.forEach(function(el, i) {
      indexArr.push(i);
    });
    if ($(this).data('values') === '') {
      chartValues = '1';
    } else {
      chartValues = $(this).data('values');
    }
    if ($(this).data('captions') === void 0 || $(this).data('captions') === '') {
      chartCaptions = '';
    } else {
      chartCaptions = $(this).data('captions');
    }
    captionsArr = chartCaptions.split(',');
    valuesArr = chartValues.toString().split(',').map(Number);
    if ($(this).data('text') === void 0 || $(this).data('text') === '') {
      chartText = '';
    } else {
      chartText = $(this).data('text');
    }
    textArr = chartText.toString().split('Fo9NBddG54DwuTrcvSah');
    if ($(this).data('suffix') === void 0 || $(this).data('suffix') === '') {
      chartSuffix = '1 year';
    } else {
      chartSuffix = $(this).data('suffix');
    }
    chartSuffix = chartSuffix.toString().split(',');
    if ($(this).data('subtext') === void 0 || $(this).data('subtext') === '') {
      chartSubText = 'Other';
    } else {
      chartSubText = $(this).data('subtext');
    }
    subTextArr = chartSubText.toString().split(',');
    if ($(elem).data('color') === void 0 || $(elem).data('color') === '') {
      startColor = LightenDarkenColor('#1c4e9b', 0);
    } else {
      startColor = LightenDarkenColor($(elem).data('color'), 0);
    }
    colorGen = [];
    colorGen.push(startColor);
    for (item in valuesArr) {
      coefficient = 15;
      if (colorGen[parseInt(item)] === '#ffffff') {
        colorGen[parseInt(item)] = startColor;
      }
      colorGen.push(LightenDarkenColor(colorGen[parseInt(item)], coefficient));
    }
    return new Graph(this, {
      labels: labelsArr,
      names: indexArr,
      captions: captionsArr,
      text: textArr,
      subText: subTextArr,
      suffix: chartSuffix,
      colors: colorGen,
      values: valuesArr,
      innerRadius: .67,
      outerRadius: .8
    });
  });
};

graphInit('.graph');
