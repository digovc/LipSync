/// <reference path="../../typedefinition/wavesurfer.d.ts" />

module LipSyc
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AudioViewer
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objWaveSurfer: WaveSurfer;

        private get WobjaveSurfer(): WaveSurfer
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
        // #endregion Construtores

        // #region Métodos

        private getObjWaveSurfer(): WaveSurfer
        {
            var objParams: WaveSurfer.params = {
                container: '#divAudioWave',
            };

            var objWaveSurferResultado = WaveSurfer.create(objParams);

            objWaveSurferResultado.load('/res/media/audio/test.wav');

            return objWaveSurferResultado;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}