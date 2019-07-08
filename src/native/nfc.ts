import { of } from 'rxjs/observable/of';
import { createSpyObj } from '../utilities/create-spy';

export class NFCMock {
    public static instance(): any {
        let instance = createSpyObj('NFC', [
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
        instance.addNdefListener.and.returnValue(of({}));
        instance.addTagDiscoveredListener.and.returnValue(of({}));
        instance.addMimeTypeListener.and.returnValue(of({}));
        instance.addNdefFormatableListener.and.returnValue(of({}));
        instance.write.and.returnValue(of({}));
        instance.makeReadyOnly.and.returnValue(of({}));
        instance.share.and.returnValue(of({}));
        instance.unshare.and.returnValue(of({}));
        instance.erase.and.returnValue(of({}));
        instance.handover.and.returnValue(of({}));
        instance.stopHandover.and.returnValue(of({}));
        instance.showSettings.and.returnValue(of({}));
        instance.enabled.and.returnValue(of({}));
        instance.bytesToString.and.returnValue('');
        instance.stringToBytes.and.returnValue([]);
        instance.bytesToHexString.and.returnValue('');

        return instance;
    }
}
