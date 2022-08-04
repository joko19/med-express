
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

      <section className="flex flex-col gap-8 md:flex-row bg-gray-200 md:p-32 p-8">
        <div className="w-full text-center md:text-left">
          <h1 className="text-blue-900 text-2xl md:text-5xl font-bold">What causes hair loss?</h1>
          <p className="text-blue-900">Hair loss is a very common condition, estimated to affect two-thirds of all men - here are the reasons why.</p>
          <button className="text-white bg-orange-500 font-bold text-lg py-1 my-4 rounded-full px-8 hidden md:block">Find the right treatment</button>
        </div>
        <div className="w-full flex-col gap-8 text-blue-900">
          <div className="flex gap-4 mb-8">
            <img src="/asset/images/genes.svg" alt="genes" />
            <div>
              <div className="font-bold">Genes</div>
              <p>Hereditary hair loss, or male pattern baldness, is the most common cause. You have a higher chance of hair loss if you have a family history of it.</p>
            </div>
          </div>
          <div className="flex gap-4 my-8">
            <img src="/asset/images/hormones.svg" alt="genes" />
            <div>
              <div className="font-bold">Hormones</div>
              <p>Hereditary hair loss, or male pattern baldness, is the most common cause. You have a higher chance of hair loss if you have a family history of it.</p>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <img src="/asset/images/diet.svg" alt="genes" />
            <div>
              <div className="font-bold">Diet</div>
              <p>Hereditary hair loss, or male pattern baldness, is the most common cause. You have a higher chance of hair loss if you have a family history of it.</p>
            </div>
          </div>
        </div>
        <button className="text-white bg-orange-500 font-bold text-lg py-1 rounded-full px-8 md:hidden">Find the right treatment</button>
      </section>

      <section className="text-blue-900 md:my-12 my-8">
        <h1 className="font-bold text-3xl text-center" >How would you describe yours?</h1>
        <div className="flex flex-col md:flex-row px-8 md:px-32 mt-8 gap-4 ">
          <div className="flex  gap-4 bg-gray-100 p-4 w-full">
            <img src="/asset/images/receding.svg" alt="receding" />
            <div className="my-auto">
              <h1 className="font-bold">Receding hairlines</h1>
              <p>Receding hairlines
                Hair starting to thin and move back around the front and sides? Time to take action. </p>
            </div>
          </div>
          <div className="flex  gap-4 bg-gray-100 p-4 w-full">
            <img src="/asset/images/thinning.svg" alt="receding" />
            <div className="my-auto">
              <h1 className="font-bold">Thinning at the crown</h1>
              <p>Bald spots appearing at the top of your head? Treat this sign of hereditary hair loss.</p>
            </div>
          </div>
        </div><div className="flex flex-col md:flex-row px-8 md:px-32 mt-8 gap-4 ">
          <div className="flex  gap-4 bg-gray-100 p-4 w-full">
            <img src="/asset/images/thinning.svg" alt="receding" />
            <div className="my-auto">
              <h1 className="font-bold">Thinning all over</h1>
              <p>Hair becoming less thick all over, exposing more of your scalp? Bring some volume back.</p>
            </div>
          </div>
          <div className="flex  gap-4 bg-gray-100 p-4 w-full">
            <img src="/asset/images/advanced.svg" alt="receding" />
            <div className="my-auto">
              <h1 className="font-bold">Advanced hair loss</h1>
              <p>Lost all or most of your hair in some parts of your head? Treatments can still help.</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="text-white bg-orange-500 font-bold text-lg py-1 my-8 mx-auto rounded-full px-24">Start now</button>
        </div>
      </section>

      <section className="bg-blue-900 md:my-12 my-8 text-white p-4">
        <h1 className="font-bold text-3xl text-center my-8" >Your journey to better hair?</h1>
        <div className="flex flex-col md:flex-row px-8 md:px-32 gap-8">
          <div className="text-center">
            <img src="/asset/images/receding.svg" alt="receding" className="mx-auto bg-gray-100 rounded-full h-32 w-32 p-4" />
            <h1 className="font-bold my-2">1–2 months</h1>
            <p>Visible results will come over time. At the beginning you may temporarily shed a bit more hair, which is natural.</p>
          </div>
          <div className="text-center">
            <img src="/asset/images/thinning.svg" alt="receding" className="mx-auto bg-gray-100 rounded-full h-32 w-32 p-4" />
            <h1 className="font-bold my-2">3-4 months</h1>
            <p>At this point, your hair loss should slow down or stop. You may start seeing some signs of regrowth as well.</p>
          </div>
          <div className="text-center">
            <img src="/asset/images/receding.svg" alt="receding" className="mx-auto bg-gray-100 rounded-full h-32 w-32 p-4" />
            <h1 className="font-bold my-2">6 months</h1>
            <p> With consistent treatment new hair will continue to appear and become thicker, noticeably improving scalp coverage.</p>
          </div>
        </div>
        <div className="text-center">
          <button className="text-white bg-orange-500 font-bold text-lg py-1 my-8 mx-auto rounded-full px-24">Start now</button>
        </div>
      </section>

      <section className="">

      </section>
    </div>
  );
}

export default App;
