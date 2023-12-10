import { ThreeDots } from 'react-loader-spinner';
import { FormatedLoader } from './Loader.styled';
export const Loader = () => (
  <FormatedLoader>
    <ThreeDots
      height="140"
      width="140"
      radius="9"
      color="#F81530 "
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </FormatedLoader>
);