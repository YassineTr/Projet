import {Component, Input, OnInit} from '@angular/core';
import {JobService} from '../../Services/job.service';
import {Job} from '../../model/job';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})

export class ProfComponent implements OnInit {
  job: Job;
  constructor(private jobService: JobService , private route: ActivatedRoute) { }
  ngOnInit() {
    this.job = new Job();
      const id = this.route.snapshot.params['id'];
      this.jobService.Getjob(id).valueChanges().subscribe(data => {
        this.job = data;
    });

  }

}
