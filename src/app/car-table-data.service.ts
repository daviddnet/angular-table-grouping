import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarTableDataService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getAllData(): Observable<any[]> {
    var data = this.http.get<any[]>('./assets/data/rdts.json');

    return data.pipe(
      map(res => {
        res.data.forEach(d => {
          d.dateFormated = new Date(d.date);
        });
        return res;
      })
    );
    

    return data;
    //return this.http.get<any[]>('./assets/data/cars-large.json');
  }
}
