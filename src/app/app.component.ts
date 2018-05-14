import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Pixi-angular-test project!';

	ngOnInit() {
		const app = new PIXI.Application();
		document.body.appendChild(app.view);

		PIXI.loader.add('bunny', 'bunny.png').load((loader: any, resources: any) => {
			const bunny = new PIXI.Sprite(resources.bunny.texture);
			bunny.x = app.renderer.width / 2;
			bunny.y = app.renderer.height / 2;
			bunny.anchor.x = 0.5;
			bunny.anchor.y = 0.5;

			app.stage.addChild(bunny);

			app.ticker.add(() => {
				bunny.rotation += 0.01;
			});
		});
	}
}
