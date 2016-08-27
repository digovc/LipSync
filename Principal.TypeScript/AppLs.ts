/// <reference path="html/pagina/PagLs.ts"/>
/// <reference path="typedefinition/jquery.d.ts" />
/// <reference path="typedefinition/wavesurfer.d.ts" />

module LipSyc
{
    // #region Importações

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AppLs
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _pagLs: PagLs;

        private get pagLs(): PagLs
        {
            if (this._pagLs != null)
            {
                return this._pagLs;
            }

            this._pagLs = new PagLs();

            return this._pagLs;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public iniciar(): void
        {
            this.pagLs.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }

    // #region Inicialização

    $(document).ready(() => { new AppLs().iniciar(); });

    // #endregion Inicialização
}