import { createSpyObj } from '../utilities/create-spy';

export class IonKeyboardMock {
    public static instance(): any {
        let instance = createSpyObj('Keyboard', [
            'close',
            'didHide',
            'didShow',
            'eventsAvailable',
            'hasFocusedTextInput',
            'isOpen',
            'onClose',
            'willHide',
            'willShow'
        ]);

        instance.isOpen.and.returnValue(false);

        return instance;
    }
}
