using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace LipSync.Html.Componente
{
    public class TimeLine : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divFonemaAtual;

        private Div divFonemaAtual
        {
            get
            {
                if (_divFonemaAtual != null)
                {
                    return _divFonemaAtual;
                }

                _divFonemaAtual = new Div();

                return _divFonemaAtual;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void addJs(LstTag<JavaScriptTag> lstJs)
        {
            base.addJs(lstJs);

            lstJs.Add(new JavaScriptTag(typeof(TimeLine), 200));
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = "divTimeLine";

            this.divFonemaAtual.strConteudo = "A";
            this.divFonemaAtual.strId = "divFonemaAtual";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divFonemaAtual.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBorderBottom(1, "solid", "gray"));
            this.addCss(css.setHeight(153));
            this.addCss(css.setHeight(50));
            this.addCss(css.setMarginTop(-126));
            this.addCss(css.setPosition("relative"));

            this.divFonemaAtual.addCss(css.setBorder(1, "solid",  "gray"));
            this.divFonemaAtual.addCss(css.setBorderRadius(10));
            this.divFonemaAtual.addCss(css.setFloat("left"));
            this.divFonemaAtual.addCss(css.setMargin(10));
            this.divFonemaAtual.addCss(css.setPadding(10));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}