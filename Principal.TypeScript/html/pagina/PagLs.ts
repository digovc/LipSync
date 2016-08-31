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
        private _tagInputTexto: Input;

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

        public get tagInputTexto(): Input
        {
            if (this._tagInputTexto != null)
            {
                return this._tagInputTexto;
            }

            this._tagInputTexto = new Input("tagInputTexto");

            return this._tagInputTexto;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public addTexto(): void
        {
            if (Utils.getBooStrVazia(this.tagInputTexto.strValor))
            {
                return;
            }

            var arrStrPalavra = this.tagInputTexto.strValor.split(" ");

            if (arrStrPalavra == null)
            {
                return;
            }

            arrStrPalavra.forEach((strPalavra) => { this.divTimeLine.addPalavra(strPalavra); });
        }

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
            this.tagInputTexto.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}