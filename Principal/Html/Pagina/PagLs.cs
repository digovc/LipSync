using LipSync.Html.Componente;
using NetZ.Web.Html;
using NetZ.Web.Html.Pagina;
using NetZ.Web.Server.Arquivo.Css;

namespace LipSync.Html.Pagina
{
    internal class PagLs : PaginaHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private AudioViewer _divAudioViewer;
        private Comando _divComando;
        private TimeLine _divTimeLine;
        private Input _tagInput;

        private AudioViewer divAudioViewer
        {
            get
            {
                if (_divAudioViewer != null)
                {
                    return _divAudioViewer;
                }

                _divAudioViewer = new AudioViewer();

                return _divAudioViewer;
            }
        }

        private Comando divComando
        {
            get
            {
                if (_divComando != null)
                {
                    return _divComando;
                }

                _divComando = new Comando();

                return _divComando;
            }
        }

        private TimeLine divTimeLine
        {
            get
            {
                if (_divTimeLine != null)
                {
                    return _divTimeLine;
                }

                _divTimeLine = new TimeLine();

                return _divTimeLine;
            }
        }

        private Input tagInput
        {
            get
            {
                if (_tagInput != null)
                {
                    return _tagInput;
                }

                _tagInput = new Input();

                return _tagInput;
            }
        }

        #endregion Atributos

        #region Construtores

        internal PagLs() : base("Main")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override void addJs(LstTag<JavaScriptTag> lstJs)
        {
            base.addJs(lstJs);

            lstJs.Add(new JavaScriptTag("/res/js/lib/wavesurfer.min.js", 100));

            lstJs.Add(new JavaScriptTag(typeof(AppLs), 200));
            lstJs.Add(new JavaScriptTag(typeof(PagLs), 201));
            lstJs.Add(new JavaScriptTag(typeof(PalavraContainer), 201));
        }

        protected override void addLayoutFixo()
        {
            base.addLayoutFixo();

            this.addLayoutFixo(typeof(PalavraContainer));
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.tagInput.enmTipo = Input.EnmTipo.TEXT_AREA;
            this.tagInput.strId = "tagInput";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divAudioViewer.setPai(this);
            this.divTimeLine.setPai(this);
            this.divComando.setPai(this);
            this.tagInput.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.tagInput.addCss(css.setBorderRadius(10));
            this.tagInput.addCss(css.setCenter());
            this.tagInput.addCss(css.setDisplay("block"));
            this.tagInput.addCss(css.setMarginTop(10));
            this.tagInput.addCss(css.setWidth(500));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}