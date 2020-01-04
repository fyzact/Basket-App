import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../category/service/category.service'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService] // Adım 2
})
export class CategoryComponent implements OnInit {
constructor(private categoryService: CategoryService) { } // Adım 3
categories: Category[];
getCategories() {
// Adım 4
this.categoryService.getCategories().subscribe(response => this.categories = response);
  }
  ngOnInit() {
    this.getCategories();
  }
}