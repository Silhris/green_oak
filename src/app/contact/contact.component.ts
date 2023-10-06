import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

import { Category } from '@app/models/category';
import { Message } from '@app/models/message';
import { MessagesService } from '@app/models/service/messages.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    EditorModule,
    FormsModule,
    InputTextModule,
    MultiSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  formGroup!: FormGroup;
  submitted = false;
  text: string = '';
  categories:  Category[] = [
    {name: 'Arbres truffiers', code: 'plants_truffiers'},
    {name: 'Conifères', code: 'coniferes'},
    {name: 'Quercus', code: 'quercus'},
    {name: 'Arbres fruitiers', code: 'arbres_fruitiers'},
    {name: 'Arbustes fruitiers', code: 'arbustes_fruitiers'},
    {name: 'Trufficulture / Mycologie', code: 'arbustes_fruitiers'},
    {name: 'Préparation de verger', code: 'arbustes_fruitiers'},
    {name: 'Paysagiste', code: 'arbustes_fruitiers'},
    {name: 'Autre', code: 'other'}
  ];
  selectedCategories!: Category[];

  constructor(private formBuilder: FormBuilder,
              private messagesService: MessagesService) { }

  ngOnInit() {
    this.messagesService.getMessages().subscribe(messages => console.log(messages));
    this.formGroup = this.formBuilder.group({
      lastName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      selectedCategories: new FormControl('', [Validators.required]),
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.status === "VALID") {
      const message: Message = {
        lastName: this.formGroup.controls['lastName'].value,
        firstName: this.formGroup.controls['firstName'].value,
        email: this.formGroup.controls['email'].value,
        phone: this.formGroup.controls['phone'].value,
        text: this.formGroup.controls['text'].value,
        selectedCategories: this.formGroup.controls['selectedCategories'].value
      };
      this.messagesService.postMessage(message);
    }
  }
}
