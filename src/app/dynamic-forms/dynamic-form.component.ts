import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseDynamicControl } from '../model';
import { DynamicControlService } from '../services/dynamicControl.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [DynamicControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() textBoxes: BaseDynamicControl<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(
    private qcs: DynamicControlService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    let listofgroups = [];
    listofgroups.push(
      this.qcs.toFormGroup(this.textBoxes as BaseDynamicControl<string>[])
    );
    listofgroups.push(
      this.qcs.toFormGroup(this.textBoxes as BaseDynamicControl<string>[])
    );

    let formArray = this.qcs.toFormArray(listofgroups);
    console.log(formArray);

    this.form = this.formBuilder.group({
      fields: formArray
    });

    console.log(this.form.value);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
