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

        private Div _divResizeDireita;

        private Div divResizeDireita
        {
            get
            {
                if (_divResizeDireita != null)
                {
                    return _divResizeDireita;
                }

                _divResizeDireita = new Div();

                return _divResizeDireita;
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

            this.divResizeDireita.strId = "_div_resize_direita_id";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divResizeDireita.setPai(this);
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

            this.divResizeDireita.addCss(css.setBackgroundColor("#dbdbdb"));
            this.divResizeDireita.addCss(css.setBorderLeft(1, "solid", "gray"));
            this.divResizeDireita.addCss(css.setCursor("e-resize"));
            this.divResizeDireita.addCss(css.setFloat("right"));
            this.divResizeDireita.addCss(css.setHeight(50));
            this.divResizeDireita.addCss(css.setPosition("absolute"));
            this.divResizeDireita.addCss(css.setRight(0));
            this.divResizeDireita.addCss(css.setTop(0));
            this.divResizeDireita.addCss(css.setWidth(10));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}