import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CategoriesService, Category } from '@oneshop-web/categories';
import { MessageService } from 'primeng/api';
import { filter, flatMap, map, timer } from 'rxjs';

@Component({
  selector: 'oneshop-web-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  editMode = false;
  id: string;
  categories: Category[];

  // FormBuilder makes FormGroup thas has Formcontrol(for inputs)
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      richDescription: ['', Validators.required],
      image: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      isFeatured: ['', Validators.required],
    });

    this._checkEditMode();

    this._getCategories();
  }

  private _checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.editMode = true;
        this.id = params.id;

        // Populate the form fields
        this.categoriesService.getCategory(params.id).subscribe((category) => {
          this.form.controls.name.setValue(category.name);
          this.form.controls.color.setValue(category.color);
        });
      }
    });
  }

  private _getCategories() {
    this.categoriesService
      .getCategories()

      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  private _submitUpdateCategory(id: string, category: Category) {
    this.categoriesService.updateCategory(id, category).subscribe({
      complete: () => {
        // show sucess toast notification
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'New Category Added',
        });

        // Redirect back to list of categories
        timer(1000).subscribe(() => {
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

  private _submitCreateCategory(category: Category) {
    this.categoriesService.createCategory(category).subscribe({
      complete: () => {
        // show sucess toast notification
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Category Updated',
        });

        // Redirect back to list of categories
        timer(1000).subscribe(() => {
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

  onSumbit() {
    return console.log(this.form.controls);
    this.isSubmitted = true;

    if (this.form.invalid) return;

    const category: Category = {
      name: this.form.controls.name.value,
      color: this.form.controls.color.value,
    };

    if (this.editMode) {
      this._submitUpdateCategory(this.id, category);
    } else {
      this._submitCreateCategory(category);
    }
  }
}
