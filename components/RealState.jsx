

const RealState = () => {
  return (
    <div id="realState" className=" h-screen flex sm:text-left flex-col justify-between md:px-[30px] sm:px-[20px]  lg:px-[60px]  md:pt-[30px] sm:pt-[20px]  pt-[60px]   uppercase tracking-[2px]  ">
      <div>
        <p  className=" sm:text-left text-center uppercase text-[14px] ">
          a real estate and property platform that is changing the world
        </p>
      </div>
      <div className=" mt-[40px]  uppercase">
        <p className=" sm:text-[18px] text-[25px]  ">
          a revolutionary platform
        </p>
        <p className=" sm:text-[22px] text-[44px] ">entries - sellers</p>
        <p className="text-[58px] tracking-[4px] sm:text-[25px] ">worldwide</p>
      </div>
      <div data-aos="fade-down-right" className=" flex flex-col  items-end sm:items-start ">
        <img
          className="w-[589.6px]  sm:w-[180px] "
          src="/assistes/2.2.png"
          alt="asd"
        />
        <p className=" mt-[30px]  text-[20px] text-center leading-[32px] sm:leading-[20px] sm:text-[12px] tracking-[4px] sm:mt-[20px] sm:text-left">
          connecting user form across the gloab
          <br className=" flex sm:hidden" />
           to facilitate lifes most important
          <br className=" flex sm:hidden" />
           personal transaction
        </p>
      </div>
      <div className="grid lg:grid-cols-2">
        <div>
          <p className=" lg:text-[40px] lg:mt-0 text-[17px] lg:font-thin ">
            the best of the best
          </p>
          <p data-aos="fade-right"  className="text-[15px] sm:text-[12px] mt-3  ">
            A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND
            MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET
            FROM ACROSS THE WORLD.
          </p>
        </div>
        <div></div>
      </div>
      <div  className=" grid pb-4    grid-cols-1  ">

        <a  href="#category" className="justify-self-center">
          <img
            src="/assistes/downb.png"
            className="  w-[40px]  "
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default RealState;
