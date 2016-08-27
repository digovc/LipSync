using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace LipSync.Html.Componente
{
    internal class AudioViewer : ComponenteHtml
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

            lstJs.Add(new JavaScriptTag("/res/js/html/componente/AudioViewer.js"));
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = "divAudioViewer";
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBackgroundColor("gray"));
            this.addCss(css.setMinHeight(250));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}