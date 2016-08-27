using System.Collections.Generic;
using NetZ.Web;
using NetZ.Web.Server;

namespace LipSync
{
    internal sealed class AppLs : AppWeb
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        public AppLs() : base("Lip Sync")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override ConfigWeb getObjConfig()
        {
            return new ConfigLs();
        }

        protected override void inicializarLstSrv(List<ServerBase> lstSrv)
        {
            lstSrv.Add(new Server.ServerHttpLs());
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}