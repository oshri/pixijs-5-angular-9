export interface IPixiApplicationOptions {
	autoStart?: boolean;
	width?: number;
	height?: number;
	view?: HTMLCanvasElement;
	transparent?: boolean;
	autoDensity?: boolean;
	antialias?: boolean;
	preserveDrawingBuffer?: boolean;
	resolution?: number;
	forceCanvas?: boolean;
	backgroundColor?: number;
	clearBeforeRender?: boolean;
	forceFXAA?: boolean;
	powerPreference?: string;
	sharedTicker?: boolean;
	sharedLoader?: boolean;
	resizeTo?: Window | HTMLElement;
}

export interface ICords {
    column: number;
    row: number;
}

export interface IEdgePosition {
	x: number;
	y: number;
}

export interface ILineSourceTarget {
	source: { x: number; y: number };
	target: { x: number; y: number };
}

export interface ILineDetails {
	source: {
		cords: { x: number; y: number };
		selected: boolean;
	};
	target: {
		cords: { x: number; y: number };
		selected: boolean;
	};
}

export interface IEdgePoint {
	x: number;
	y: number;
}

export interface IEdge {
	source: number;
	dest: number;
	dType: any;
	points?: IEdgePoint[]
}