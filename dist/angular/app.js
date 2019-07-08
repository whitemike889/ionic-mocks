"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var of_1 = require("rxjs/observable/of");
var create_spy_1 = require("../utilities/create-spy");
var nav_controller_1 = require("./nav-controller");
var AppMock = /** @class */ (function () {
    function AppMock() {
    }
    AppMock.instance = function (navCtrl, viewObservable) {
        var instance = create_spy_1.createSpyObj('App', [
            'getActiveNav',
            'getActiveNavs',
            'getNavByIdOrName',
            'getRootNav',
            'getRootNavs',
            'getRootNavById',
            'isScrolling',
            'setTitle',
            'viewDidEnter',
            'viewDidLeave',
            'viewDidLoad',
            'viewWillEnter',
            'viewWillLeave',
            'viewWillUnload'
        ]);
        instance.getActiveNav.and.returnValue(navCtrl || nav_controller_1.NavControllerMock.instance());
        instance.getActiveNavs.and.returnValue(navCtrl || [nav_controller_1.NavControllerMock.instance()]);
        instance.getNavByIdOrName.and.returnValue(navCtrl || nav_controller_1.NavControllerMock.instance());
        instance.getRootNav.and.returnValue(navCtrl || nav_controller_1.NavControllerMock.instance());
        instance.getRootNavs.and.returnValue(navCtrl || [nav_controller_1.NavControllerMock.instance()]);
        instance.getRootNavById.and.returnValue(navCtrl || nav_controller_1.NavControllerMock.instance());
        instance.isScrolling.and.returnValue(false);
        instance.viewDidEnter.and.returnValue(viewObservable || of_1.of(undefined));
        instance.viewDidLoad.and.returnValue(viewObservable || of_1.of(undefined));
        instance.viewDidLeave.and.returnValue(viewObservable || of_1.of(undefined));
        instance.viewWillEnter.and.returnValue(viewObservable || of_1.of(undefined));
        instance.viewWillLeave.and.returnValue(viewObservable || of_1.of(undefined));
        instance.viewWillUnload.and.returnValue(viewObservable || of_1.of(undefined));
        return instance;
    };
    return AppMock;
}());
exports.AppMock = AppMock;
//# sourceMappingURL=app.js.map