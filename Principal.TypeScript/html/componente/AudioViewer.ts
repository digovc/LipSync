/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../typedefinition/wavesurfer.d.ts" />

module LipSyc
{
    // #region Importações

    import ComponenteHtml = NetZ_Web.ComponenteHtml;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AudioViewer extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objWaveSurfer: WaveSurfer;

        private get objWaveSurfer(): WaveSurfer
        {
            if (this._objWaveSurfer != null)
            {
                return this._objWaveSurfer;
            }

            this._objWaveSurfer = this.getObjWaveSurfer();

            return this._objWaveSurfer;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("divAudioViewer");
        }

        // #endregion Construtores

        // #region Métodos

        public carregarAudio(fleAudio: File): void
        {
            if (fleAudio == null)
            {
                return;
            }

            this.objWaveSurfer.loadBlob(fleAudio);
        }

        private getObjWaveSurfer(): WaveSurfer
        {
            var objParams: WaveSurfer.params = {
                container: this.strSelector,
            };

            var objWaveSurferResultado = WaveSurfer.create(objParams);

            return objWaveSurferResultado;
        }

        public posicionarFinal(): void
        {
            this.objWaveSurfer.seekTo(1);
        }

        public posicionarInicio(): void
        {
            this.objWaveSurfer.seekTo(0);
        }

        public reproduzirParar(): void
        {
            this.objWaveSurfer.playPause();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}