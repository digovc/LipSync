var LipSyc;
(function (LipSyc) {
    var ComponenteHtml = NetZ_Web.ComponenteHtml;
    class AudioViewer extends ComponenteHtml {
        constructor() {
            super("divAudioViewer");
        }
        get WobjaveSurfer() {
            if (this._objWaveSurfer != null) {
                return this._objWaveSurfer;
            }
            this._objWaveSurfer = this.getObjWaveSurfer();
            return this._objWaveSurfer;
        }
        getObjWaveSurfer() {
            var objParams = {
                container: '#divAudioWave',
            };
            var objWaveSurferResultado = WaveSurfer.create(objParams);
            objWaveSurferResultado.load('/res/media/audio/test.wav');
            return objWaveSurferResultado;
        }
    }
    LipSyc.AudioViewer = AudioViewer;
})(LipSyc || (LipSyc = {}));
