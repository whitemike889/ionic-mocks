"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var of_1 = require("rxjs/observable/of");
var create_spy_1 = require("../utilities/create-spy");
var NFCMock = /** @class */ (function () {
    function NFCMock() {
    }
    NFCMock.instance = function () {
        var instance = create_spy_1.createSpyObj('NFC', [
            'addNdefListener',
            'addTagDiscoveredListener',
            'addMimeTypeListener',
            'addNdefFormatableListener',
            'write',
            'makeReadyOnly',
            'share',
            'unshare',
            'erase',
            'handover',
            'stopHandover',
            'showSettings',
            'enabled',
            'bytesToString',
            'stringToBytes',
            'bytesToHexString'
        ]);
        instance.addNdefListener.and.returnValue(of_1.of({}));
        instance.addTagDiscoveredListener.and.returnValue(of_1.of({}));
        instance.addMimeTypeListener.and.returnValue(of_1.of({}));
        instance.addNdefFormatableListener.and.returnValue(of_1.of({}));
        instance.write.and.returnValue(of_1.of({}));
        instance.makeReadyOnly.and.returnValue(of_1.of({}));
        instance.share.and.returnValue(of_1.of({}));
        instance.unshare.and.returnValue(of_1.of({}));
        instance.erase.and.returnValue(of_1.of({}));
        instance.handover.and.returnValue(of_1.of({}));
        instance.stopHandover.and.returnValue(of_1.of({}));
        instance.showSettings.and.returnValue(of_1.of({}));
        instance.enabled.and.returnValue(of_1.of({}));
        instance.bytesToString.and.returnValue('');
        instance.stringToBytes.and.returnValue([]);
        instance.bytesToHexString.and.returnValue('');
        return instance;
    };
    return NFCMock;
}());
exports.NFCMock = NFCMock;
//# sourceMappingURL=nfc.js.map