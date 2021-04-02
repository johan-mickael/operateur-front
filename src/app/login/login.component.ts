import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	message: string;
	numero: string;
	codeSecret: string;


	constructor(private service: ServiceService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit(): void {
	}

	login() {
		
		const input = {
			numero: this.numero,
			codeSecret: this.codeSecret
		};

		const success = response => {
			if (response['code'] == 200) {
				localStorage.setItem('token', response['data']['token']);
				this.router.navigate(['historique']);
			} else {
				this.message = response['message'];
			}
			console.log(response);
		}

		const error = response => {
			this.message = response['message'];
		}

		this.service.login(input).subscribe(success, error);

	}

}
