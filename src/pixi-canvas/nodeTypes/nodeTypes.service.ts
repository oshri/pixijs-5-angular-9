import * as PIXI from 'pixi.js';
import { Injectable } from '@angular/core';
import { IEdgePosition, ICords } from '../models';

@Injectable({
	providedIn: 'root'
})
export class NodesTypesService {
	private colors = {
		node: 0x5700ff,
		feeder: 0x000000,
		writer: 0x000000,
		value: 0xffffff,
		line: 0x636363,
		computeLine: 0x3919ff,
		yellow: 0xffeb00,
		red: 0xff313e,
		magenta: 0x00ffce,
		black: 0x000000
	};

	

	getColors(type: string) {
		return type ? this.colors[type] : '0x000000';
	}

	dec2hexString(dec): string {
		return `0x ${(dec + 0x10000).toString(16).toUpperCase()}`;
	}

	getNodeCords(cords: ICords): IEdgePosition {
		const nodedimension = { width: 300, height: 300 };

		return {
			x: cords.column * nodedimension.width,
			y: cords.row * nodedimension.height
		};
	}
}
