import { LogarComponent, LoginComponent } from './components';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const LoginRoutes: Routes = [
	{
		path: 'login',
		component: LogarComponent,
		children: [{ path: '', component: LoginComponent }]
	}
];

@NgModule({
	imports: [RouterModule.forChild(LoginRoutes)],
	exports: [RouterModule]
})
export class LoginRoutingModule {
}
