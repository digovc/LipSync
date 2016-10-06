module LipSyc
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ConfigLs
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        protected static _i: ConfigLs;

        public static get i(): ConfigLs
        {
            if (ConfigLs._i != null)
            {
                return ConfigLs._i;
            }

            ConfigLs._i = new ConfigLs();

            return ConfigLs._i;
        }

        private _arrObjFonema: Array<Fonema>;
        private _intFps: number = 24;
        private _intFrameInicial: number = 0;

        public get arrObjFonema(): Array<Fonema>
        {
            if (this._arrObjFonema != null)
            {
                return this._arrObjFonema;
            }

            this._arrObjFonema = this.getArrObjFonema();

            return this._arrObjFonema;
        }

        public get intFps(): number
        {
            return this._intFps;
        }

        public set intFps(intFps: number)
        {
            this._intFps = intFps;
        }

        public get intFrameInicial(): number
        {
            return this._intFrameInicial;
        }

        public set intFrameInicial(intFrameInicial: number)
        {
            this._intFrameInicial = intFrameInicial;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        private getArrObjFonema(): Array<Fonema>
        {
            var arrObjFonemaResultado = new Array<Fonema>();

            arrObjFonemaResultado.push(new Fonema(0, "n"));
            arrObjFonemaResultado.push(new Fonema(1, "a"));
            arrObjFonemaResultado.push(new Fonema(2, "e"));
            arrObjFonemaResultado.push(new Fonema(3, "i"));
            arrObjFonemaResultado.push(new Fonema(4, "o"));
            arrObjFonemaResultado.push(new Fonema(5, "u"));

            return arrObjFonemaResultado;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}