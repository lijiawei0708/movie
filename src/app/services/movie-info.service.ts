import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class MovieInfoService {

  public apiListURL = environment.movieListApi;
  public apiInfoURL = environment.movieInfoApi;
  public apiSearchURL = environment.movieSearchApi;
  public apiKey = environment.apiKey;
  // public options={
  //   sortBy:'',
  //   apiKey:'',
  //   region:''
  // }

  constructor(
    private http: HttpClient,
  ) { }

  getList(option) {
    const updatedOptions = {api_key:this.apiKey, ...option,}
    return this.http.get(this.apiListURL + qs.stringify(updatedOptions));
  }

  getMovieInfo(mid, option) {
    const updatedOptions = {api_key:this.apiKey, ...option,}
    return this.http.get(this.apiInfoURL + mid + '?' + qs.stringify(updatedOptions))
  }

  searchMovie(kwd){
    const updatedOptions = {api_key:this.apiKey, ...kwd,}
    console.log(this.apiSearchURL + qs.stringify(updatedOptions))
    return this.http.get(this.apiSearchURL + qs.stringify(updatedOptions))
  }

}
