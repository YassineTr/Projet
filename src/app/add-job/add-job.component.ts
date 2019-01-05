import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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
      public jobservice: JobService,
    ) {}

  ngOnInit() {}



}
