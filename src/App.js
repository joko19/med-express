
function App() {
  return (
    <div>
      <section className="bg-blue-900">
        <div className="flex justify-between w-full md:hidden bg-blue-900 ">
          <img src="/asset/icons/logo.svg" alt="icon medExpress" className="bg-blue-900 p-4" />
          <img src="/asset/icons/phone-white.svg" alt="icon medExpress" className="bg-blue-900 p-8" />
        </div>
        <div className="flex md:flex-row flex-col-reverse">
          <div className="bg-blue-900 relative">
            <img src="/asset/icons/logo.svg" alt="icon medExpress" className="bg-blue-900 p-4 md:block hidden" />
            <div className="text-white absolute -mt-48 md:bottom-0 w-screen z-40 ">
              <div className="md:w-1/2 m-12 md:m-0 bg-blue-900 md:text-left text-center ">
                <div className="p-8">
                  <div className="md:text-7xl text-2xl font-bold  w-full">Take back control of your hairline</div>
                  <p className="text-lg my-4">Stop, reverse and prevent hair loss, with the right treatment delivered to your door.</p>
                  <button className="text-white bg-orange-500 font-bold text-lg py-1 my-4 rounded-full px-8">Start your Free visit</button>
                  <div className="flex justify-between my-4 text-xs md:text-sm">
                    <div className="flex flex-col md:flex-row gap-2">
                      <img src="/asset/icons/checklist.svg" alt="checklist" className="w-4 h-4 mx-auto md:my-auto " />
                      <div>
                        <p>Works for</p>
                        <p>9/10 men</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                      <img src="/asset/icons/checklist.svg" alt="checklist" className="w-4 h-4 mx-auto md:my-auto" />
                      <div>
                        <p>UK licensed</p>
                        <p>pharmacy</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                      <img src="/asset/icons/checklist.svg" alt="checklist" className="w-4 h-4 mx-auto md:my-auto" />
                      <div>
                        <p>Lowest price</p>
                        <p>guarantee</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow relative ">
            <div className="md:flex hidden flex-row-reverse inset-right-0 p-4 absolute right-4">
              <div className="text-blue-900 flex gap-4 ">
                <img src="/asset/icons/phone.svg" alt="icon medExpress" className="my-auto" />
                <div>
                  <p>Customer Services</p>
                  <p>0208 123 0508</p>
                </div>
              </div>
            </div>
            <div className="md:flex hidden flex-row-reverse inset-right-0 p-4 absolute bottom-4 right-4">
              <div className="flex gap-4 ">
                <img src="/asset/images/norton.png" alt="icon medExpress" className="my-auto" />
                <img src="/asset/images/pharmacy.png" alt="icon medExpress" className="my-auto" />
              </div>
            </div>
            <img src="/asset/images/background.png" className="w-full" alt="background" />
          </div>
        </div>
        <div className="bg-blue-900 h-72 md:hidden" />
      </section>

      <section>
        <div className="flex gap-8 md:gap-12 m-8 justify-center relative flex-end justify-items-end">
          <div className="h-full h-full flex-col justify-between ">
            <img src="/asset/icons/google.svg" alt="google" />
            <p className="text-blue-700 text-sm text-center font-bold">Rating:  4.9/5</p>
          </div>
          <div className="">
            <img src="/asset/icons/rating-desktop.svg" alt="rating" className="hidden md:block" />
            <img src="/asset/icons/rating-mobile.svg" alt="rating" className="md:hidden" />
            <p className="text-blue-700 text-sm text-center font-bold">Rating:  4.8/5</p>
          </div>
          <div className="my-auto hidden md:block">
            <img src="/asset/icons/reviewsio.svg" alt="review" />
            <p className="text-blue-700 text-sm text-center font-bold">Rating:  4.77/5</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
