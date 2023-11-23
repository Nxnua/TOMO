import React from 'react';

const FlightSearchForm = () => {
  return (
    <div className="uitk-spacing bex-homepage-module SimpleContainer">
      <h1 className="uitk-heading uitk-heading-3 uitk-spacing uitk-spacing-padding-inline-three uitk-spacing-padding-block-three">
        Search flights
      </h1>
      <div
        data-testid="simple-separator"
        className="uitk-spacing uitk-spacing-padding-blockstart-six"
      />
      <div id="flight-search-form-1" data-testid="flight-search-form-1">
        <div data-testid="flight-search-form-reflection">
          <div data-stid="search-form-with-reflection">
            <div className="uitk-layout-flex uitk-layout-flex-align-items-center uitk-layout-flex-gap-three uitk-layout-flex-flex-wrap-wrap">
              <div className="uitk-layout-flex-item">
                <div className="uitk-tabs-container">
                  <ul
                    className="uitk-tabs uitk-tabs-equal-width background-primary uitk-tabs-default uitk-tabs-with-border uitk-tabs-unmounted"
                    role="tablist"
                  >
                    <li
                      data-stid="uitk-tab-active"
                      role="presentation"
                      className="uitk-tab active"
                    >
                      <a
                        href="#FlightSearchForm_ROUND_TRIP"
                        className="uitk-tab-anchor uitk-tab-anchor-selected"
                        aria-controls="FlightSearchForm_ROUND_TRIP"
                        aria-selected="true"
                        role="tab"
                        data-toggle="tab"
                        draggable="false"
                      >
                        <span className="uitk-tab-text">Roundtrip</span>
                      </a>
                    </li>
                    <li role="presentation" className="uitk-tab">
                      <a
                        href="#FlightSearchForm_ONE_WAY"
                        className="uitk-tab-anchor"
                        aria-controls="FlightSearchForm_ONE_WAY"
                        aria-selected="false"
                        role="tab"
                        data-toggle="tab"
                        draggable="false"
                      >
                        <span className="uitk-tab-text">One-way</span>
                      </a>
                    </li>
                    <li role="presentation" className="uitk-tab">
                      <a
                        href="#FlightSearchForm_MULTI_CITY"
                        className="uitk-tab-anchor"
                        aria-controls="FlightSearchForm_MULTI_CITY"
                        aria-selected="false"
                        role="tab"
                        data-toggle="tab"
                        draggable="false"
                      >
                        <span className="uitk-tab-text">Multi-city</span>
                      </a>
                    </li>
                    <li aria-hidden="true" className="uitk-tab-highlighter" />
                  </ul>
                </div>
              </div>
              <div className="uitk-layout-flex-item">
                <form className="uitk-form has-required-indicator">
                  <div
                    id="FlightSearchForm_ROUND_TRIP"
                    data-testid="FlightSearchForm_ROUND_TRIP"
                    className="uitk-spacing uitk-spacing-margin-blockstart-six"
                  >
                    <div className="uitk-layout-flex uitk-layout-flex-align-content-flex-start uitk-layout-flex-justify-content-flex-start uitk-layout-flex-gap-three uitk-layout-flex-flex-wrap-wrap">
                      <div className="uitk-layout-flex-item uitk-layout-flex-item-max-width-half_width uitk-layout-flex-item-flex-basis-half_width">
                        <div className="uitk-input-swapper uitk-input-swapper-horizlayout-true">
                          <div className="uitk-input-swapper-start-input">
                            {/* ... (rest of the input) */}
                          </div>
                          <button
                            aria-label="Swap origin and destination values"
                            data-context="uitk-form-context"
                            type="button"
                            className="uitk-button uitk-button-medium uitk-button-only-icon uitk-button-secondary uitk-input-swapper-toggle"
                          >
                            {/* ... (swap icon SVG) */}
                          </button>
                          <div className="uitk-input-swapper-end-input">
                            {/* ... (rest of the input) */}
                          </div>
                        </div>
                      </div>
                      <div className="uitk-layout-flex-item uitk-layout-flex-item-flex-grow-2">
                        <div className="uitk-layout-flex uitk-layout-flex-flex-direction-row uitk-layout-flex-gap-three uitk-layout-flex-item uitk-date-fields uitk-layout-flex-item-flex-grow-1 uitk-date-fields-wrapper">
                          <div className="uitk-layout-flex-item uitk-layout-flex-item-flex-basis-zero uitk-layout-flex-item-flex-grow-1 uitk-date-field-wrapper">
                            <div className="uitk-date-picker-menu uitk-menu">
                              {/* ... (rest of the date picker) */}
                            </div>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          data-stid="EGDSDateRangePicker-StartDate"
                          name="EGDSDateRangePicker-StartDate-date_form_field"
                          defaultValue="2023-12-04"
                        />
                        <input
                          type="hidden"
                          data-stid="EGDSDateRangePicker-EndDate"
                          name="EGDSDateRangePicker-EndDate-date_form_field"
                          defaultValue="2023-12-05"
                        />
                      </div>
                      <button
                        id="search_button"
                        type="submit"
                        aria-label="Search"
                        className="uitk-button uitk-button-large uitk-button-has-text uitk-button-primary"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                  <input type="hidden" name="" defaultValue="" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;
