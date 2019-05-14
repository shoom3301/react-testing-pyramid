import { ShallowWrapper } from 'enzyme';
import { UIButton } from '../../ui-elements/button';
import { Box } from '../../components/pure/quoteCreateForm/qutesCreateForm.elements';

export class QuoteCreateFormPo {
    readonly validAuthor = 'Jhon';
    readonly validText = 'Simona';

    constructor(public wrapper: ShallowWrapper) {}

    getErrorBoxes(): ShallowWrapper {
        return this.wrapper.find(Box).find({error: true});
    }

    getAuthorInput(): ShallowWrapper<any> {
        return this.wrapper.find('[name="author"]').first();
    }

    changeAuthor(author: string) {
        this.getAuthorInput().simulate('change', {target: {value: author}});
    }

    getTextInput(): ShallowWrapper<any> {
        return this.wrapper.find('[name="text"]').first();
    }

    changeText(author: string) {
        this.getTextInput().simulate('change', {target: {value: author}});
    }

    getSubmitButton(): ShallowWrapper {
        return this.wrapper.find(UIButton).first();
    }

    submitForm() {
        this.getSubmitButton().simulate('click');
    }

    fillAndSubmitForm() {
        this.changeAuthor(this.validAuthor);
        this.changeText(this.validText);
        this.submitForm();
    }
}