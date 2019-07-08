"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var of_1 = require("rxjs/observable/of");
var create_spy_1 = require("../utilities/create-spy");
var NetworkMock = /** @class */ (function () {
    function NetworkMock() {
    }
    NetworkMock.instance = function (networkType) {
        var instance = create_spy_1.createSpyObj('Network', [
            'type',
            'downlinkMax',
            'onchange',
            'onDisconnect',
            'onConnect',
        ]);
        instance.type.and.returnValue(networkType || 'wifi');
        instance.downlinkMax.and.returnValue('42');
        instance.onChange.and.returnValue(of_1.of({}));
        instance.onDisconnect.and.returnValue(of_1.of({}));
        instance.onConnect.and.returnValue(of_1.of({}));
        return instance;
    };
    return NetworkMock;
}());
exports.NetworkMock = NetworkMock;
//# sourceMappingURL=network.js.map