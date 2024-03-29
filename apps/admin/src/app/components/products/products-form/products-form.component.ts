import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CategoriesService, Category } from '@oneshop-web/categories';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { Product, ProductsService } from '@oneshop-web/products';

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
  imgPreviewSrc: string | ArrayBuffer;

  // FormBuilder makes FormGroup thas has Formcontrol(for inputs)
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
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
      isFeatured: [false],
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
        this.productsService.getProduct(this.id).subscribe((product) => {
          this.form.controls.name.setValue(product.name);
          this.form.controls.description.setValue(product.description);
          this.form.controls.richDescription.setValue(product.richDescription);
          this.form.controls.brand.setValue(product.brand);
          this.form.controls.category.setValue(product.category['_id']);
          this.form.controls.stock.setValue(product.stock);
          this.form.controls.price.setValue(product.price);
          this.form.controls.isFeatured.setValue(product.isFeatured);
          this.form.controls.image.setValue(product.image);
          this.imgPreviewSrc = product.image;
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

  private _submitUpdateProduct(id: string, product: FormData) {
    this.productsService.updateProduct(id, product).subscribe({
      complete: () => {
        // show sucess toast notification
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Product Updated',
        });

        // Redirect back to list of categories
        timer(1000).subscribe(() => {
          this.location.back();
        });
      },
      error: (error) => {
        console.log(error);
        // show err toast notification
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong, please try again later',
        });
      },
    });
  }

  private _submitCreateProduct(product: FormData) {
    this.productsService.createProduct(product).subscribe({
      complete: () => {
        // show sucess toast notification
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'PNew Category Added',
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

  onImageUpload(e) {
    const file = e.target.files[0];

    // Set the file on form image
    this.form.controls.image.setValue(file);

    if (file) {
      // Turn local file into URL based accessible
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        this.imgPreviewSrc = fileReader.result;
      };
    }
  }
  onSumbit() {
    this.isSubmitted = true;

    if (this.form.invalid) return;

    // key, value obj
    const products: FormData = new FormData();

    //Populate the content as JSON obj
    Object.keys(this.form.controls).map((key) => {
      products.append(key, this.form.controls[key].value);
    });

    if (this.editMode) {
      console.log('hitsd');
      this._submitUpdateProduct(this.id, products);
    } else {
      console.log('hit');
      this._submitCreateProduct(products);
    }
  }
}
