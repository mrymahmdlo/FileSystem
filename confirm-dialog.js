import {DialogBase} from './dialog-base.js';

export class ConfirmDialog extends DialogBase {
	#description;
	
	constructor(description, title = 'تایید') {
		super(title || 'تایید', {cancelLabel: 'انصراف', submitLabel: 'تایید'});
		
		this.#description = description;
	}
	
	show() {
		super.show(`<p>${this.#description}</p>`);
	}
}

