import { NovelService } from 'src/app/services/novel.service';
import { Novel } from './../../../models/novel.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-novel',
  templateUrl: './add-novel.component.html',
  styleUrls: ['./add-novel.component.scss'],
})
export class AddNovelComponent {
  novelForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private novelService: NovelService,
    private router: Router
  ) {
    this.novelForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      url: [''],
      imageUrl: [''],
      rating: [0],
      totalVotes: [0],
      language: [''],
      artist: [''],
      releaseYear: [null],
      status: [''],
      publisher: [''],
      description: [''],
    });
  }

  onSubmit() {
    if (this.novelForm.valid) {
      const formData = this.novelForm.value;
      this.novelService.create(formData).subscribe(
        (response) => {
          console.log('Novel created successfully:', response);
          this.router.navigate(['/novel', response.id]);
        },
        (error) => {
          console.error('Error creating novel:', error);
        }
      );
    }
  }
}
