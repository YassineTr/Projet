import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JobService} from '../Services/job.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private jobservice: JobService
  ) { }

  ngOnInit() {
    this.updateJobData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.jobservice.Getjob(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data);
    })
  }


  get title(){
    return this.editForm.get('title');
  }
  get Email(){
    return this.editForm.get('Email');
  }

  get location(){
    return this.editForm.get('location');
  }

  get description(){
    return this.editForm.get('description');
  }

  get price(){
    return this.editForm.get('price');
  }
  get image(){
    return this.editForm.get('image');
  }

  private updateJobData() {
    this.editForm = this.fb.group({
      title: ['',[Validators.required, Validators.minLength(2)]],
      Email: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-,]+$')]],
      location: ['',[Validators.required, Validators.minLength(2)]],
      description: ['',[Validators.required, Validators.minLength(2)]],
      price: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      image: ['',[Validators.required, Validators.minLength(2)]],
    })

  }
  updateForm(){
    this.jobservice.UpdateJob(this.editForm.value);
    this.router.navigate(['view-job']);
  }
}
