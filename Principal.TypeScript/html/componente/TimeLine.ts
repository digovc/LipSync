/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../Web.TypeScript/Utils.ts"/>

module LipSyc
{
    // #region Importações

    import ComponenteHtml = NetZ_Web.ComponenteHtml;
    import Utils = NetZ_Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class TimeLine extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrObjPalavraContainer: Array<PalavraContainer>;
        private _intFrameQuantidade: number;
        private _pagLs: PagLs = null;

        private get arrObjPalavraContainer(): Array<PalavraContainer>
        {
            if (this._arrObjPalavraContainer != null)
            {
                return this._arrObjPalavraContainer;
            }

            this._arrObjPalavraContainer = new Array<PalavraContainer>();

            return this._arrObjPalavraContainer;
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

        private addObjPalavraContainer(objPalavraContainer: PalavraContainer): void
        {
            this.jq.append(objPalavraContainer.strLayoutFixo);

            objPalavraContainer.iniciar();
        }

        public addPalavra(strPalavra: string): void
        {
            if (Utils.getBooStrVazia(strPalavra))
            {
                return;
            }

            var objPalavraContainer = new PalavraContainer(this.arrObjPalavraContainer.length, strPalavra, this);

            this.arrObjPalavraContainer.push(objPalavraContainer);

            this.addObjPalavraContainer(objPalavraContainer);
        }

        public gerarScript(): void
        {
            if (this.arrObjPalavraContainer.length < 1)
            {
                return;
            }

            var arrObjKeyFrame = new Array<KeyFrame>();

            for (var i = 0; i < this.arrObjPalavraContainer.length; i++)
            {
                var objPalavraContainer = this.arrObjPalavraContainer[i];

                objPalavraContainer.gerarScript(arrObjKeyFrame);
            }

            if (arrObjKeyFrame.length < 1)
            {
                return;
            }

            var strScript = this.getStrScript(arrObjKeyFrame);

            this.pagLs.tagInputTexto.strValor = strScript;
        }

        private getIntFrameQuantidade(): number
        {
            return (ConfigLs.i.intFps * this.pagLs.divAudioViewer.intDuracao);
        }

        private getStrScript(arrObjKeyFrame: Array<KeyFrame>): string
        {
            var strResultado = "import bpy\n\n";

            var intOffSetUltimo = -1;

            for (var i = 0; i < arrObjKeyFrame.length; i++)
            {
                var objKeyFrame = arrObjKeyFrame[i];

                if (intOffSetUltimo == objKeyFrame.intOffSetIndex)
                {
                    continue;
                }

                strResultado = strResultado.concat(objKeyFrame.strScript + "\n");

                intOffSetUltimo = objKeyFrame.intOffSetIndex;
            }

            return strResultado;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}