export type LoadingPageProps = {
  heading?: string;
  subHeading?: string;
};
export const LoadingPage = ({ subHeading, heading }: LoadingPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-200 border-t-green-900 rounded-full animate-spin"></div>

      {/* Text */}
      <h2 className="mt-6 text-2xl font-semibold text-black">
        {heading ? heading : ""}
      </h2>
      <p className="mt-2 text-center text-gray-600 max-w-md">
        {subHeading ? subHeading : ""}
      </p>
    </div>
  );
};

export default LoadingPage;
