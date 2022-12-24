import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService, Category } from '@oneshop-web/categories';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';

@Component({
  selector: 'oneshop-web-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;

  // FormBuilder makes FormGroup thas has Formcontrol(for inputs)
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      color: ['#ffffff', Validators.required],
    });
  }

  onSumbit() {
    this.isSubmitted = true;

    if (this.form.invalid) return;

    const category: Category = {
      name: this.form.controls.name.value,
      color: this.form.controls.color.value,
    };

    this.categoriesService.createCategory(category).subscribe({
      complete: () => {
        // show sucess toast notification
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'New Category Added',
        });

        // Redirect back to list of categories
        timer(2000).subscribe(() => {
          this.location.back();
        });
      },
      error: () => {
        // show err toast notification
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong, please try again later',
        });
      },
    });
  }
}
