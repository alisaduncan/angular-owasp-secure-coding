import { Component, inject } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { searchValidator } from './searchValidator';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-search',
    template: `
    <label for="id">Search by id: </label>
    <input id="id" type="text" [formControl]="searchValue" required>
    <div *ngIf="searchValue.invalid && (searchValue.dirty || searchValue.touched)">
      <div *ngIf="searchValue.errors?.['validSearch']">
        Search term format is 3 letters and 3 numbers.
      </div>
    </div>

    <button (click)="findSearchResults()">Find results</button>
  `,
    styles: [],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class SearchComponent {
  searchValue = new FormControl('', [
    Validators.required,
    searchValidator()
  ]);
  private router: Router = inject(Router);

  findSearchResults(): void {
    if (this.searchValue.valid) {
      this.router.navigate(['/results', {id: this.searchValue.value}]);
    }
    
  }
}
