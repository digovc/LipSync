using NetZ.Web.Html;
using NetZ.Web.Html.Componente.Botao;
using NetZ.Web.Server.Arquivo.Css;

namespace LipSync.Html.Componente
{
    public class BotaoComando : BotaoHtml
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

            lstJs.Add(new JavaScriptTag(typeof(BotaoComando), 200));
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.enmLado = EnmLado.ESQUERDA;
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBorder(1, "solid", "gray"));
            this.addCss(css.setMargin(10));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}