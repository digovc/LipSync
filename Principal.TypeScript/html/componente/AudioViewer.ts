/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../typedefinition/wavesurfer.d.ts" />

module LipSyc
{
    // #region Importações

    import ComponenteHtml = NetZ_Web.ComponenteHtml;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AudioViewer extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _intTamanhoSegundo: number;
        private _objWaveSurfer: WaveSurfer;
        private _strFileName: string;

        public get intDuracao(): number
        {
            if (this._intTamanhoSegundo != null)
            {
                return this._intTamanhoSegundo;
            }

            this._intTamanhoSegundo = this.getIntTamanhoSegundo();

            return this._intTamanhoSegundo;
        }

        private get objWaveSurfer(): WaveSurfer
        {
            if (this._objWaveSurfer != null)
            {
                return this._objWaveSurfer;
            }

            this._objWaveSurfer = this.getObjWaveSurfer();

            return this._objWaveSurfer;
        }

        public get strFileName(): string
        {
            return this._strFileName;
        }

        public set strFileName(strFileName: string)
        {
            this._strFileName = strFileName;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("divAudioViewer");
        }

        // #endregion Construtores

        // #region Métodos

        public carregarAudio(fleAudio: File): void
        {
            if (fleAudio == null)
            {
                return;
            }

            this.strFileName = fleAudio.name;

            this.objWaveSurfer.loadBlob(fleAudio);
        }

        private getIntTamanhoSegundo(): number
        {
            return this.objWaveSurfer.getDuration();
        }

        private getObjWaveSurfer(): WaveSurfer
        {
            var objParams: WaveSurfer.params = {
                audioRate: 0.65,
                container: this.strSelector,
                fillParent: false,
                barWidth: 2.5,
            };

            var objWaveSurferResultado = WaveSurfer.create(objParams);

            objWaveSurferResultado.on("ready", (arg: any) => { this.onObjWaveSurferREady(arg); });

            return objWaveSurferResultado;
        }

        private inicializarObjWaveSurfer(): void
        {
            this.objWaveSurfer.zoom(1000);

            PagLs.i.divTimeLine.jq.width(this.jq.find("canvas").width());

            this.jq.width(this.jq.find("canvas").width());
        }

        public posicionarFinal(): void
        {
            this.objWaveSurfer.seekTo(1);
        }

        public posicionarInicio(): void
        {
            this.objWaveSurfer.seekTo(0);
        }

        public reproduzirParar(): void
        {
            this.objWaveSurfer.playPause();
        }

        // #endregion Métodos

        // #region Eventos

        private onObjWaveSurferREady(arg: any): void
        {
            this.inicializarObjWaveSurfer();
        }

        // #endregion Eventos
    }
}