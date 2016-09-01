using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace LipSync.Html.Componente
{
    public class Comando : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private BotaoComando _btnAudioSelecionar;
        private BotaoComando _btnFinal;
        private BotaoComando _btnInicio;
        private BotaoComando _btnPlay;
        private Input _divInputAudio;

        private BotaoComando btnAudioSelecionar
        {
            get
            {
                if (_btnAudioSelecionar != null)
                {
                    return _btnAudioSelecionar;
                }

                _btnAudioSelecionar = new BotaoComando();

                return _btnAudioSelecionar;
            }
        }

        private BotaoComando btnFinal
        {
            get
            {
                if (_btnFinal != null)
                {
                    return _btnFinal;
                }

                _btnFinal = new BotaoComando();

                return _btnFinal;
            }
        }

        private BotaoComando btnInicio
        {
            get
            {
                if (_btnInicio != null)
                {
                    return _btnInicio;
                }

                _btnInicio = new BotaoComando();

                return _btnInicio;
            }
        }

        private BotaoComando btnPlay
        {
            get
            {
                if (_btnPlay != null)
                {
                    return _btnPlay;
                }

                _btnPlay = new BotaoComando();

                return _btnPlay;
            }
        }

        private Input divInputAudio
        {
            get
            {
                if (_divInputAudio != null)
                {
                    return _divInputAudio;
                }

                _divInputAudio = new Input();

                return _divInputAudio;
            }
        }

        private BotaoComando _btnScript;

        private BotaoComando btnScript
        {
            get
            {
                if (_btnScript != null)
                {
                    return _btnScript;
                }

                _btnScript = new BotaoComando();

                return _btnScript;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void addJs(LstTag<JavaScriptTag> lstJs)
        {
            base.addJs(lstJs);

            lstJs.Add(new JavaScriptTag(typeof(Comando), 200));
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = "divComando";

            this.btnAudioSelecionar.strId = "btnAudioSelecionar";
            this.btnAudioSelecionar.strTitle = "Selecionar audio";

            this.btnFinal.strId = "btnFinal";
            this.btnFinal.strTitle = "Final";

            this.btnInicio.strId = "btnInicio";
            this.btnInicio.strTitle = "Início";

            this.btnPlay.strId = "btnPlay";
            this.btnPlay.strTitle = "Reproduzir/parar";

            this.btnScript.strId = "btnScript";
            this.btnScript.strTitle = "Gerar script";

            this.divInputAudio.strId = "divInputAudio";
            this.divInputAudio.enmTipo = Input.EnmTipo.FILE;
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divInputAudio.setPai(this);
            this.btnAudioSelecionar.setPai(this);
            this.btnInicio.setPai(this);
            this.btnPlay.setPai(this);
            this.btnFinal.setPai(this);
            this.btnScript.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBorderBottom(1, "solid", "gray"));
            this.addCss(css.setCenter());
            this.addCss(css.setHeight(50));
            this.addCss(css.setWidth(250));

            this.divInputAudio.addCss(css.setDisplay("none"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}