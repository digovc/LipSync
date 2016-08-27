using NetZ.Web.Server;

namespace LipSync.Server
{
    internal class ServerHttpLs : ServerHttp
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        internal ServerHttpLs() : base("Lip Sync HTTP Server")
        {
        }

        #endregion Construtores

        #region Métodos

        public override Resposta responder(Solicitacao objSolicitacao)
        {
            return base.responder(objSolicitacao) ?? new Resposta(objSolicitacao).addHtml(new Html.Pagina.PagLs());
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}