import { Component, OnInit } from '@angular/core';
import {Job} from '../model/job';
import {JobService} from '../Services/job.service';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../Services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  job: Job;
  email: string;

  constructor(private jobService: JobService, private route: ActivatedRoute , private userService: AuthService) {
  }

  ngOnInit() {
    this.job = new Job();
    const id = this.route.snapshot.params['id'];
    this.jobService.Getjob(id).valueChanges().subscribe(data => {
      this.job = data;
      this.userService.getCurrentUser().then(user => {
        this.email = user.email;
      });
    });

  }

}
