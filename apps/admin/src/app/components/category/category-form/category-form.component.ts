import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'oneshop-web-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      color: ['#ffffff', Validators.required],
    });
  }

  onSumbit() {
    this.isSubmitted = true;

    if (this.form.invalid) return;

    console.log(this.form.controls.name.value);
    console.log(this.form.controls.color.value);
  }
}
