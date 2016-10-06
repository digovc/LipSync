/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../Web.TypeScript/html/Div.ts"/>
/// <reference path="../../../Web.TypeScript/OnClickListener.ts"/>
/// <reference path="../../../Web.TypeScript/OnKeyUpListener.ts"/>
/// <reference path="../../../Web.TypeScript/Utils.ts"/>

module LipSyc
{
    // #region Importações

    import ComponenteHtml = NetZ_Web.ComponenteHtml;
    import Div = NetZ_Web.Div;
    import OnClickListener = NetZ_Web.OnClickListener;
    import OnKeyUpListener = NetZ_Web.OnKeyUpListener;
    import Utils = NetZ_Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class TimeLine extends ComponenteHtml implements OnClickListener, OnKeyUpListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrObjKeyFrame: Array<KeyFrame>;
        private _divFonemaAtual: Div;
        private _intFrameQuantidade: number;
        private _pagLs: PagLs = null;

        private get arrObjKeyFrame(): Array<KeyFrame>
        {
            if (this._arrObjKeyFrame != null)
            {
                return this._arrObjKeyFrame;
            }

            this._arrObjKeyFrame = new Array<KeyFrame>();

            return this._arrObjKeyFrame;
        }

        private get divFonemaAtual(): Div
        {
            if (this._divFonemaAtual != null)
            {
                return this._divFonemaAtual;
            }

            this._divFonemaAtual = new Div("divFonemaAtual");

            return this._divFonemaAtual;
        }

        public get intFrameQuantidade(): number
        {
            if (this._intFrameQuantidade != null)
            {
                return this._intFrameQuantidade;
            }

            this._intFrameQuantidade = this.getIntFrameQuantidade();

            return this._intFrameQuantidade;
        }

        public get pagLs(): PagLs
        {
            return this._pagLs;
        }

        public set pagLs(pagLs: PagLs)
        {
            this._pagLs = pagLs;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(pagLs: PagLs)
        {
            super("divTimeLine");

            this.pagLs = pagLs;
        }

        // #endregion Construtores

        // #region Métodos

        private addObjKeyFrame(arg: JQueryEventObject): void
        {
            var objKeyFrame = new KeyFrame(this.arrObjKeyFrame.length);

            objKeyFrame.divTimeLine = this;
            objKeyFrame.intParentOffSet = arg.pageX;
            objKeyFrame.strFonema = this.divFonemaAtual.strConteudo;

            this.jq.append(objKeyFrame.strLayoutFixo);

            this.arrObjKeyFrame.push(objKeyFrame);

            objKeyFrame.iniciar();
        }

        private alterarFonema(key: any): void
        {
            if (ConfigLs.i.arrObjFonema.length < 1)
            {
                return;
            }

            for (var i = 0; i < ConfigLs.i.arrObjFonema.length; i++)
            {
                var objFonema = ConfigLs.i.arrObjFonema[i];

                if (objFonema == null)
                {
                    continue;
                }

                if (Utils.getBooStrVazia(objFonema.strFonema))
                {
                    continue;
                }

                if (objFonema.strFonema.toLowerCase() != (key as string).toLowerCase())
                {
                    continue;
                }

                this.divFonemaAtual.strConteudo = objFonema.strFonema.toUpperCase();
            }
        }

        public gerarScript(): void
        {
            if (this.arrObjKeyFrame.length < 1)
            {
                return;
            }

            var strScript = this.getStrScript();

            this.salvarScript(strScript);
        }

        private getIntFrameQuantidade(): number
        {
            return (ConfigLs.i.intFps * this.pagLs.divAudioViewer.intDuracao);
        }

        private getStrScript(): string
        {
            var strResultado = "import bpy\n\n";

            var intOffSetUltimo = -1;

            for (var i = 0; i < this.arrObjKeyFrame.length; i++)
            {
                var objKeyFrame = this.arrObjKeyFrame[i];

                strResultado = strResultado.concat(objKeyFrame.strScript + "\n");

                intOffSetUltimo = objKeyFrame.intOffSetIndex;
            }

            return strResultado;
        }

        private salvarScript(strScript: string): void
        {
            if (Utils.getBooStrVazia(strScript))
            {
                return;
            }

            var strFileName = PagLs.i.divAudioViewer.strFileName;

            if (Utils.getBooStrVazia(strFileName))
            {
                return;
            }

            if (strFileName.length < 5)
            {
                return;
            }

            strFileName = strFileName.substr(0, (strFileName.length - 4)).concat(".py");

            var elmA: any = document.createElement("a");

            document.body.appendChild(elmA);

            elmA.style = "display: none";

            var data = strScript;

            var blob = new Blob([data], { type: "text/plain" }), url = window.URL.createObjectURL(blob);

            elmA.href = url;
            elmA.download = strFileName;

            elmA.click();

            window.URL.revokeObjectURL(url);
        }

        protected setEventos(): void
        {
            super.setEventos();

            this.addEvtOnClickListener(this);

            this.pagLs.addEvtOnKeyUpListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onClick(objSender: Object, arg: JQueryEventObject): void
        {
            switch (objSender)
            {
                case this:
                    this.addObjKeyFrame(arg);
                    return;
            }
        }

        public onKeyUp(objSender: Object, arg: JQueryKeyEventObject): void
        {
            switch (objSender)
            {
                case this.pagLs:
                    this.alterarFonema(arg.key);
                    return;
            }
        }

        // #endregion Eventos
    }
}