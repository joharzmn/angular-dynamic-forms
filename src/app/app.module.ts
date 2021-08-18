import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicTextBoxComponent } from './dynamic-components/textbox-dynamic.component';
import { DynamicControlService } from './services/dynamicControl.service';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DynamicTextBoxComponent,
    DynamicFormComponent
  ],
  providers: [DynamicControlService],
  bootstrap: [AppComponent]
})
export class AppModule {}
