using NetZ.Web.Html;
using NetZ.Web.Html.Componente;

namespace LipSync.Html.Componente
{
    public class PalavraContainer : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void addJs(LstTag<JavaScriptTag> lstJs)
        {
            base.addJs(lstJs);

            lstJs.Add(new JavaScriptTag(typeof(PalavraContainer), 200));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}