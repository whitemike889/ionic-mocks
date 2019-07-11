import { createSpyObj } from '../utilities/create-spy';
import { ModalMock } from './modal';

export class ModalControllerMock {
    public static instance(modalMock?: ModalMock): any {
        let instance = createSpyObj('ModalController', [
            'create',
            'present',
            'dismiss',
        ]);
        instance.create.and.returnValue(modalMock || ModalMock.instance());
        instance.present.and.returnValue(modalMock || ModalMock.instance());
        instance.dismiss.and.returnValue(Promise.resolve());

        return instance;
    }
}
