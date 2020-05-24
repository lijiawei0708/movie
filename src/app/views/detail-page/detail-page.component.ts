import { MovieInfoService } from './../../services/movie-info.service';
import { Router } from '@angular/router';
import { AppRoutingModule } from './../../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  public movieID: any; 
  public imgURL: any;
  public movieDt: any;
  public movieYear: any;
  public movieRunTime: any = {};

  constructor(
    public _actRouter:ActivatedRoute,
    public _movie: MovieInfoService,
    private _location: Location,
  ) { }

  ngOnInit() {
    this._actRouter.params.subscribe((params) => {
      this.movieID = params.mid;
      this.init();
    })
  }

  init() {
    this.imgURL = environment.imgURL;
    this.getMovieDetail();
  }

  getMovieDetail() {
    this._movie.getMovieInfo(this.movieID, {language: 'en-US'}).subscribe(data => {
      this.movieDt = data;
      this.formatMovieYear(this.movieDt.release_date);
      this.formatRunTime(this.movieDt.runtime);
    })
  }

  formatMovieYear(dt){
    this.movieYear = dt.split('-')[0];
  }

  formatRunTime(tm) {
    const time = Number(tm);
    if(time > 60){
      this.movieRunTime.hour = Math.floor(time/60);
      this.movieRunTime.minute = Math.floor(time%60);
    }
    else{
      this.movieRunTime.time = time;
    }
  }

  goBack(): void {
    this._location.back();
  }

}
