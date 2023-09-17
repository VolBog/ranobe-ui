import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Novel } from '../models/novel.model';
const baseUrl = 'http://localhost:8080/novel';

@Injectable({
  providedIn: 'root',
})
export class NovelService {
  constructor(private http: HttpClient) {}

  get(id: any): Observable<Novel> {
    return this.http.get<Novel>(`${baseUrl}/${id}`);
  }
  create(novel: Novel): Observable<Novel> {
    return this.http
      .post<Novel>(baseUrl, novel)
      .pipe(catchError(this.handleError('addNovel', novel)));
  }
  handleError(
    arg0: string,
    novel: Novel
  ): (
    err: any,
    caught: Observable<Novel>
  ) => import('rxjs').ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
}
