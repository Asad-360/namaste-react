const Shimmer = ({ shimType }) => {
  return (
    <div>
      {shimType == "list" ? (
        Array(7)
          .fill(null)
          .map((_, index) => (
            <div data-testid="shimmerloading" className="flex justify-center flex-wrap py-4">
              <div className="w-[70vw] my-2">
                <div className="bg-gray-100 p-4 rounded-lg animate-pulse">
                  <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-4/5"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                </div>
              </div>
            </div>
          ))
      ) : (
        <div className="flex justify-center items-center">
          <div className="flex justify-center flex-wrap py-4 w-4/5">
            {Array(20)
              .fill(null)
              .map((_, index) => (
                <div className="m-1 bg-gray-100">
                  <div className="bg-gray-200 p-3 h-[240] w-[220] rounded-sm m-3 animate-pulse"></div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Shimmer;
