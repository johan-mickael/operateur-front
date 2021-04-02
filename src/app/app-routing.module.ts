import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HistoriqueComponent } from './historique/historique.component';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'historique', component: HistoriqueComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
