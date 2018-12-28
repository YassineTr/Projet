import { Component, OnInit } from '@angular/core';
import {Job} from '../model/job';
import {JobService} from '../Services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  job: Job[];

  constructor(
    public jobservice: JobService
  ) { }

  ngOnInit() {
    let s = this.jobservice.GetJobsList();
    s.snapshotChanges().subscribe(data => {
      this.job = [];
      data.forEach( item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.job.push(a as Job);
      });
    });
  }

  deleteJob(job){

    if (window.confirm('Are sure you want to delete this job ? ')) {
      this.jobservice.DeleteJob(job.$key);
    }
  }

}
