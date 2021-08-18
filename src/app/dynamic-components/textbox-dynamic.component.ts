import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseDynamicControl } from '../model';

@Component({
  selector: 'app-dynamic-textbox',
  templateUrl: './textbox-dynamic.component.html'
})
export class DynamicTextBoxComponent {
  @Input() textbox!: BaseDynamicControl<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.textbox.key].valid;
  }
}
