
function App() {
  const faqs = [
    {
      question: 'Which hair loss treatments do you offer?',
      answered: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      question: 'Do I need a prescription to use hair loss medication?',
      answered: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      question: 'When is the right time to start treating hair loss?',
      answered: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      question: 'How effective is hair loss medication?',
      answered: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      question: 'Is this service discreet?',
      answered: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      question: 'How can I save money on hair loss treatments?',
      answered: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
  ];
  return (
    <div>
      <section className="bg-blue-900 overflow-hidden">
        <div className="flex justify-between w-full md:hidden bg-blue-900 ">
          <img src="/asset/icons/logo.svg" alt="icon medExpress" className="bg-blue-900 p-4" />
          <img src="/asset/icons/phone-white.svg" alt="icon medExpress" className="bg-blue-900 p-8" />
        </div>
        <div className="flex md:flex-row flex-col-reverse">
          <div className="bg-blue-900 relative">
            <img src="/asset/icons/logo.svg" alt="icon medExpress" className="bg-blue-900 p-4 md:block hidden" />
            <div className="text-white absolute -mt-48 md:bottom-0 w-screen overflow-hidden z-40 ">
              <div className="md:w-1/2 m-12 md:m-0 bg-blue-900 md:text-left text-center  overflow-hidden">
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
            <div className="md:flex hidden flex-row-reverse inset-right-0 p-4 absolute right-0">
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
            <h1 className="font-bold my-2">1???2 months</h1>
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

      <section>
        <div className="flex flex-col md:flex-row p-8 md:p-16 gap-8">
          <div className="my-auto w-full">
            <h1 className="text-blue-900 text-2xl md:text-4xl font-bold">Get yur treatment quickly and discreetly</h1>
            <button className="text-white bg-orange-500 font-bold text-lg py-1 my-8 mx-auto rounded-full px-24 hidden md:inline">Treat hair loss now</button>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col md:flex-row text-center md:text-left gap-4">
              <img src="/asset/icons/vertical-phone.svg" alt="vertical phone" className="w-24 md:w-auto mx-auto md:mx-0" />
              <div className="my-auto">
                <p className="font-bold">Take a 2 minute consultation</p>
                <p>Just answer a few questions for our medical team to review.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row text-center md:text-left gap-4">
              <img src="/asset/icons/card.svg" alt="card" className="w-24 md:w-auto mx-auto md:mx-0" />
              <div className="my-auto">
                <p className="font-bold">Get your free prescription</p>
                <p>We usually prescribe within the same day, without the need to visit a doctor.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row text-center md:text-left gap-4">
              <img src="/asset/icons/shipping.svg" alt="shipping" className="w-24 md:w-auto mx-auto md:mx-0" />
              <div className="my-auto">
                <p className="font-bold">Delivered fast and discreetly</p>
                <p>Your treatment can be with you in a day, in discreet packaging.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="text-white bg-orange-500 font-bold text-lg py-1 my-8 mx-auto rounded-full px-24 md:hidden">Treat hair loss now</button>
        </div>
      </section>

      <section className="bg-gray-100 px-2 py-8  md:p-16">
        <h1 className="text-center text-blue-900 text-2xl md:text-40x font-bold">FAQs</h1>
        <div className="p-10">
          <div className="overflow-hidden divide-y text-blue-900">
            {faqs.map((item, key) =>
              <div className="relative overflow-hidden bg-white rounded-lg m-1 p-2">
                <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
                <div className="h-12 w-full px-5 flex items-center font-bold">
                  <h1>
                    {item.question}
                  </h1>
                </div>
                <div className="absolute top-8 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-180">
                  <img src="/asset/icons/arrow-down.svg" alt="arrow down" className="my-auto" />
                </div>

                <div className="overflow-hidden bg-white transition-all duration-500 max-h-0 peer-checked:max-h-40">
                  <div className="p-5">{item.answered}</div>
                </div>
              </div>
            )}
          </div>
        </div>

      </section >

      <section>
        <div className="bg-blue-900 flex flex-col-reverse md:flex-row gap-8 text-white p-8 md:p-16">
          <div className="w-full md:w-1/3">
            <img src="/asset/images/prefooter-desktop.png" alt="pre footer" className="hidden md:inline" />
            <img src="/asset/images/prefooter-mobile.png" alt="pre footer" className="md:hidden mx-auto" />
          </div>
          <div className="w-full text-center md:text-left">
            <h1 className="font-bold text-2xl md:text-3xl">Call time on hair loss now </h1>
            <p className="mt-4">The sooner you start your treatment journey the quicker you see the results. That???s why we???ve made it easy and hassle-free, with quick online prescriptions and prompt delivery. What???s more, you have our lowest price guarantee.</p>
            <button className="text-white bg-orange-500 font-bold text-lg py-1 my-8 mx-auto rounded-full px-20 mt-8">Start your FREE visit</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="flex flex-col md:flex-row gap-4 bg-blue-500 p-8">
          <div className="w-1/3">
            <img src="/asset/icons/logo.svg" alt="logo" />
          </div>

          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-around w-full">
              <div className="relative overflow-hidden text-white  p-2 border-t-2 md:border-0 w-full">
                <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 md:h-full opacity-0 z-10 cursor-pointer" />
                <div className="w-full flex items-center font-bold md:mb-4">
                  <h1>
                    Useful Links
                  </h1>
                </div>
                <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-180 md:hidden">
                  <img src="/asset/icons/plus.svg" alt="arrow down" className="my-auto" />
                </div>
                <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 md:max-h-full">
                  <ul>
                    <li>Delivery info</li>
                    <li>FAQs</li>
                    <li>Complaints</li>
                    <li>About Us</li>
                    <li>Returns</li>
                    <li>Referral Scheme</li>
                  </ul>
                </div>
              </div>
              <div className="relative overflow-hidden text-white  p-2 border-t-2 md:border-0 w-full">
                <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 md:h-full opacity-0 z-10 cursor-pointer" />
                <div className="w-full flex items-center font-bold md:mb-4">
                  <h1>
                    Popular Treatments
                  </h1>
                </div>
                <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-180 md:hidden">
                  <img src="/asset/icons/plus.svg" alt="arrow down" className="my-auto" />
                </div>
                <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 md:max-h-full">
                  <ul>
                    <li>Erectile Dysfunction</li>
                    <li>Weight Loss</li>
                    <li>Migraines</li>
                    <li>Period Delay</li>
                    <li>Asthma</li>
                    <li>Sexual Health</li>
                  </ul>
                </div>
              </div>
              <div className="relative overflow-hidden text-white  p-2 border-t-2 border-b-2 md:border-0 w-full">
                <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 md:h-full opacity-0 z-10 cursor-pointer" />
                <div className="w-full flex items-center font-bold md:mb-4">
                  <h1>
                    Contact Us
                  </h1>
                </div>
                <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-180 md:hidden">
                  <img src="/asset/icons/plus.svg" alt="arrow down" className="my-auto" />
                </div>
                <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 md:max-h-full">
                  <ul>
                    <li>Phone: 0208 123 0508</li>
                    <li>FAQs</li>
                    <li>Contact Customer Care</li>
                    <li>Help Centre</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-white mt-4">
              <div className="flex flex-col md:flex-row">
                <p className="md:font-bold md:pr-4 md:border-r-2">Terms & Conditions</p>
                <p className="md:font-bold md:px-4 md:border-r-2">Privacy Policy</p>
                <p className="md:font-bold md:px-4">Regulations</p>
                <p className="md:pl-4 mt-4 md:mt-0">?? MedExpress Enterprises Ltd 2022 </p>
              </div>
              <div className="mt-4 md:mt-1">
                87a Worship Street, London, United Kingdom, EC2A 2BE | DUNS Number: 21-978-4663
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div >
  );
}

export default App;
