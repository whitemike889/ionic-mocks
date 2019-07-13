import { createSpyObj } from '../utilities/create-spy';
import { ActionSheetMock } from './action-sheet';

export class ActionSheetControllerMock {
    public static instance(actionSheet?: ActionSheetMock): any {

        let instance = createSpyObj('ActionSheetController', ['create', 'present']);
        instance.create.and.returnValue(actionSheet || ActionSheetMock.instance());
        instance.present.and.returnValue(Promise.resolve());

        return instance;
    }
}
