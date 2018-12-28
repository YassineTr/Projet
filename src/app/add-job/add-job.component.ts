import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JobService} from '../Services/job.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  public  jobForm: FormGroup;


  constructor(
    public fb: FormBuilder,
    public jobservice: JobService

  ) {
      }

  ngOnInit() {
    this.jobsForm();
  }

   jobsForm() {
  this.jobForm = this.fb.group({
    title: ['',[Validators.required, Validators.minLength(2)]],
    Email: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-,]+$')]],
    location: ['',[Validators.required, Validators.minLength(2)]],
    description: ['',[Validators.required, Validators.minLength(2)]],
    price: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
    image: ['',[Validators.required, Validators.minLength(2)]],
  })
  }
  get title(){
    return this.jobForm.get('title');
  }
  get Email(){
    return this.jobForm.get('Email');
  }

  get location(){
    return this.jobForm.get('location');
  }

  get description(){
    return this.jobForm.get('description');
  }

  get price(){
    return this.jobForm.get('price');
  }
  get image(){
    return this.jobForm.get('image');
  }

  resetForm(){
    this.jobForm.reset();
  }
  submitJobData(){
    this.jobservice.AddJobs(this.jobForm.value);
    this.resetForm();
  }

}
