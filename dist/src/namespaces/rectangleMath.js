"use strict";
var MyMath;
(function (MyMath) {
    MyMath.calculateRec = function (width, length) {
        return width * length;
    };
})(MyMath || (MyMath = {}));
