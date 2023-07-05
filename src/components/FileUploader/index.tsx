import React from 'react';
import s from './fileuploader.module.scss';
import FilePond from '@/lib/filePong';

const FileUploader = () => {
  return (
    <div className={s.container}>
      <FilePond
        // ref={filePond}
        labelIdle={
          'Drag & Drop your File or <span class="filepond--label-action">Browse</span>'
        }
        name="verification-video"
        onaddfile={(error, file) => {
          console.log('onAddFile', error);
          // setShowLabel(false);
          // if (!error) {
          //   setDisabled(false);
          // }
        }}
        onprocessfilestart={() => {
          // setLoading(true);
        }}
        onprocessfiles={() => {
          // setLoading(false);
          // setDisabled(true);
          // console.log('session', session);
        }}
        onaddfileprogress={(file, progress) => {
          console.log('onaddfileprogress', progress);
        }}
        onerror={(err) => {
          console.log('errro: ', err);
          // setShowLabel(false);
          // setDisabled(true);
        }}
        onremovefile={(err, file) => {
          // setShowLabel(true);
        }}
        // acceptedFileTypes={['video/mp4', 'video/3gpp']}
        allowFileSizeValidation={true}
        maxFileSize={'50MB'}
        // styleItemPanelAspectRatio={'1.65'}
        // stylePanelAspectRatio={'1.6'}
        instantUpload={false}
        labelMaxFileSizeExceeded={'File is too large'}
        // styleImageEditButtonEditItemPosition="center bottom"
        // stylePanelLayout="integrated"
        styleLoadIndicatorPosition="center bottom"
        styleProgressIndicatorPosition="right bottom"
        styleButtonRemoveItemPosition="left bottom"
        styleButtonProcessItemPosition="right bottom"
        credits={false}
        // allowProcess={false}
      />
    </div>
  );
};

export default FileUploader;
