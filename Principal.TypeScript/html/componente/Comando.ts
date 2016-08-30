/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../Web.TypeScript/OnClickListener.ts"/>

module LipSyc
{
    // #region Importações

    import ComponenteHtml = NetZ_Web.ComponenteHtml;
    import OnClickListener = NetZ_Web.OnClickListener;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Comando extends ComponenteHtml implements OnClickListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _btnAddTexto: BotaoComando;
        private _btnAudioSelecionar: BotaoComando;
        private _btnFinal: BotaoComando;
        private _btnInicio: BotaoComando;
        private _btnPlay: BotaoComando;
        private _pagLs: PagLs;

        private get btnAddTexto(): BotaoComando
        {
            if (this._btnAddTexto != null)
            {
                return this._btnAddTexto;
            }

            this._btnAddTexto = new BotaoComando("btnAddTexto");

            return this._btnAddTexto;
        }

        private get btnAudioSelecionar(): BotaoComando
        {
            if (this._btnAudioSelecionar != null)
            {
                return this._btnAudioSelecionar;
            }

            this._btnAudioSelecionar = new BotaoComando("btnAudioSelecionar");

            return this._btnAudioSelecionar;
        }

        private get btnFinal(): BotaoComando
        {
            if (this._btnFinal != null)
            {
                return this._btnFinal;
            }

            this._btnFinal = new BotaoComando("btnFinal");

            return this._btnFinal;
        }

        private get btnInicio(): BotaoComando
        {
            if (this._btnInicio != null)
            {
                return this._btnInicio;
            }

            this._btnInicio = new BotaoComando("btnInicio");

            return this._btnInicio;
        }

        private get btnPlay(): BotaoComando
        {
            if (this._btnPlay != null)
            {
                return this._btnPlay;
            }

            this._btnPlay = new BotaoComando("btnPlay");

            return this._btnPlay;
        }

        private get pagLs(): PagLs
        {
            return this._pagLs;
        }

        private set pagLs(pagLs: PagLs)
        {
            this._pagLs = pagLs;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(pagLs: PagLs)
        {
            super("divComando");

            this.pagLs = pagLs;
        }

        // #endregion Construtores

        // #region Métodos

        private posicionarFinal(): void
        {
            this.pagLs.divAudioViewer.posicionarFinal();
        }

        private posicionarInicio(): void
        {
            this.pagLs.divAudioViewer.posicionarInicio();
        }

        private reproduzirParar(): void
        {
            this.pagLs.divAudioViewer.reproduzirParar();
        }

        protected setEventos(): void
        {
            super.setEventos();

            this.btnAddTexto.addEvtOnClickListener(this);
            this.btnAudioSelecionar.addEvtOnClickListener(this);
            this.btnFinal.addEvtOnClickListener(this);
            this.btnInicio.addEvtOnClickListener(this);
            this.btnPlay.addEvtOnClickListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onClick(objSender: Object, arg: JQueryEventObject): void
        {
            switch (objSender)
            {
                case this.btnAddTexto:
                    return;

                case this.btnAudioSelecionar:
                    return;

                case this.btnFinal:
                    this.posicionarFinal();
                    return;

                case this.btnInicio:
                    this.posicionarInicio();
                    return;

                case this.btnPlay:
                    this.reproduzirParar();
                    return;
            }
        }

        // #endregion Eventos
    }
}