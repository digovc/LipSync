module LipSyc
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class KeyFrame
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _intFrame: number;
        private _intOffSetIndex: number;
        private _strScript: string;

        private get intFrame(): number
        {
            return this._intFrame;
        }

        private set intFrame(intFrame: number)
        {
            this._intFrame = intFrame;
        }

        public get intOffSetIndex(): number
        {
            return this._intOffSetIndex;
        }

        public set intOffSetIndex(intOffSetIndex: number)
        {
            this._intOffSetIndex = intOffSetIndex;
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

        constructor(intFrame: number, intOffSetIndex: number)
        {
            this.intFrame = intFrame;
            this.intOffSetIndex = intOffSetIndex;
        }

        // #endregion Construtores

        // #region Métodos

        private getStrScript(): string
        {
            var strResultado = "bpy.context.scene.frame_set(_frame_numero)\nbpy.data.textures[\"texture_boca\"].image_user.frame_offset = _offset_index;\nbpy.data.textures[\"texture_boca\"].keyframe_insert(data_path = 'image_user.frame_offset')";

            strResultado = strResultado.replace("_frame_numero", Math.round(this.intFrame).toString());
            strResultado = strResultado.replace("_offset_index", Math.round(this.intOffSetIndex).toString());

            return strResultado;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}