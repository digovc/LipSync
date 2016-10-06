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

    export class KeyFrame extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrObjFonema: Array<Fonema>;
        private _divTimeLine: TimeLine;
        private _intFrame: number;
        private _intOffSetIndex: number;
        private _intParentOffSet: number;
        private _strFonema: string;
        private _strScript: string;

        private get arrObjFonema(): Array<Fonema>
        {
            if (this._arrObjFonema != null)
            {
                return this._arrObjFonema;
            }

            this._arrObjFonema = this.getArrObjFonema();

            return this._arrObjFonema;
        }

        public get divTimeLine(): TimeLine
        {
            return this._divTimeLine;
        }

        public set divTimeLine(divTimeLine: TimeLine)
        {
            this._divTimeLine = divTimeLine;
        }

        private get intFrame(): number
        {
            if (this._intFrame != null)
            {
                return this._intFrame;
            }

            this._intFrame = this.getIntFrame();

            return this._intFrame;
        }

        public get intOffSetIndex(): number
        {
            if (this._intOffSetIndex != null)
            {
                return this._intOffSetIndex;
            }

            this._intOffSetIndex = this.getIntOffSetIndex();

            return this._intOffSetIndex;
        }

        public get intParentOffSet(): number
        {
            return this._intParentOffSet;
        }

        public set intParentOffSet(intParentOffSet: number)
        {
            this._intParentOffSet = intParentOffSet;
        }

        public get strFonema(): string
        {
            return this._strFonema;
        }

        public set strFonema(strFonema: string)
        {
            this._strFonema = strFonema;
        }

        public get strScript(): string
        {
            if (this._strScript != null)
            {
                return this._strScript;
            }

            this._strScript = this.getStrScript();

            return this._strScript;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(intIndex: number)
        {
            super("divKeyFrame_" + intIndex.toString());
        }

        // #endregion Construtores

        // #region Métodos

        private getArrObjFonema(): Array<Fonema>
        {
            if (Utils.getBooStrVazia(this.strFonema))
            {
                return null;
            }

            if (ConfigLs.i.arrObjFonema.length < 1)
            {
                return null;
            }

            var arrObjFonemaResultado = new Array<Fonema>();

            for (var i = 0; i < ConfigLs.i.arrObjFonema.length; i++)
            {
                var objFonema = ConfigLs.i.arrObjFonema[i];

                if (Utils.getBooStrVazia(objFonema.strFonema))
                {
                    continue;
                }

                if (objFonema.strFonema.toLocaleLowerCase() != this.strFonema.toLocaleLowerCase())
                {
                    continue;
                }

                arrObjFonemaResultado.push(objFonema);
            }

            return arrObjFonemaResultado;
        }

        private getIntFrame(): number
        {
            var intPosicao = this.jq[0].offsetLeft;

            var intFrameQuantidade = this.divTimeLine.intFrameQuantidade;
            var intParentWidth = this.jq.parent().width();

            var intPixelPerFrame = (intParentWidth / intFrameQuantidade);

            return ((intPosicao / intPixelPerFrame) + ConfigLs.i.intFrameInicial);
        }

        private getIntOffSetIndex(): number
        {
            if (Utils.getBooStrVazia(this.strFonema))
            {
                return -1;
            }

            if (this.arrObjFonema == null)
            {
                return -1;
            }

            if (this.arrObjFonema.length < 1)
            {
                return -1;
            }

            return this.arrObjFonema[Utils.getIntRandom(0, (this.arrObjFonema.length - 1))].intOffSetIndex;
        }

        private getStrScript(): string
        {
            var strResultado = "bpy.context.scene.frame_set(_frame_numero)\nbpy.data.textures[\"texture_boca\"].image_user.frame_offset = _offset_index;\nbpy.data.textures[\"texture_boca\"].keyframe_insert(data_path = 'image_user.frame_offset')";

            strResultado = strResultado.replace("_frame_numero", Math.round(this.intFrame).toString());
            strResultado = strResultado.replace("_offset_index", Math.round(this.intOffSetIndex).toString());

            return strResultado;
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.jq.css("left", this.intParentOffSet);
        }

        protected montarLayoutFixo(strLayoutFixo: string): string
        {
            strLayoutFixo = super.montarLayoutFixo(strLayoutFixo);

            if (Utils.getBooStrVazia(strLayoutFixo))
            {
                return null;
            }

            strLayoutFixo = strLayoutFixo.replace("_id", this.strId);
            strLayoutFixo = strLayoutFixo.replace("_fonema", this.strFonema);

            return strLayoutFixo;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}