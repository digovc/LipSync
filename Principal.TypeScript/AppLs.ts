﻿/// <reference path="../Web.TypeScript/AppWeb.ts"/>
/// <reference path="../Web.TypeScript/server/ServerBase.ts"/>
/// <reference path="html/pagina/PagLs.ts"/>
/// <reference path="typedefinition/wavesurfer.d.ts" />

module LipSyc
{
    // #region Importações

    import AppWeb = NetZ_Web.AppWeb;
    import ServerBase = NetZ_Web.ServerBase;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AppLs extends AppWeb
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        protected static _i: AppLs;

        public static get i(): AppLs
        {
            if (AppLs._i != null)
            {
                return AppLs._i;
            }

            AppLs._i = new AppLs();

            return AppLs._i;
        }

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

        protected inicializar(): void
        {
            super.inicializar();

            this.pagLs.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }

    // #region Inicialização

    $(document).ready(() => { AppLs.i.iniciar(); });

    // #endregion Inicialização
}