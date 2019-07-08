import { of } from 'rxjs/observable/of';
import { createSpyObj } from '../utilities/create-spy';

export class KeyboardMock {
    public static instance(): any {
        let instance = createSpyObj('Keyboard', [
            'hideKeyboardAccessoryBar',
            'show',
            'close',
            'disableScroll',
            'onKeyboardShow',
            'onKeyboardHide'
        ]);

        instance.onKeyboardShow.and.returnValue(of({}));
        instance.onKeyboardHide.and.returnValue(of({}));

        return instance;
    }
}
