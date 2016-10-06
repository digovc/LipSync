declare namespace WaveSurfer
{
    interface params
    {
        audioContext?: any;
        audioRate?: number;
        autoCenter?: boolean;
        backend?: string;
        barWidth?: number;
        container?: any;
        cursorColor?: string;
        cursorWidth?: number;
        dragSelection?: boolean;
        fillParent?: boolean;
        height?: number;
        hideScrollbar?: boolean;
        interact?: boolean;
        loopSelection?: boolean;
        mediaContainer?: any;
        mediaControls?: boolean;
        mediaType?: string;
        minPxPerSec?: number;
        normalize?: boolean;
        pixelRatio?: number;
        progressColor?: string;
        renderer?: string;
        scrollParent?: boolean;
        skipLength?: number;
        splitChannels?: boolean;
        waveColor?: string;
    }
}

interface WaveSurfer
{
    cancelAjax: () => void;
    clearTmpEvents: () => void;
    create: (params: WaveSurfer.params) => WaveSurfer;
    createBackend: () => void;
    createDrawer: () => void;
    decodeArrayBuffer: (arraybuffer: any, callback: Function) => void;
    destroy: () => void;
    drawBuffer: () => void;
    empty: () => void;
    exportPCM: (length: number, accuracy: number, noWindow: any) => string;
    getArrayBuffer: (url: any, callback: any) => void;
    getCurrentTime: () => number;
    getDuration: () => number;
    isPlaying: () => boolean;
    load: (url: string, peaks?: number) => any;
    loadArrayBuffer: (arraybuffer: any) => void;
    loadBlob: (blob: Blob) => void;
    loadBuffer: (url: string, peaks: number) => any;
    loadDecodedBuffer: (buffer: any) => void;
    loadMediaElement: (urlOrElt: any, peaks: number) => void;
    on: (strEventoName: string, fnc: Function) => void;
    onProgress: (e: ProgressEvent) => void;
    pause: () => void;
    play: (start: number, end: number) => void;
    playPause: () => void;
    seekAndCenter: (progress: number) => void;
    seekTo: (progress: number) => void;
    setPlaybackRate: (rate: number) => void;
    setVolume: (newVolume: number) => void;
    skip: (offset: number) => void;
    skipBackward: (seconds: number) => void;
    skipForward: (seconds: number) => void;
    stop: () => void;
    toggleInteraction: () => void;
    toggleMute: () => void;
    toggleScroll: () => void;
    zoom: (pxPerSec: number) => void;
}

declare var WaveSurfer: WaveSurfer;