'use strict';

// входящие данные
var fontSize = [20, 28, 14, 12, 18, 16, 48, 12, 10, 24, 10, 58, 16, 74, 28, 70, 18, 14, 20, 16];
var lineHeight = [20, 34, 21, 14, 27, 24, 72, 18, 15, 36, 12, 87, 22, 111, 44, 109, 25, 16, 30, 19];

(function () {
  window.multiFontOption = function (arrFontSize, arrLineHeight, heading, typeDevice) {
    var headingBloks = [];
    var nameFontSizeVariable = '$' + 'font' + '_' + 'size' + '_';
    var nameLineHeightVariable = '$' + 'line' + '_' + 'height' + '_';

    // перечисление типов устройств
    var Device = {
      MOBILE: 'mobile_',
      TABLET: 'tablet_',
      DESKTOP: 'desktop_'
    }

    // перечисление уровней заголовков
    var Heading = {
      H1: 'h1_',
      H2: 'h2_',
      H3: 'h3_',
      H4: 'h4_',
      H5: 'h5_',
      H6: 'h6_',
      P: 'p_'
    }

    // var Size = {
    //   X: 'x',
    //   L: 'l',
    //   S: 's'
    // }

    var Syntax = {
      PX: 'px',
      COLON: ': ',
      SEMICOLON: ';'
    }

    // проверяет одинаковой ли длины массывы
    if (arrFontSize.length === arrLineHeight.length) {

      // создаёт новый массив, преобразует значения l-h в множители и каждое значение округляет до второго знака после запятой
      var arrLineHeightRate = arrLineHeight.map(function (item, index) {
        var value = item / arrFontSize[index];
        return parseFloat(value.toFixed(2));
      });
    } else {
      return alert('Массивы не одинаковой длины');
    }

    // фильтрует (убирает дубли)
    function filterArrOnDouble(arr) {
      let currentArr = arr.filter((elem, index) => arr.indexOf(elem) === index);
      return currentArr;
    }

    var arrFontSizeFilter = filterArrOnDouble(arrFontSize);
    var arrLineHeightRateFilter = filterArrOnDouble(arrLineHeightRate);

    // находит среднеарифметическое в массива, добавляет его в массив и сортирует (от большего к меньшему)
    function createArrWithAverage(arr) {
      let sum = arr.reduce((a, b) => a + b, 0);
      let average = parseFloat((sum / arr.length).toFixed(2));
      arr.push(average);
      arr.sort((a, b) => b - a);
      return arr;
    }

    var arrFontSizeAverage = createArrWithAverage(arrFontSizeFilter);
    var arrLineHeightAverage = createArrWithAverage(arrLineHeightRateFilter);
    // console.log(arrFontSizeAverage);
    // console.log(arrLineHeightAverage);

    class Name {
      constructor(el) {
        this.el = el;
      }
      nameSizeFont() {
        return nameFontSizeVariable + Heading.P + Device.MOBILE + Syntax.COLON + this.el + Syntax.PX + Syntax.SEMICOLON;
      }

      nameLineHeight() {
        return nameLineHeightVariable + Heading.P + Device.MOBILE + Syntax.COLON + this.el + Syntax.SEMICOLON;
      }
    }

    // наполнене массива headingBloks
    function createHedingBlock(arr) {
      if (arrFontSize) {
        arr.forEach((item) => {
          let nameVar = new Name(item).nameSizeFont();
          headingBloks.push(nameVar);
        })
      }

      if (arrLineHeight) {
        arr.forEach((item) => {
          let nameVar = new Name(item).nameLineHeight();
          headingBloks.push(nameVar);
        })
      }

      return arr;
    }

    createHedingBlock(arrFontSizeAverage);
    createHedingBlock(arrLineHeightAverage);
    console.log(headingBloks);
  };
})();

var p = 'p';
var mobile = 'mobile';
window.multiFontOption(fontSize, lineHeight, p, mobile);
