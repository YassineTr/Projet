import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Services/auth.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';
import {CheckConnection} from '../Services/CheckConnection.service';
import {AuthGuardService} from '../Services/auth-guard.service';
import {Job} from '../model/job';
import {JobService} from '../Services/job.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  user = true ;
  job: Job[];
   isAuth: Observable<boolean> | Promise<boolean> | boolean ;
  constructor(private authService: AuthService , private router: Router , private  checkConnection: AuthGuardService , public jobservice: JobService) {
    this.checkUser();
  }



  checkUser() {
    this.authService.CurrentUser()
      .then(res => {
        this.user = true ;
        console.log('succes');
      }, err => {
        this.user = false ;
        console.log(err);
      });
  }

  doLogOut() {
    this.authService.doLogout(); 
    this.router.navigate(['\accueil']);
    
  }

  ngOnInit(): void {
     this.isAuth = this.checkConnection.CanActivate();
    const s = this.jobservice.GetJobsList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.job = [];
      data.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.job.push(a as Job);
        console.log(this.job);
      });
    });
  }


}
