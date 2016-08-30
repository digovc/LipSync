﻿using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace LipSync.Html.Componente
{
    public class Comando : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private BotaoComando _btnAddTexto;
        private BotaoComando _btnAudioSelecionar;
        private BotaoComando _btnFinal;
        private BotaoComando _btnInicio;
        private BotaoComando _btnPlay;

        private BotaoComando btnAddTexto
        {
            get
            {
                if (_btnAddTexto != null)
                {
                    return _btnAddTexto;
                }

                _btnAddTexto = new BotaoComando();

                return _btnAddTexto;
            }
        }

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

            this.btnAddTexto.strId = "btnAddTexto";
            this.btnAddTexto.strTitle = "Adicionar texto";

            this.btnAudioSelecionar.strId = "btnAudioSelecionar";
            this.btnAudioSelecionar.strTitle = "Selecionar audio";

            this.btnFinal.strId = "btnFinal";
            this.btnFinal.strTitle = "Final";

            this.btnInicio.strId = "btnInicio";
            this.btnInicio.strTitle = "Início";

            this.btnPlay.strId = "btnPlay";
            this.btnPlay.strTitle = "Reproduzir/parar";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.btnAudioSelecionar.setPai(this);
            this.btnInicio.setPai(this);
            this.btnPlay.setPai(this);
            this.btnFinal.setPai(this);
            this.btnAddTexto.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBorderBottom(1, "solid", "gray"));
            this.addCss(css.setCenter());
            this.addCss(css.setHeight(50));
            this.addCss(css.setWidth(250));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}