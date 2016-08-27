declare namespace WaveSurfer
{
    interface params
    {
        height?: number;
        waveColor?: string;
        progressColor?: string;
        cursorColor?: string;
        cursorWidth?: number;
        skipLength?: number;
        minPxPerSec?: number;
        pixelRatio?: number;
        fillParent?: boolean;
        scrollParent?: boolean;
        hideScrollbar?: boolean;
        normalize?: boolean;
        audioContext?: any;
        container?: any;
        dragSelection?: boolean;
        loopSelection?: boolean;
        audioRate?: number;
        interact?: boolean;
        splitChannels?: boolean;
        mediaContainer?: any;
        mediaControls?: boolean;
        renderer?: string;
        backend?: string;
        mediaType?: string;
        autoCenter?: boolean;
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