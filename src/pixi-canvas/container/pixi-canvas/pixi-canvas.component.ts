import {
	Component,
	AfterViewInit,
	OnDestroy,
	ElementRef,
	NgZone,
	ViewChild,
	ChangeDetectionStrategy,
	Input,
	OnChanges,
	SimpleChanges
} from '@angular/core';
import * as PIXI from 'pixi.js';
import { Viewport } from 'pixi-viewport';
import { NodesTypesService } from '../../nodeTypes/nodeTypes.service';

import { IPixiApplicationOptions, IEdgePosition, ILineSourceTarget, ILineDetails, IEdgePoint, IEdge} from '../../models';

@Component({
	selector: 'pixi-canvas',
	templateUrl: './pixi-canvas.component.html',
	styleUrls: ['./pixi-canvas.component.scss']
})
export class PixiCanvasComponent implements AfterViewInit, OnDestroy {
	private devicePixelRatio = window.devicePixelRatio || 1;
	private viewport: Viewport;
	WORLD_WIDTH: number;
	WORLD_HEIGHT: number;
	canvasWidth: number;
	canvasHeight: number;
	linesContainer: PIXI.Container;

	private defaults: IPixiApplicationOptions = {
		transparent: true,
		antialias: false,
		resolution: this.devicePixelRatio,
		autoDensity: true,
		autoStart: true
	};

	@Input() data: any;

	@ViewChild('container', { read: ElementRef, static: true })
	container: ElementRef;

	pixiApp: PIXI.Application = null;
	renderRequestId = undefined;

	constructor(private ngZone: NgZone, private nodesTypesService: NodesTypesService) {
		
	}

	ngAfterViewInit(): void {
		this.setStage();
		this.drawStage();
	}

	ngOnDestroy(): void {
		this.pixiApp.destroy();
	}

	private setStage(): void {
		this.ngZone.runOutsideAngular(() => {
			this.pixiApp = new PIXI.Application(this.defaults);
				
			
			// this.pixiApp.ticker.add(() => {
			// 	console.log('app tick');
			// 	this.pixiApp.ticker.stop();
			// });
			
			

			PIXI.Ticker.shared.add(() => {
				console.log('shared tick');
				PIXI.Ticker.shared.stop();
			});


			PIXI.Ticker.system.add(() => {
				console.log('system tick');
				PIXI.Ticker.system.stop();
			});


			this.WORLD_WIDTH = this.canvasWidth * 2;
			this.WORLD_HEIGHT = this.canvasHeight * 2;

			this.viewport = new Viewport({
				screenWidth: window.innerWidth,
				screenHeight: window.innerHeight,
				worldWidth: 1000,
				worldHeight: 1000,
				interaction: this.pixiApp.renderer.plugins.interaction
			});

			this.resize();
			this.pixiApp.stage.addChild(this.viewport);

			this.viewport
				.drag()
				.pinch()
				.wheel();

			});
			
		this.requestRender();
		this.container.nativeElement.appendChild(this.pixiApp.view);
	}

	private requestRender() {

		if (this.renderRequestId) {
			return;
		}
		this.renderRequestId = window.requestAnimationFrame(() => {
			this.pixiApp.render();
			this.renderRequestId = undefined;
		});
	}

	private drawStage(): void {
		this.drawLinesInSingleBuffer();
	}

	private drawLinesInSingleBuffer(drowSelected: boolean = false): void {
		/**
		 * Draw Edges
		 */
		const lines = new PIXI.Container();

		this.data.edges.forEach((edge: IEdge) => {
			const sourceCords: IEdgePosition = this.nodesTypesService.getNodeCords(this.data.location[edge.source]);
			const targetCords: IEdgePosition = this.nodesTypesService.getNodeCords(this.data.location[edge.dest]);

			const line: PIXI.Graphics = this.createLine(edge, sourceCords, targetCords);
			lines.addChild(line);
		});

		this.linesContainer = lines;
		this.viewport.addChild(this.linesContainer);
	}

	private createLine(edge: IEdge, sourceCords: IEdgePosition, targetCords: IEdgePosition): PIXI.Graphics {
		const line = new PIXI.Graphics();
		// |
		// |
		//  \
		//   \
		line.name = `${edge.source}-${edge.dest}`;
		line.lineStyle(2, this.nodesTypesService.getColors('line'), 0.2);
		line.name = `${edge.source}-${edge.dest}`;
		line.moveTo(sourceCords.x, sourceCords.y);
		line.lineTo(sourceCords.x, sourceCords.y + 100);
		line.moveTo(sourceCords.x, sourceCords.y + 100);
		line.lineTo(targetCords.x, targetCords.y);
		line.endFill();

		return line;
	}

	resize(): void {
		const width = this.container.nativeElement.offsetWidth;
		const height = this.container.nativeElement.offsetHeight;
		const viewportScale = 1 / this.devicePixelRatio;
		this.pixiApp.renderer.resize(width * this.devicePixelRatio, height * this.devicePixelRatio);
		this.pixiApp.view.style.transform = `scale(${viewportScale})`;
		this.pixiApp.view.style.transformOrigin = `top left`;
	}
}
