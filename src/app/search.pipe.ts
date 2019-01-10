import {Pipe, PipeTransform} from '@angular/core';
import {Jobs} from './model/jobs.model';



@Pipe ({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(jobs: Jobs[], term: any): any {
    if (term === undefined) {
      return jobs;
    }
    return jobs.filter (
      job => job.title.toLowerCase().indexOf(term.toLowerCase()) > -1 || job.description.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  }


}
