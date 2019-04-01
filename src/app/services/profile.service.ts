import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfileService {

  private username:string;
  private access_token = 'cdd68528e0f362917c2ff22b1cf515c12683c893';


  constructor(private http:HttpClient) { 
  	console.log("service is now ready!");
  	this.username = 'kirandash';
  }

  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.access_token).pipe(map(res => res));
  }

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + this.access_token).pipe(map(res => res));
  }

  updateProfile(username:string){
  	this.username = username;
  }

}