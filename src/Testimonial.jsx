import person from './assets/Bitmap (4).png'
const Testimonial = () => {
  return (
    <div>
      <div className="flex w-[1110px] mx-auto justify-between items-center mt-40 mb-24">
        <div className="w-[40%]">
          <h1 className="text-[40px]">
            Bringing you the <span className="text-orange-500">best</span> audio
            gear
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
              <div>
                  <img src={person} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
