/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../Web.TypeScript/html/Div.ts"/>
/// <reference path="../../../Web.TypeScript/html/Tag.ts"/>
/// <reference path="../../../Web.TypeScript/OnMouseDownListener.ts"/>
/// <reference path="../../../Web.TypeScript/OnMouseMoveListener.ts"/>
/// <reference path="../../../Web.TypeScript/OnMouseUpListener.ts"/>
/// <reference path="../../../Web.TypeScript/Utils.ts"/>

module LipSyc
{
    // #region Importações

    import ComponenteHtml = NetZ_Web.ComponenteHtml;
    import Div = NetZ_Web.Div;
    import OnMouseDownListener = NetZ_Web.OnMouseDownListener;
    import OnMouseMoveListener = NetZ_Web.OnMouseMoveListener;
    import OnMouseUpListener = NetZ_Web.OnMouseUpListener;
    import Tag = NetZ_Web.Tag;
    import Utils = NetZ_Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PalavraContainer extends ComponenteHtml implements OnMouseDownListener, OnMouseMoveListener, OnMouseUpListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booMover: boolean;
        private _booRedimensionar: boolean;
        private _divResizeDireita: Div;
        private _intMarginLeftAnterior: number;
        private _intMover: number;
        private _intRedimensionar: number;
        private _intWidthAnterior: number;
        private _strPalavra: string;

        private get booMover(): boolean
        {
            return this._booMover;
        }

        private set booMover(booMover: boolean)
        {
            this._booMover = booMover;
        }

        private get booRedimensionar(): boolean
        {
            return this._booRedimensionar;
        }

        private set booRedimensionar(booRedimensionar: boolean)
        {
            this._booRedimensionar = booRedimensionar;
        }

        private get divResizeDireita(): Div
        {
            if (this._divResizeDireita != null)
            {
                return this._divResizeDireita;
            }

            this._divResizeDireita = new Div(this.strId + "_divResizeDireita");

            return this._divResizeDireita;
        }

        private get intMarginLeftAnterior(): number
        {
            return this._intMarginLeftAnterior;
        }

        private set intMarginLeftAnterior(intMarginLeftAnterior: number)
        {
            this._intMarginLeftAnterior = intMarginLeftAnterior;
        }

        private get intMover(): number
        {
            return this._intMover;
        }

        private set intMover(intMover: number)
        {
            this._intMover = intMover;
        }

        private get intRedimensionar(): number
        {
            return this._intRedimensionar;
        }

        private set intRedimensionar(intRedimensionar: number)
        {
            this._intRedimensionar = intRedimensionar;
        }

        private get intWidthAnterior(): number
        {
            return this._intWidthAnterior;
        }

        private set intWidthAnterior(intWidthAnterior: number)
        {
            this._intWidthAnterior = intWidthAnterior;
        }

        public get strPalavra(): string
        {
            return this._strPalavra;
        }

        public set strPalavra(strPalavra: string)
        {
            this._strPalavra = strPalavra;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(intIndex: number, strPalavra: string)
        {
            super("divPalavraContainer_" + intIndex.toString());

            this.strPalavra = strPalavra;
        }

        // #endregion Construtores

        // #region Métodos

        protected montarLayoutFixo(strLayoutFixo: string): string
        {
            strLayoutFixo = super.montarLayoutFixo(strLayoutFixo);

            if (Utils.getBooStrVazia(strLayoutFixo))
            {
                return null;
            }

            strLayoutFixo = strLayoutFixo.replace("_palavra_conteudo", this.strPalavra);
            strLayoutFixo = strLayoutFixo.replace("_palabra_id", this.strId);
            strLayoutFixo = strLayoutFixo.replace("_div_resize_direita_id", this.divResizeDireita.strId);

            return strLayoutFixo;
        }

        private processarOnMouseDown(arg: JQueryMouseEventObject): void
        {
            if (arg.buttons < 1)
            {
                return;
            }

            if (arg.button != Tag.INT_MOUSE_BUTTON_LEFT)
            {
                return;
            }

            this.booMover = true;
            this.booRedimensionar = false;
            this.intMover = arg.clientX;

            this.intMarginLeftAnterior = Number(this.jq.css("margin-left").replace("px", Utils.STR_VAZIA));

            this.intMarginLeftAnterior = (this.intMarginLeftAnterior > 0) ? this.intMarginLeftAnterior : 0;
        }

        private processarOnMouseDownRedimensionar(arg: JQueryMouseEventObject): void
        {
            if (arg.buttons < 1)
            {
                return;
            }

            if (arg.button != Tag.INT_MOUSE_BUTTON_LEFT)
            {
                return;
            }

            this.booMover = false;
            this.booRedimensionar = true;
            this.intRedimensionar = arg.clientX;
            this.intWidthAnterior = this.jq.width();

            arg.stopPropagation();
        }

        private processarOnMouseMove(arg: JQueryMouseEventObject): void
        {
            if (arg.buttons < 1)
            {
                return;
            }

            if (arg.button != Tag.INT_MOUSE_BUTTON_LEFT)
            {
                return;
            }

            this.processarOnMouseMoveMover(arg);
            this.processarOnMouseMoveRedimensionar(arg);
        }

        private processarOnMouseMoveMover(arg: JQueryMouseEventObject): void
        {
            if (!this.booMover)
            {
                return;
            }

            this.jq.css("margin-left", (this.intMarginLeftAnterior + (arg.clientX - this.intMover)));
        }

        private processarOnMouseMoveRedimensionar(arg: JQueryMouseEventObject): void
        {
            if (!this.booRedimensionar)
            {
                return;
            }

            this.jq.width(this.intWidthAnterior + (arg.clientX - this.intRedimensionar));
        }

        private processarOnMouseUpMover(arg: JQueryMouseEventObject): void
        {
            this.booMover = false;
            this.booRedimensionar = false;
        }

        private processarOnMouseUpRedimensionar(arg: JQueryMouseEventObject): void
        {
            this.booRedimensionar = false;
            this.intRedimensionar = 0;
        }

        protected setEventos(): void
        {
            super.setEventos();

            this.addEvtOnMouseDownListener(this);
            this.addEvtOnMouseMoveListener(this);
            this.addEvtOnMouseUpListener(this);

            this.divResizeDireita.addEvtOnMouseDownListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onMouseDown(objSender: Object, arg: JQueryMouseEventObject): void
        {
            switch (objSender)
            {
                case this:
                    this.processarOnMouseDown(arg);
                    return;

                case this.divResizeDireita:
                    this.processarOnMouseDownRedimensionar(arg);
                    return;
            }
        }

        public onMouseMove(objSender: Object, arg: JQueryMouseEventObject): void
        {
            switch (objSender)
            {
                case this:
                    this.processarOnMouseMove(arg);
                    return;
            }
        }

        public onMouseUp(objSender: Object, arg: JQueryMouseEventObject): void
        {
            switch (objSender)
            {
                case this:
                    this.processarOnMouseUpMover(arg);
                    return;
            }
        }

        // #endregion Eventos
    }
}