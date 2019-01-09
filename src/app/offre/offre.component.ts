import {Component, Input, OnInit, Output} from '@angular/core';
import {JobService} from '../Services/job.service';
import {Job} from '../model/job';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  constructor (public jobservice: JobService , public route: Router) { }
 job: Job[];
  ngOnInit() {
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

Apply(id: String) {
    this.route.navigate(['profil',id]);
}

}
