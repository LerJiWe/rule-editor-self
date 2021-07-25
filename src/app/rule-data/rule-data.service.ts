import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TempContent } from '../../viewmodel';

@Injectable({
  providedIn: 'root'
})
export class RuleDataService {

  constructor(private http: HttpClient) { }

  public getTempContent(): Observable<TempContent> {

    let url = "assets/JSONData/enginneInfos2.json";

    // return this.getJSON(url);

    let observable: Observable<any> = this.getJSON(url).pipe(
      map((x) => {
        return x[0].tempContent
      })
    );
    return observable;
  }

  private getJSON(url: string): Observable<any> {

    return this.http.get(url);
  }
}
