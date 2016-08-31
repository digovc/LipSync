module LipSyc
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Fonema
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _intOffSetIndex: number;
        private _intOrdem: number;
        private _strFonema: string;

        public get intOffSetIndex(): number
        {
            return this._intOffSetIndex;
        }

        public set intOffSetIndex(intOffSetIndex: number)
        {
            this._intOffSetIndex = intOffSetIndex;
        }

        public get intOrdem(): number
        {
            return this._intOrdem;
        }

        public set intOrdem(intOrdem: number)
        {
            this._intOrdem = intOrdem;
        }

        public get strFonema(): string
        {
            return this._strFonema;
        }

        public set strFonema(strFonema: string)
        {
            this._strFonema = strFonema;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(intOffSetIndex: number, strFonema: string)
        {
            this.intOffSetIndex = intOffSetIndex;
            this.strFonema = strFonema;
        }

        // #endregion Construtores

        // #region Métodos
        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}