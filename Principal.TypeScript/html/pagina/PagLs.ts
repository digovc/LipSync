/// <reference path="../../../Web.TypeScript/html/Input.ts"/>
/// <reference path="../../../Web.TypeScript/html/pagina/PaginaHtml.ts"/>
/// <reference path="../../../Web.TypeScript/Utils.ts"/>

module LipSyc
{
    // #region Importações

    import Input = NetZ_Web.Input;
    import PaginaHtml = NetZ_Web.PaginaHtml;
    import Utils = NetZ_Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagLs extends PaginaHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divAudioViewer: AudioViewer;
        private _divComando: Comando;
        private _divTimeLine: TimeLine;
        private _tagInputScript: Input;

        public get divAudioViewer(): AudioViewer
        {
            if (this._divAudioViewer != null)
            {
                return this._divAudioViewer;
            }

            this._divAudioViewer = new AudioViewer();

            return this._divAudioViewer;
        }

        private get divComando(): Comando
        {
            if (this._divComando != null)
            {
                return this._divComando;
            }

            this._divComando = new Comando(this);

            return this._divComando;
        }

        private get divTimeLine(): TimeLine
        {
            if (this._divTimeLine != null)
            {
                return this._divTimeLine;
            }

            this._divTimeLine = new TimeLine(this);

            return this._divTimeLine;
        }

        public get tagInputScript(): Input
        {
            if (this._tagInputScript != null)
            {
                return this._tagInputScript;
            }

            this._tagInputScript = new Input("tagInputScript");

            return this._tagInputScript;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public gerarScript(): void
        {
            this.divTimeLine.gerarScript();
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.divAudioViewer.iniciar();
            this.divComando.iniciar();
            this.divTimeLine.iniciar();
            this.tagInputScript.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}