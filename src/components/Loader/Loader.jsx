import { ColorRing } from 'react-loader-spinner';
import { LoaderImg } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderImg>
      <ColorRing
        visible={true}
        height="300"
        width="300"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass={{}}
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </LoaderImg>
  );
};
