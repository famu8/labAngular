import { Component, Input } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';


 type ValidatorsId = "required" | "pattern";
  interface FieldError {
  [key: string]: string;
 }

 const fieldErrors = {
  required: "Field is required",
  pattern: "Format not valid",
 }

 interface CustomErrorEntry {
  id : ValidatorsId;
  text : string;
 }

@Component({
  selector: 'app-field-error-display',
  templateUrl: './field-error-display.component.html',
  styleUrls: ['./field-error-display.component.css']
})
export class FieldErrorDisplayComponent {
  @Input() fieldNgModel: AbstractControlDirective | null;
  @Input() customFieldErrors?: CustomErrorEntry[]| null = null;
  fieldErrorObject : FieldError;

  constructor() {
  this.fieldNgModel = null;
  this.fieldErrorObject = {
    required: "Field is required",
    pattern: "Format not valid",
  }
  }

  ngOnInit(): void {
     if (this.customFieldErrors) {
      this.customFieldErrors.map(customError =>
      this.fieldErrorObject[customError.id] = customError.text)
      }
  }

  getErrorMessage = (errodId: string) => {
    return this.fieldErrorObject[errodId];
  }
}
