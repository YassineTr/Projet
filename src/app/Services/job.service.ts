import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {Job} from '../model/job';

@Injectable({
  providedIn: 'root'
})

export class JobService {
  jobsRef: AngularFireList<any>;
  jobRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}


  AddJobs(job: Job) {
    this.db.list('/jobs').push(job);
    /* this.jobsRef.push({
    title: job.title,
    Email: job.Email,
    location: job.location,
    description: job.description,
    price: job.price,
    image: job.image
    }); */
  }
  Getjob(id: string) {
    this.jobRef = this.db.object('jobs/' + id);
    return this.jobRef ;
  }

  GetJobsList() {
    this.jobsRef = this.db.list('jobs');
    return this.jobsRef;
  }

  UpdateJob(job: Job){
    this.jobRef.update({
      title: job.title,
      Email: job.Email,
      location: job.location,
      description: job.description,
      price: job.price,
      company: job.company,

    });
    }
  DeleteJob(id: string) {
    this.jobRef = this.db.object('jobs/'+ id);
    this.jobRef.remove();
  }









}
