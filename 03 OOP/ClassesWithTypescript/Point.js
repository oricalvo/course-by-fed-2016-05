var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var PointEx = (function (_super) {
    __extends(PointEx, _super);
    function PointEx(x, y, z) {
        _super.call(this, x, y);
        this.z = z;
    }
    PointEx.prototype.dump = function () {
        console.log(this.x + ", " + this.y + ", " + this.z);
    };
    return PointEx;
}(Point));
//# sourceMappingURL=Point.js.map