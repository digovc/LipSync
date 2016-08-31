using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace LipSync.Html.Componente
{
    public class PalavraContainer : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divResize;

        private Div divResize
        {
            get
            {
                if (_divResize != null)
                {
                    return _divResize;
                }

                _divResize = new Div();

                return _divResize;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void addJs(LstTag<JavaScriptTag> lstJs)
        {
            base.addJs(lstJs);

            lstJs.Add(new JavaScriptTag(typeof(PalavraContainer), 200));
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.strConteudo = "_palavra_conteudo";
            this.strId = "_palabra_id";

            this.divResize.strId = "_div_resize_id";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divResize.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.addCss("-webkit-user-select", "none"));
            this.addCss(css.setBackgroundColor("#ededed"));
            this.addCss(css.setBorderLeft(1, "solid", "gray"));
            this.addCss(css.setBorderRight(1, "solid", "gray"));
            this.addCss(css.setCursor("move"));
            this.addCss(css.setFloat("left"));
            this.addCss(css.setHeight(50));
            this.addCss(css.setLineHeight(50));
            this.addCss(css.setPosition("relative"));
            this.addCss(css.setTextAlign("center"));
            this.addCss(css.setWidth(50));

            this.divResize.addCss(css.setBackgroundColor("#dbdbdb"));
            this.divResize.addCss(css.setBorderLeft(1, "solid", "gray"));
            this.divResize.addCss(css.setCursor("e-resize"));
            this.divResize.addCss(css.setFloat("right"));
            this.divResize.addCss(css.setHeight(50));
            this.divResize.addCss(css.setPosition("absolute"));
            this.divResize.addCss(css.setRight(0));
            this.divResize.addCss(css.setTop(0));
            this.divResize.addCss(css.setWidth(10));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}