import { FilePond, registerPlugin } from 'react-filepond';
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginMediaPreview from 'filepond-plugin-media-preview';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// Import FilePond styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond-plugin-media-preview/dist/filepond-plugin-media-preview.min.css';
import 'filepond/dist/filepond.min.css';

// import { create as dokaCreate } from '@/lib/doka/doka.esm.min';

// Register the plugins
registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginMediaPreview,
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize,
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const create: (args: Record<string, any>) => any = (args) => dokaCreate(args);

// export { create };

export default FilePond;
/*export const Editor = create({
  cropAspectRatioOptions: [
    {
      label: 'Free',
      value: null,
    },
    {
      label: 'Portrait',
      value: 1.25,
    },
    {
      label: 'Square',
      value: 1,
    },
    {
      label: 'Landscape',
      value: 0.75,
    },
  ],
});*/
