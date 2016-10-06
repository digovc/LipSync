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

        protected static _i: PagLs;

        public static get i(): PagLs
        {
            if (PagLs._i != null)
            {
                return PagLs._i;
            }

            PagLs._i = new PagLs();

            return PagLs._i;
        }

        private _divAudioViewer: AudioViewer;
        private _divComando: Comando;
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

        public get divComando(): Comando
        {
            if (this._divComando != null)
            {
                return this._divComando;
            }

            this._divComando = new Comando(this);

            return this._divComando;
        }

        public get divTimeLine(): TimeLine
        {
            if (this._divTimeLine != null)
            {
                return this._divTimeLine;
            }

            this._divTimeLine = new TimeLine(this);

            return this._divTimeLine;
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
        }

        protected setEventos(): void
        {
            super.setEventos();

            document.body.addEventListener("mousewheel", ((arg: any) => { this.onMouseWheel(arg); }));
        }

        // #endregion Métodos

        // #region Eventos

        private onMouseWheel(arg: any): void
        {
            if ((document.body as any).doScroll)
            {
                (document.body as any).doScroll(arg.wheelDelta > 0 ? "left" : "right");
            }
            else if ((arg.wheelDelta || arg.detail) > 0)
            {
                document.body.scrollLeft -= 10;
            }
            else
            {
                document.body.scrollLeft += 10;
            }

            return;
        }

        // #endregion Eventos
    }
}