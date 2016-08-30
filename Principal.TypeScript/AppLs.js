var LipSyc;
(function (LipSyc) {
    var AppWeb = NetZ_Web.AppWeb;
    class AppLs extends AppWeb {
        get pagLs() {
            if (this._pagLs != null) {
                return this._pagLs;
            }
            this._pagLs = new LipSyc.PagLs();
            return this._pagLs;
        }
        inicializar() {
            super.inicializar();
            this.pagLs.iniciar();
        }
    }
    LipSyc.AppLs = AppLs;
    $(document).ready(() => { AppLs.i.iniciar(); });
})(LipSyc || (LipSyc = {}));
