using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace LipSync.Html.Componente
{
    public class KeyFrame : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divFonema;

        private Div divFonema
        {
            get
            {
                if (_divFonema != null)
                {
                    return _divFonema;
                }

                _divFonema = new Div();

                return _divFonema;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = "_id";

            this.divFonema.strConteudo = "_fonema";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divFonema.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBackgroundColor("gray"));
            this.addCss(css.setFloat("left"));
            this.addCss(css.setHeight(100, "%"));
            this.addCss(css.setPosition("absolute"));
            this.addCss(css.setWidth(1));

            this.divFonema.addCss(css.setBorder(1, "solid", "gray"));
            this.divFonema.addCss(css.setBottom(0));
            this.divFonema.addCss(css.setHeight(25));
            this.divFonema.addCss(css.setPosition("absolute"));
            this.divFonema.addCss(css.setTextAlign("center"));
            this.divFonema.addCss(css.setWidth(25));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}