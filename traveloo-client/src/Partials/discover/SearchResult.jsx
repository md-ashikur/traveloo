import React, { useState } from "react";
import img1 from "../../assets/images/New folder/pexels-felix-mittermeier-2832039.jpg";
import "./SearchResult.css";

const SearchResult = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleMinPriceChange = (e) => {
    const newMinPrice = parseInt(e.target.value);
    if (newMinPrice <= maxPrice) {
      setMinPrice(newMinPrice);
    }
  };

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    if (newMaxPrice >= minPrice) {
      setMaxPrice(newMaxPrice);
    }
  };
  const progressBarWidth = ((maxPrice - minPrice) / 1000) * 100;

  console.log(minPrice, maxPrice);

  return (
    <div className="px-20 grid grid-cols-4 gap-5 my-20">
      {/* filter part----------- */}
      <div className="">
        {/* Price Range============= */}
        <div className="border-b-2 py-6">
          <h6 className="mb-3">Price Range</h6>
          <div className="w-full max-w-md mx-auto relative">
            <div className="wrapper">
              <div className="price-input flex my-3">
                <div className="field flex">
                  <span>$</span>
                  <input
                    type="text"
                    className="input-min bg-base w-10"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    disabled
                  />
                </div>
                <div className="separator"> - </div>
                <div className="field">
                  <span>$</span>
                  <input
                    type="number"
                    className="input-max  bg-base "
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    disabled
                  />
                </div>
              </div>
              <div className="PriceSlider relative">
                <div
                  className="progress absolute h-full bg-secondary "
                  style={{
                    left: `${(minPrice / 1000) * 100}%`,
                    width: `${progressBarWidth}%`,
                  }}
                ></div>
              </div>
              <div className="range-input">
                {/* range input components here */}
                <input
                  type="range"
                  className="range-min"
                  min="0"
                  max="1000"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                />
                <input
                  type="range"
                  className="range-max "
                  min="0"
                  max="1000"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Deals ==============*/}
        <div className="border-b-2 py-6">
          <h6 className="mb-3">Deals</h6>
          <div>
            <input
              className="m-2"
              type="checkbox"
              id="freeCancel"
              value="second_checkbox"
            />
            <label htmlFor="freeCancel" className="text-sm ">
              Free cancellation
            </label>
          </div>

          <div>
            <input
              className="m-2"
              type="checkbox"
              id="special"
              value="second_checkbox"
            />
            <label htmlFor="special" className="text-sm ">
              Properties with special offers
            </label>
          </div>

          <div>
            <input
              className="m-2"
              type="checkbox"
              id="payAtStay"
              value="second_checkbox"
            />
            <label htmlFor="payAtStay" className="text-sm ">
              Reserve now, pay at stay
            </label>
          </div>
        </div>

        {/* Popular Filters ==============*/}
        <div className="border-b-2 py-6">
          <h6 className="mb-3">Popular Filters</h6>
          <div>
            <input
              className="m-2"
              type="checkbox"
              id="historical"
              value="second_checkbox"
            />
            <label htmlFor="historical" className="text-sm ">
              Historical
            </label>
          </div>

          <div>
            <input
              className="m-2"
              type="checkbox"
              id="romantic"
              value="second_checkbox"
            />
            <label htmlFor="romantic" className="text-sm ">
              Romantic
            </label>
          </div>

          <div>
            <input
              className="m-2"
              type="checkbox"
              id="mountain"
              value="second_checkbox"
            />
            <label htmlFor="mountain" className="text-sm ">
              Mountain
            </label>
          </div>

          <div>
            <input
              className="m-2"
              type="checkbox"
              id="seaBeach"
              value="second_checkbox"
            />
            <label htmlFor="seaBeach" className="text-sm ">
              Sea Beach
            </label>
          </div>

          <div>
            <input
              className="m-2"
              type="checkbox"
              id="forest"
              value="second_checkbox"
            />
            <label htmlFor="forest" className="text-sm ">
              Forest
            </label>
          </div>
        </div>

        {/* Guest Rating=============== */}
        <div className="border-b-2 py-6">
          <h6 className="mb-3">Guest Rating</h6>

          <input className="m-2" type="radio" id="all" name="guestRating" />
          <label htmlFor="all">All</label>
          <br />
          <input
            className="m-2"
            type="radio"
            id="wonderful"
            name="guestRating"
          />
          <label htmlFor="wonderful">Wonderful 4.5+</label>
          <br />
          <input
            className="m-2"
            type="radio"
            id="veryGood"
            name="guestRating"
          />
          <label htmlFor="veryGood">Very good 4+</label>
          <br />

          <input className="m-2" type="radio" id="good" name="guestRating" />
          <label htmlFor="good">Good 3.5+</label>
          <br />
        </div>

        {/* Budget ==============*/}
        <div className="border-b-2 py-6">
          <h6 className="mb-3">Budget</h6>
          <div>
            <input
              className="m-2"
              type="checkbox"
              id="low"
              value="budgetrange"
            />
            <label htmlFor="low" className="text-sm ">
              Low
            </label>
          </div>

          <div>
            <input
              className="m-2"
              type="checkbox"
              id="mid"
              value="budgetrange"
            />
            <label htmlFor="mid" className="text-sm ">
              Mid-range
            </label>
          </div>

          <div>
            <input
              className="m-2"
              type="checkbox"
              id="luxury"
              value="budgetrange"
            />
            <label htmlFor="luxury" className="text-sm ">
              Luxury
            </label>
          </div>

          <div>
            <input
              className="m-2"
              type="checkbox"
              id="family"
              value="budgetrange"
            />
            <label htmlFor="family" className="text-sm ">
              Family-friendly
            </label>
          </div>
        </div>
      </div>

      {/* list--------------- */}
      <div className="col-span-3">
        <div className="my-5">
          <h6>3,269 results in Europe</h6>
        </div>
        <hr />

        {/* card1----------- */}
        <div className="grid grid-cols-4 my-5 border-b-2 px-2 py-5">
          <div className="rounded-2xl h-[280px] overflow-hidden">
            <img src={img1} alt="" />
          </div>
          <div className="col-span-3 p-3">
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <h6>
                  The Montcalm At Brewery London City Westminster Borough,
                  London
                </h6>
                <p className="text-sm my-3">
                  Westminster Borough, London
                  <span className="text-secondary">Show on map</span> - 2 km to
                  city center
                </p>

                <div className="mt-16">
                  <p className="text-tertiary text-sm font-semibold">
                    Free cancellation
                  </p>
                  <p className="text-tertiary text-sm">
                    You can cancel later, so lock in this great price today.
                  </p>

                  {/* tags----------- */}
                  <div className="flex mt-5 gap-3">
                    <span className="text-xs border px-5 py-2 rounded-full">
                      Romantic
                    </span>
                    <span className="text-xs border px-5 py-2 rounded-full">
                      Forest
                    </span>
                    <span className="text-xs border px-5 py-2 rounded-full">
                      Mountain
                    </span>
                  </div>
                </div>
              </div>

              {/* ----------right side-------------- */}
              <div className="text-end">
                <p className="text-sm text-secondary font-semibold">
                  Exceptional
                </p>
                <p className="text-sm">3,014 reviews</p>

                <div className="mt-20">
                  <p className="text-sm">8 nights, 2 adult</p>
                  <h5>US$88</h5>
                  <p className="text-sm">+US$828 taxes and charges</p>

                  <button className="bg-secondary px-10 py-2 mt-5 text-base rounded-lg">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card2----------- */}
        <div className="grid grid-cols-4 my-5 border-b-2 px-2 py-5">
          <div className="rounded-2xl h-[280px] overflow-hidden">
            <img src={img1} alt="" />
          </div>
          <div className="col-span-3 p-3">
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <h6>
                  The Montcalm At Brewery London City Westminster Borough,
                  London
                </h6>
                <p className="text-sm my-3">
                  Westminster Borough, London
                  <span className="text-secondary">Show on map</span> - 2 km to
                  city center
                </p>

                <div className="mt-16">
                  <p className="text-tertiary text-sm font-semibold">
                    Free cancellation
                  </p>
                  <p className="text-tertiary text-sm">
                    You can cancel later, so lock in this great price today.
                  </p>

                  {/* tags----------- */}
                  <div className="flex mt-5 gap-3">
                    <span className="text-xs border px-5 py-2 rounded-full">
                      Romantic
                    </span>
                    <span className="text-xs border px-5 py-2 rounded-full">
                      Forest
                    </span>
                    <span className="text-xs border px-5 py-2 rounded-full">
                      Mountain
                    </span>
                  </div>
                </div>
              </div>

              {/* ----------right side-------------- */}
              <div className="text-end">
                <p className="text-sm text-secondary font-semibold">
                  Exceptional
                </p>
                <p className="text-sm">3,014 reviews</p>

                <div className="mt-20">
                  <p className="text-sm">8 nights, 2 adult</p>
                  <h5>US$88</h5>
                  <p className="text-sm">+US$828 taxes and charges</p>

                  <button className="bg-secondary px-10 py-2 mt-5 text-base rounded-lg">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
