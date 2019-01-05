import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JobService} from '../Services/job.service';
import {Job} from '../model/job';
import {Jobs} from '../model/jobs.model';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
      metiers: string [] = ['Freelance', 'Full time', 'Internship', 'Part Time', 'Temporary'];
      MetierDefault = 'Freelance';
      jobcat: string [] = ['Accounting/Finance', 'Automotive Jobs', 'Construction/Facilities', 'Design/Multimedia'];
      JobDefault = 'Accounting/Finance';
  public  jobForm: FormGroup;
  job: Jobs;
  constructor(
    public fb: FormBuilder,
    public jobservice: JobService,

  ) {
  }

  ngOnInit() {
    this.jobsForm();
    this.jobForm.controls['type'].setValue(this.MetierDefault, {onlySelf: true});
    this.jobForm.controls['category'].setValue(this.JobDefault, {onlySelf: true});
  }

  jobsForm() {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      type : ['', [Validators.required]],
      category : ['', [Validators.required]],
      Email: ['', [Validators.required]],
      location: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      company: ['', [Validators.required]],
    });
  }


  resetForm() {
    this.jobForm.reset();
  }
  submitJobData() {
    this.job = new Jobs();
     const title = this.jobForm.get('title').value;
    this.job.title = title ;
    this.job.type = this.jobForm.get('type').value;
    this.job.category = this.jobForm.get('category').value;
    this.job.Email = this.jobForm.get('Email').value;
    this.job.location = this.jobForm.get('location').value;
    this.job.description = this.jobForm.get('description').value;
    this.job.price = this.jobForm.get('price').value;
    this.job.company = this.jobForm.get('company').value;
    console.log('ok');
     this.jobservice.AddJobs(this.job);
  }

}
