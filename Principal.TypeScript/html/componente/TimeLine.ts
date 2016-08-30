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

        private get arrObjPalavraContainer(): Array<PalavraContainer>
        {
            if (this._arrObjPalavraContainer != null)
            {
                return this._arrObjPalavraContainer;
            }

            this._arrObjPalavraContainer = new Array<PalavraContainer>();

            return this._arrObjPalavraContainer;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("divTimeLine");
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

            var objPalavraContainer = new PalavraContainer(this.arrObjPalavraContainer.length, strPalavra);

            this.arrObjPalavraContainer.push(objPalavraContainer);

            this.addObjPalavraContainer(objPalavraContainer);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}