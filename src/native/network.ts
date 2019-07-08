import { of } from 'rxjs/observable/of';
import { createSpyObj } from '../utilities/create-spy';

export class NetworkMock {
    public static instance(networkType: string): any {
        let instance = createSpyObj('Network', [
            'type',
            'downlinkMax',
            'onchange',
            'onDisconnect',
            'onConnect',
        ]);
        instance.type.and.returnValue(networkType || 'wifi');
        instance.downlinkMax.and.returnValue('42');
        instance.onChange.and.returnValue(of({}));
        instance.onDisconnect.and.returnValue(of({}));
        instance.onConnect.and.returnValue(of({}));
        return instance;
    }
}
