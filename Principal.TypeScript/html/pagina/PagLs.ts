/// <reference path="../../../Web.TypeScript/html/pagina/PaginaHtml.ts"/>

module LipSyc
{
    // #region Importações

    import PaginaHtml = NetZ_Web.PaginaHtml;

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
        private _divPalavraContainer: PalavraContainer;
        private _divTimeLine: TimeLine;

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

        private get divPalavraContainer(): PalavraContainer
        {
            if (this._divPalavraContainer != null)
            {
                return this._divPalavraContainer;
            }

            this._divPalavraContainer = new PalavraContainer();

            return this._divPalavraContainer;
        }

        private get divTimeLine(): TimeLine
        {
            if (this._divTimeLine != null)
            {
                return this._divTimeLine;
            }

            this._divTimeLine = new TimeLine();

            return this._divTimeLine;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.divAudioViewer.iniciar();
            this.divComando.iniciar();
            this.divPalavraContainer.iniciar();
            this.divTimeLine.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}