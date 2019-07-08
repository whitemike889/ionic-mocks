"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var of_1 = require("rxjs/observable/of");
var create_spy_1 = require("../utilities/create-spy");
var KeyboardMock = /** @class */ (function () {
    function KeyboardMock() {
    }
    KeyboardMock.instance = function () {
        var instance = create_spy_1.createSpyObj('Keyboard', [
            'hideKeyboardAccessoryBar',
            'show',
            'close',
            'disableScroll',
            'onKeyboardShow',
            'onKeyboardHide'
        ]);
        instance.onKeyboardShow.and.returnValue(of_1.of({}));
        instance.onKeyboardHide.and.returnValue(of_1.of({}));
        return instance;
    };
    return KeyboardMock;
}());
exports.KeyboardMock = KeyboardMock;
//# sourceMappingURL=keyboard.js.map