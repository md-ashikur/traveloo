import React, { useEffect, useRef } from "react";
import img1 from "../../assets/images/New folder/pexels-felix-mittermeier-2832039.jpg";
import "./SearchResult.css";

const SearchResult = () => {
  const rangeInputs = useRef([]);
  const priceInputs = useRef([]);

  useEffect(() => {
    const priceGap = 500;
    const range = document.querySelector(".PriceSlider .progress");

    const handlePriceInputChange = (e) => {
      let minPrice = parseInt(priceInputs.current[0].value);
      let maxPrice = parseInt(priceInputs.current[1].value);

      if (
        maxPrice - minPrice >= priceGap &&
        maxPrice <= rangeInputs.current[1].max
      ) {
        if (e.target.className === "input-min") {
          rangeInputs.current[0].value = minPrice;
          range.style.left =
            (minPrice / rangeInputs.current[0].max) * 100 + "%";
        } else {
          rangeInputs.current[1].value = maxPrice;
          range.style.right =
            100 - (maxPrice / rangeInputs.current[1].max) * 100 + "%";
        }
      }
    };

    const handleRangeInputChange = (e) => {
      let minVal = parseInt(rangeInputs.current[0].value);
      let maxVal = parseInt(rangeInputs.current[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInputs.current[0].value = maxVal - priceGap;
        } else {
          rangeInputs.current[1].value = minVal + priceGap;
        }
      } else {
        priceInputs.current[0].value = minVal;
        priceInputs.current[1].value = maxVal;
        range.style.left = (minVal / rangeInputs.current[0].max) * 100 + "%";
        range.style.right =
          100 - (maxVal / rangeInputs.current[1].max) * 100 + "%";
      }
    };

    priceInputs.current.forEach((input) => {
      input.addEventListener("input", handlePriceInputChange);
    });

    rangeInputs.current.forEach((input) => {
      input.addEventListener("input", handleRangeInputChange);
    });
  }, []);

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
                    ref={(el) => (priceInputs.current[0] = el)}
                    defaultValue="0"
                    disabled
                  />
                </div>
                <div className="separator"> - </div>
                <div className="field">
                  <span>$</span>
                  <input
                    type="number"
                    className="input-max  bg-base "
                    ref={(el) => (priceInputs.current[1] = el)}
                    defaultValue="2000"
                    disabled
                  />
                </div>
              </div>
              <div className="PriceSlider">
                <div className="progress"></div>
              </div>
              <div className="range-input">
                <input
                  type="range"
                  className="range-min"
                  min="0"
                  max="10000"
                  step="100"
                  ref={(el) => (rangeInputs.current[0] = el)}
                  defaultValue="2500"
                />
                <input
                  type="range"
                  className="range-max"
                  min="0"
                  max="10000"
                  step="100"
                  ref={(el) => (rangeInputs.current[1] = el)}
                  defaultValue="7500"
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
        <div className="py-6">
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
