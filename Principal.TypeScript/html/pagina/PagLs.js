var LipSyc;
(function (LipSyc) {
    var PaginaHtml = NetZ_Web.PaginaHtml;
    class PagLs extends PaginaHtml {
        get divAudioViewer() {
            if (this._divAudioViewer != null) {
                return this._divAudioViewer;
            }
            this._divAudioViewer = new LipSyc.AudioViewer();
            return this._divAudioViewer;
        }
        iniciar() { }
    }
    LipSyc.PagLs = PagLs;
})(LipSyc || (LipSyc = {}));
