import { ILanguagesData } from './../Models/LanguagesDataModel';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private httpClient: HttpClient) { }
  DataPath: string = "assets/Data/CharsData.json"

  GetData(): Observable<ILanguagesData> {
    return this.httpClient.get<ILanguagesData>(this.DataPath)
  }
}
