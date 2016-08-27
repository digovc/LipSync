using LipSync.Html.Componente;
using NetZ.Web.Html;
using NetZ.Web.Html.Pagina;

namespace LipSync.Html.Pagina
{
    internal class PagLs : PaginaHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private AudioViewer _divAudioViewer;

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

            lstJs.Add(new JavaScriptTag("/res/js/lib/jquery-3.1.0.slim.min.js"));
            lstJs.Add(new JavaScriptTag("/res/js/lib/wavesurfer.min.js"));

            lstJs.Add(new JavaScriptTag("/res/js/LipSync/AppLs.js"));
            lstJs.Add(new JavaScriptTag("/res/js/LipSync/html/pagina/PagLs.js"));
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divAudioViewer.setPai(this);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}