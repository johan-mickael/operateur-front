import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient, private toolsServ : ToolsService) { }

  login(input) {
  	const options = this.toolsServ.formOption();
  	this.restoreToken();
  	return this.http.post(environment.base_url + 'clients/login', input, options);
  }

  restoreToken() {
  	localStorage.setItem('token', '');
  }

  isConnected(): boolean {
  	if(localStorage.getItem('token') == '') {
  		return false;
  	}
  	return true;
  }

  getHistorique() {
    const options = this.toolsServ.formOption(true, localStorage.getItem('token'));
    return this.http.get(environment.base_url + 'clients/historique', options);
  }

}