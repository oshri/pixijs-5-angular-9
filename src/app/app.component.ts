import { Component } from '@angular/core';
import mock from './mocks/data.json';

@Component({
	selector: 'pixi-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	data = mock;
}
