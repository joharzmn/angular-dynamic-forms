import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { of } from 'rxjs';
import { BaseDynamicControl, TextboxDynamicControl } from '../model';

@Injectable()
export class DynamicControlService {
  constructor(private formBuilder: FormBuilder) {}

  toFormGroup(controls: BaseDynamicControl<string>[]) {
    const group: any = {};

    controls.forEach(question => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  toFormArray(formGroups: FormGroup[]) {
    return this.formBuilder.array(formGroups);
  }

  getTextBoxes() {
    const controls: BaseDynamicControl<string>[] = [
      new TextboxDynamicControl({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxDynamicControl({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(controls.sort((a, b) => a.order - b.order));
  }
}
