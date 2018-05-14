import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as PIXI from 'pixi.js';

document.addEventListener('DOMContentLoaded', () => {
	let renderer = PIXI.autoDetectRenderer(
		600,
		400,
		{antialias: true, transparent: false, resolution: 1, backgroundColor: 0xFFFFFF}
	);
}, false);

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.log(err));
