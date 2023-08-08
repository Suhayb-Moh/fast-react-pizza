import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#eab308"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
