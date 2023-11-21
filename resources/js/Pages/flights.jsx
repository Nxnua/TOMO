export default function Flights() { 
	return ( 

<div _ngcontent-mfh-c117="" className="container">
  <div _ngcontent-mfh-c117="" className="booking-wrapper" id="">
    <ul
      _ngcontent-mfh-c117=""
      id="myTab"
      role="tablist"
      className="nav nav-tabs ng-star-inserted"
    >
      <li
        _ngcontent-mfh-c117=""
        role="tab"
        className="nav-item ng-star-inserted"
      >
        <a
          _ngcontent-mfh-c117=""
          href="javascript:void(0);"
          role="tab"
          aria-selected="true"
          className="nav-link active"
          id="book-tab-flights"
          aria-controls="flights"
        >
          <span
            _ngcontent-mfh-c117=""
            alt="icon"
            className="nav-tab-icon bw-ic-tab-ft"
          />
          <label _ngcontent-mfh-c117="">Book a flight</label>
        </a>
      </li>
      <li
        _ngcontent-mfh-c117=""
        role="tab"
        className="nav-item ng-star-inserted"
      >
        <a
          _ngcontent-mfh-c117=""
          href="javascript:void(0);"
          role="tab"
          aria-selected="true"
          className="nav-link"
          id="book-tab-flightsandhotels"
          aria-controls="flightsandhotels"
        >
          <span
            _ngcontent-mfh-c117=""
            alt="icon"
            className="nav-tab-icon bw-ic-tab-fh"
          />
          <label _ngcontent-mfh-c117="">Qatar Stopover</label>
        </a>
      </li>
      <li
        _ngcontent-mfh-c117=""
        role="tab"
        className="nav-item ng-star-inserted"
      >
        <a
          _ngcontent-mfh-c117=""
          href="javascript:void(0);"
          role="tab"
          aria-selected="true"
          className="nav-link"
          id="book-tab-managebooking"
          aria-controls="managebooking"
        >
          <span
            _ngcontent-mfh-c117=""
            alt="icon"
            className="nav-tab-icon bw-ic-tab-mb"
          />
          <label _ngcontent-mfh-c117="">Manage / Check in</label>
        </a>
      </li>
      <li
        _ngcontent-mfh-c117=""
        role="tab"
        className="nav-item ng-star-inserted"
      >
        <a
          _ngcontent-mfh-c117=""
          href="javascript:void(0);"
          role="tab"
          aria-selected="true"
          className="nav-link"
          id="book-tab-flightstatus"
          aria-controls="flightstatus"
        >
          <span
            _ngcontent-mfh-c117=""
            alt="icon"
            className="nav-tab-icon bw-ic-tab-fs"
          />
          <label _ngcontent-mfh-c117="">Flight status</label>
        </a>
      </li>
      {/**/}
    </ul>
    {/**/}
    <div
      _ngcontent-mfh-c117=""
      id="book"
      className="tab-content ng-star-inserted"
    >
      <div _ngcontent-mfh-c117="" className="accordion-item">
        {/**/}
        <div
          _ngcontent-mfh-c117=""
          role="tabpanel"
          id="flights"
          aria-labelledby="book-tab-flights"
          className="tab-pane active ng-star-inserted"
        >
          <app-flights
            _ngcontent-mfh-c117=""
            className="flightsearch-form row"
            _nghost-mfh-c97=""
          >
            <div
              _ngcontent-mfh-c97=""
              className="col-12 ng-untouched ng-valid ng-dirty"
            >
              <div _ngcontent-mfh-c97="" className="col-12">
                <div
                  _ngcontent-mfh-c97=""
                  aria-label="Please Select trip type"
                  className="form-controls triptype-custom-radio col-12"
                >
                  <div _ngcontent-mfh-c97="" className="custom-radio pr-4">
                    <input
                      _ngcontent-mfh-c97=""
                      type="radio"
                      id="returntrip"
                      name="triptype"
                      formcontrolname="triptype"
                      ng-model="triptype"
                      tabIndex={0}
                      className="custom-control-input ng-untouched ng-pristine ng-valid"
                    />
                    <label
                      _ngcontent-mfh-c97=""
                      htmlFor="returntrip"
                      className="custom-control-label"
                    >
                      Return{" "}
                    </label>
                  </div>
                  <div _ngcontent-mfh-c97="" className="custom-radio">
                    <input
                      _ngcontent-mfh-c97=""
                      type="radio"
                      id="onewaytrip"
                      name="triptype"
                      formcontrolname="triptype"
                      ng-model="triptype"
                      className="custom-control-input ng-untouched ng-pristine ng-valid"
                    />
                    <label
                      _ngcontent-mfh-c97=""
                      htmlFor="onewaytrip"
                      className="custom-control-label"
                    >
                      One way
                    </label>
                  </div>
                  <div _ngcontent-mfh-c97="" className="custom-radio">
                    <input
                      _ngcontent-mfh-c97=""
                      type="radio"
                      id="multicitytrip"
                      name="triptype"
                      formcontrolname="triptype"
                      ng-model="triptype"
                      className="custom-control-input ng-untouched ng-pristine ng-valid"
                    />
                    <label
                      _ngcontent-mfh-c97=""
                      htmlFor="multicitytrip"
                      className="custom-control-label"
                    >
                      Multi-city
                    </label>
                  </div>
                </div>
                <div
                  _ngcontent-mfh-c97=""
                  className="form-controls flightsearch-fields col-12"
                >
                  {/**/}
                  <app-flight-autocomplete
                    _ngcontent-mfh-c97=""
                    formcontrolname="fromToStation"
                    className="col-12 col-md-6 d-md-flex br ng-untouched ng-pristine ng-valid"
                    _nghost-mfh-c93=""
                  >
                    <div
                      _ngcontent-mfh-c93=""
                      className="autocomplete-container ng-untouched ng-pristine ng-valid"
                    >
                      {/**/}
                      <div
                        _ngcontent-mfh-c93=""
                        className="bookfrom col-12 col-md-6"
                      >
                        {/**/}
                        <mat-form-field
                          _ngcontent-mfh-c93=""
                          appearance="fill"
                          className="mat-form-field ng-tns-c44-1 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid ng-star-inserted"
                        >
                          <div className="mat-form-field-wrapper ng-tns-c44-1">
                            <div className="mat-form-field-flex ng-tns-c44-1">
                              {/**/}
                              {/**/}
                              <div className="mat-form-field-infix ng-tns-c44-1">
                                <input
                                  _ngcontent-mfh-c93=""
                                  type="text"
                                  aria-label="From Autocomplete Enter your place"
                                  matinput=""
                                  formcontrolname="origin"
                                  matautocompleteposition="below"
                                  role="combobox"
                                  aria-autocomplete="list"
                                  className="mat-input-element mat-form-field-autofill-control mat-autocomplete-trigger inputfield ng-tns-c44-1 ng-untouched ng-pristine ng-valid cdk-text-field-autofill-monitored"
                                  id="mat-input-0"
                                  aria-invalid="false"
                                  aria-required="false"
                                  autoComplete="off"
                                  aria-expanded="false"
                                  aria-haspopup="listbox"
                                />
                                {/**/}
                                <mat-autocomplete
                                  _ngcontent-mfh-c93=""
                                  role="listbox"
                                  autoactivefirstoption="true"
                                  className="mat-autocomplete ng-tns-c44-1"
                                >
                                  {/**/}
                                </mat-autocomplete>
                                <span className="mat-form-field-label-wrapper ng-tns-c44-1">
                                  <label
                                    className="mat-form-field-label ng-tns-c44-1 mat-empty mat-form-field-empty ng-star-inserted"
                                    id="mat-form-field-label-1"
                                    htmlFor="mat-input-0"
                                    aria-owns="mat-input-0"
                                  >
                                    {/**/}
                                    <mat-label
                                      _ngcontent-mfh-c93=""
                                      id="origin"
                                      className="ng-tns-c44-1 ng-star-inserted"
                                    >
                                      From
                                    </mat-label>
                                    {/**/}
                                    {/**/}
                                  </label>
                                  {/**/}
                                </span>
                              </div>
                              {/**/}
                            </div>
                            <div className="mat-form-field-underline ng-tns-c44-1 ng-star-inserted">
                              <span className="mat-form-field-ripple ng-tns-c44-1" />
                            </div>
                            {/**/}
                            <div className="mat-form-field-subscript-wrapper ng-tns-c44-1">
                              {/**/}
                              <div
                                className="mat-form-field-hint-wrapper ng-tns-c44-1 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                style={{
                                  opacity: 1,
                                  transform: "translateY(0%)"
                                }}
                              >
                                {/**/}
                                <div className="mat-form-field-hint-spacer ng-tns-c44-1" />
                              </div>
                              {/**/}
                            </div>
                          </div>
                        </mat-form-field>
                      </div>
                      <a
                        _ngcontent-mfh-c93=""
                        aria-label="swap-location"
                        href="javascript:void(0);"
                        className="bw-ic-ic-swap swap"
                        id="swap-location"
                      />
                      <div
                        _ngcontent-mfh-c93=""
                        className="bookto col-12 col-md-6"
                      >
                        {/**/}
                        <mat-form-field
                          _ngcontent-mfh-c93=""
                          appearance="fill"
                          className="mat-form-field ng-tns-c44-2 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid ng-star-inserted"
                        >
                          <div className="mat-form-field-wrapper ng-tns-c44-2">
                            <div className="mat-form-field-flex ng-tns-c44-2">
                              {/**/}
                              {/**/}
                              <div className="mat-form-field-infix ng-tns-c44-2">
                                <input
                                  _ngcontent-mfh-c93=""
                                  type="text"
                                  matinput=""
                                  aria-label="To Autocomplete Enter your place"
                                  formcontrolname="destination"
                                  matautocompleteposition="below"
                                  className="mat-input-element mat-form-field-autofill-control mat-autocomplete-trigger inputfield ng-tns-c44-2 ng-untouched ng-pristine ng-valid cdk-text-field-autofill-monitored"
                                  id="mat-input-1"
                                  aria-invalid="false"
                                  aria-required="false"
                                  autoComplete="off"
                                  role="combobox"
                                  aria-autocomplete="list"
                                  aria-expanded="false"
                                  aria-haspopup="listbox"
                                />
                                {/**/}
                                <mat-autocomplete
                                  _ngcontent-mfh-c93=""
                                  autoactivefirstoption="true"
                                  className="mat-autocomplete ng-tns-c44-2"
                                >
                                  {/**/}
                                </mat-autocomplete>
                                <span className="mat-form-field-label-wrapper ng-tns-c44-2">
                                  <label
                                    className="mat-form-field-label ng-tns-c44-2 mat-empty mat-form-field-empty ng-star-inserted"
                                    id="mat-form-field-label-3"
                                    htmlFor="mat-input-1"
                                    aria-owns="mat-input-1"
                                  >
                                    {/**/}
                                    <mat-label
                                      _ngcontent-mfh-c93=""
                                      id="destination"
                                      className="ng-tns-c44-2 ng-star-inserted"
                                    >
                                      To
                                    </mat-label>
                                    {/**/}
                                    {/**/}
                                  </label>
                                  {/**/}
                                </span>
                              </div>
                              {/**/}
                            </div>
                            <div className="mat-form-field-underline ng-tns-c44-2 ng-star-inserted">
                              <span className="mat-form-field-ripple ng-tns-c44-2" />
                            </div>
                            {/**/}
                            <div className="mat-form-field-subscript-wrapper ng-tns-c44-2">
                              {/**/}
                              <div
                                className="mat-form-field-hint-wrapper ng-tns-c44-2 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                style={{
                                  opacity: 1,
                                  transform: "translateY(0%)"
                                }}
                              >
                                {/**/}
                                <div className="mat-form-field-hint-spacer ng-tns-c44-2" />
                              </div>
                              {/**/}
                            </div>
                          </div>
                        </mat-form-field>
                      </div>
                    </div>
                  </app-flight-autocomplete>
                  {/**/}
                  <app-calendar
                    _ngcontent-mfh-c97=""
                    formcontrolname="departnReturn"
                    className="col-12 col-md-3 d-md-flex br ng-tns-c92-0 ng-untouched ng-pristine ng-valid ng-star-inserted"
                    _nghost-mfh-c92=""
                  >
                    <div _ngcontent-mfh-c92="" className="col-12 ng-tns-c92-0">
                      <form
                        _ngcontent-mfh-c92=""
                        noValidate=""
                        className="row-cols-sm-auto ng-tns-c92-0 ng-untouched ng-pristine ng-valid"
                      >
                        {/**/}
                        <div
                          _ngcontent-mfh-c92=""
                          className="col-12 calwrap ng-tns-c92-0"
                        >
                          {/**/}
                          <div
                            _ngcontent-mfh-c92=""
                            className="ng-tns-c92-0 dp-hidden position-absolute range"
                          >
                            <div
                              _ngcontent-mfh-c92=""
                              className="input-group inputgroup depart ng-tns-c92-0"
                            >
                              <input
                                _ngcontent-mfh-c92=""
                                ngbdatepicker=""
                                aria-label="Please enter depart date in the format dd space mmm space yyyy"
                                autoComplete="off"
                                tabIndex={-1}
                                className="inputfield form-control date-picker ng-tns-c92-0"
                                id="datepicker"
                                name="dp"
                              />
                              {/**/}
                              <span
                                _ngcontent-mfh-c92=""
                                className="ng-tns-c92-0 calLabel active"
                              >
                                Departure
                              </span>
                            </div>
                          </div>
                          <div
                            _ngcontent-mfh-c92=""
                            className="input-group returned ng-tns-c92-0 ng-star-inserted"
                          >
                            <div
                              _ngcontent-mfh-c92=""
                              className="col-6 ng-tns-c92-0"
                            >
                              <div
                                _ngcontent-mfh-c92=""
                                className="inputgroup ng-tns-c92-0"
                              >
                                <input
                                  _ngcontent-mfh-c92=""
                                  name="dpFromDate"
                                  id="dpFromDate"
                                  aria-label="Please enter depart date in the format dd space mmm space yyyy"
                                  tabIndex={0}
                                  formcontrolname="departureDate"
                                  autoComplete="off"
                                  className="inputfield form-control ng-tns-c92-0 ng-untouched ng-pristine ng-valid"
                                />
                                <span
                                  _ngcontent-mfh-c92=""
                                  className="ng-tns-c92-0 calLabel active"
                                >
                                  Departure
                                </span>
                              </div>
                            </div>
                            <div
                              _ngcontent-mfh-c92=""
                              className="col-6 ng-tns-c92-0"
                            >
                              <div
                                _ngcontent-mfh-c92=""
                                className="inputgroup ng-tns-c92-0"
                              >
                                <input
                                  _ngcontent-mfh-c92=""
                                  name="dpToDate"
                                  formcontrolname="returnDate"
                                  autoComplete="off"
                                  aria-label="Please enter return date in the format dd space mmm space yyyy"
                                  id="dpToDate"
                                  className="inputfield form-control ng-tns-c92-0 ng-untouched ng-pristine ng-valid"
                                />
                                <span
                                  _ngcontent-mfh-c92=""
                                  className="ng-tns-c92-0 calLabel active"
                                >
                                  Return
                                </span>
                              </div>
                            </div>
                            {/**/}
                          </div>
                          {/**/}
                          <div
                            _ngcontent-mfh-c92=""
                            aria-live="polite"
                            className="ng-tns-c92-0"
                          >
                            {/**/}
                            {/**/}
                          </div>
                        </div>
                      </form>
                    </div>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                  </app-calendar>
                  <app-passenger
                    _ngcontent-mfh-c97=""
                    formcontrolname="passengers"
                    className="col-12 col-md-3 d-md-flex ng-untouched ng-valid ng-dirty"
                    _nghost-mfh-c95=""
                  >
                    <div
                      _ngcontent-mfh-c95=""
                      id="passenger-picker"
                      className="passengers-picker-container passenger-desktop"
                    >
                      <div
                        _ngcontent-mfh-c95=""
                        className="passenger-picker-field"
                      >
                        <mat-form-field
                          _ngcontent-mfh-c95=""
                          appearance="fill"
                          className="mat-form-field ng-tns-c44-3 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-untouched ng-pristine ng-valid ng-star-inserted"
                        >
                          <div className="mat-form-field-wrapper ng-tns-c44-3">
                            <div className="mat-form-field-flex ng-tns-c44-3">
                              {/**/}
                              {/**/}
                              <div className="mat-form-field-infix ng-tns-c44-3">
                                <input
                                  _ngcontent-mfh-c95=""
                                  matinput=""
                                  id="passenger-content"
                                  tabIndex={0}
                                  readOnly="true"
                                  className="mat-input-element mat-form-field-autofill-control inputfield ng-tns-c44-3 ng-untouched ng-pristine ng-valid cdk-text-field-autofill-monitored"
                                  aria-invalid="false"
                                  aria-required="false"
                                />
                                <span
                                  _ngcontent-mfh-c95=""
                                  className="icon-content bw-ic-chev-right ng-tns-c44-3"
                                />
                                <span className="mat-form-field-label-wrapper ng-tns-c44-3">
                                  <label
                                    className="mat-form-field-label ng-tns-c44-3 ng-star-inserted"
                                    id="mat-form-field-label-5"
                                    htmlFor="passenger-content"
                                    aria-owns="passenger-content"
                                  >
                                    {/**/}
                                    <mat-label
                                      _ngcontent-mfh-c95=""
                                      className="ng-tns-c44-3 ng-star-inserted"
                                    >
                                      Passengers / Class
                                    </mat-label>
                                    {/**/}
                                    {/**/}
                                  </label>
                                  {/**/}
                                </span>
                              </div>
                              {/**/}
                            </div>
                            <div className="mat-form-field-underline ng-tns-c44-3 ng-star-inserted">
                              <span className="mat-form-field-ripple ng-tns-c44-3" />
                            </div>
                            {/**/}
                            <div className="mat-form-field-subscript-wrapper ng-tns-c44-3">
                              {/**/}
                              <div
                                className="mat-form-field-hint-wrapper ng-tns-c44-3 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                style={{
                                  opacity: 1,
                                  transform: "translateY(0%)"
                                }}
                              >
                                {/**/}
                                <div className="mat-form-field-hint-spacer ng-tns-c44-3" />
                              </div>
                              {/**/}
                            </div>
                          </div>
                        </mat-form-field>
                      </div>
                      <div
                        _ngcontent-mfh-c95=""
                        id="overlay"
                        className="passengers-drop-ang ng-untouched ng-pristine ng-valid"
                      >
                        <div
                          _ngcontent-mfh-c95=""
                          className="col-sm-12 col-xs-12 paxbar-ang"
                        >
                          <button
                            _ngcontent-mfh-c95=""
                            className="close-passenger float-right bw-ic-close"
                          />
                          <div _ngcontent-mfh-c95="" className="pasng-label">
                            Passengers
                          </div>
                          <div
                            _ngcontent-mfh-c95=""
                            className="row mx-auto adult-row"
                          >
                            <label
                              _ngcontent-mfh-c95=""
                              htmlFor="adult"
                              className="col-6 px-0"
                            >
                              <strong _ngcontent-mfh-c95="">Adults</strong>
                              <span
                                _ngcontent-mfh-c95=""
                                className="ng-star-inserted"
                              >
                                12+ years
                              </span>
                              {/**/}
                              {/**/}
                            </label>
                            <div _ngcontent-mfh-c95="" className="col px-0" />
                            <div
                              _ngcontent-mfh-c95=""
                              className="col-5 d-flex fieldwrap pb-2"
                            >
                              <button
                                _ngcontent-mfh-c95=""
                                aria-label="Decrease number of Adult passengers"
                                type="button"
                                tabIndex={-1}
                                className="pax-btn minusbtn"
                              >
                                <abbr
                                  _ngcontent-mfh-c95=""
                                  className="noVisible"
                                >
                                  decrease adult count
                                </abbr>
                              </button>
                              <div
                                _ngcontent-mfh-c95=""
                                className="col-4 no-gutter"
                              >
                                <div
                                  _ngcontent-mfh-c95=""
                                  className="select-style"
                                >
                                  <select
                                    _ngcontent-mfh-c95=""
                                    id="adult"
                                    formcontrolname="adult"
                                    aria-label="Use up and down arrow key to change value"
                                    className="regular-select-element ng-untouched ng-pristine ng-valid"
                                  >
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={1}
                                      className="ng-star-inserted"
                                    >
                                      1
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={2}
                                      className="ng-star-inserted"
                                    >
                                      2
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={3}
                                      className="ng-star-inserted"
                                    >
                                      3
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={4}
                                      className="ng-star-inserted"
                                    >
                                      4
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={5}
                                      className="ng-star-inserted"
                                    >
                                      5
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={6}
                                      className="ng-star-inserted"
                                    >
                                      6
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={7}
                                      className="ng-star-inserted"
                                    >
                                      7
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={8}
                                      className="ng-star-inserted"
                                    >
                                      8
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={9}
                                      className="ng-star-inserted"
                                    >
                                      9
                                    </option>
                                    {/**/}
                                  </select>
                                </div>
                              </div>
                              <button
                                _ngcontent-mfh-c95=""
                                aria-label="Increase number of Adult passengers"
                                type="button"
                                tabIndex={-1}
                                className="pax-btn plusbtn"
                              >
                                <abbr
                                  _ngcontent-mfh-c95=""
                                  className="noVisible"
                                >
                                  increase adult count
                                </abbr>
                              </button>
                            </div>
                          </div>
                          {/**/}
                          {/**/}
                          <div _ngcontent-mfh-c95="" className="row mx-auto">
                            <label
                              _ngcontent-mfh-c95=""
                              htmlFor="child"
                              className="col-6 px-0"
                            >
                              <strong _ngcontent-mfh-c95="">Child</strong>
                              <span _ngcontent-mfh-c95="">2-11 years</span>
                            </label>
                            <div
                              _ngcontent-mfh-c95=""
                              className="passengertooltip col-1 px-0"
                            >
                              <a
                                _ngcontent-mfh-c95=""
                                href="javascript:void(0)"
                                aria-describedby="tooltipChild"
                                className="tooltip-icon"
                              >
                                Info
                              </a>
                            </div>
                            <div
                              _ngcontent-mfh-c95=""
                              className="col-5 d-flex fieldwrap pb-2"
                            >
                              <button
                                _ngcontent-mfh-c95=""
                                aria-label="Decrease number of child passengers"
                                type="button"
                                tabIndex={-1}
                                className="pax-btn minusbtn"
                              >
                                <abbr
                                  _ngcontent-mfh-c95=""
                                  className="noVisible"
                                >
                                  decrease child count
                                </abbr>
                              </button>
                              <div
                                _ngcontent-mfh-c95=""
                                className="col-4 no-gutter"
                              >
                                <div
                                  _ngcontent-mfh-c95=""
                                  className="select-style"
                                >
                                  <select
                                    _ngcontent-mfh-c95=""
                                    id="child"
                                    formcontrolname="child"
                                    aria-label="Use up and down arrow key to change value"
                                    className="regular-select-element ng-untouched ng-pristine ng-valid"
                                  >
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={0}
                                      className="ng-star-inserted"
                                    >
                                      0
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={1}
                                      className="ng-star-inserted"
                                    >
                                      1
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={2}
                                      className="ng-star-inserted"
                                    >
                                      2
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={3}
                                      className="ng-star-inserted"
                                    >
                                      3
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={4}
                                      className="ng-star-inserted"
                                    >
                                      4
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={5}
                                      className="ng-star-inserted"
                                    >
                                      5
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={6}
                                      className="ng-star-inserted"
                                    >
                                      6
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={7}
                                      className="ng-star-inserted"
                                    >
                                      7
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={8}
                                      className="ng-star-inserted"
                                    >
                                      8
                                    </option>
                                    {/**/}
                                  </select>
                                </div>
                              </div>
                              <button
                                _ngcontent-mfh-c95=""
                                aria-label="Increase number of child passengers"
                                type="button"
                                tabIndex={-1}
                                className="pax-btn plusbtn"
                              >
                                <abbr
                                  _ngcontent-mfh-c95=""
                                  className="noVisible"
                                >
                                  increase child count
                                </abbr>
                              </button>
                            </div>
                            {/**/}
                          </div>
                          <div _ngcontent-mfh-c95="" className="row mx-auto">
                            <label
                              _ngcontent-mfh-c95=""
                              htmlFor="infant"
                              className="col-6 px-0"
                            >
                              <strong _ngcontent-mfh-c95="">Infant</strong>
                              <span _ngcontent-mfh-c95="">Under 2 years</span>
                            </label>
                            <div
                              _ngcontent-mfh-c95=""
                              className="passengertooltip col-1 px-0"
                            >
                              <a
                                _ngcontent-mfh-c95=""
                                href="javascript:void(0)"
                                aria-describedby="tooltipInfant"
                                className="tooltip-icon"
                              >
                                Info
                              </a>
                            </div>
                            <div
                              _ngcontent-mfh-c95=""
                              className="col-5 d-flex fieldwrap pb-2"
                            >
                              <button
                                _ngcontent-mfh-c95=""
                                aria-label="Decrease number of infant passengers"
                                type="button"
                                tabIndex={-1}
                                className="pax-btn minusbtn"
                              >
                                <abbr
                                  _ngcontent-mfh-c95=""
                                  className="noVisible"
                                >
                                  decrease Infant count
                                </abbr>
                              </button>
                              <div
                                _ngcontent-mfh-c95=""
                                className="col-4 no-gutter"
                              >
                                <div
                                  _ngcontent-mfh-c95=""
                                  className="select-style"
                                >
                                  <select
                                    _ngcontent-mfh-c95=""
                                    id="infant"
                                    formcontrolname="infant"
                                    aria-label="Use up and down arrow key to change value"
                                    className="regular-select-element ng-untouched ng-pristine ng-valid"
                                  >
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={0}
                                      className="ng-star-inserted"
                                    >
                                      0
                                    </option>
                                    <option
                                      _ngcontent-mfh-c95=""
                                      value={1}
                                      className="ng-star-inserted"
                                    >
                                      1
                                    </option>
                                    {/**/}
                                  </select>
                                </div>
                              </div>
                              <button
                                _ngcontent-mfh-c95=""
                                aria-label="Increase number of infant passengers"
                                type="button"
                                tabIndex={-1}
                                className="pax-btn plusbtn"
                              >
                                <abbr
                                  _ngcontent-mfh-c95=""
                                  className="noVisible"
                                >
                                  increase Infant count
                                </abbr>
                              </button>
                            </div>
                            {/**/}
                          </div>
                          <div
                            _ngcontent-mfh-c95=""
                            className="cabin-picker ng-star-inserted"
                          >
                            <div _ngcontent-mfh-c95="" className="cabinlabel">
                              Class
                            </div>
                            <div
                              _ngcontent-mfh-c95=""
                              className="custom-control custom-radio col-md-12 col-12 ng-star-inserted"
                            >
                              <input
                                _ngcontent-mfh-c95=""
                                type="radio"
                                name="cabinclass"
                                formcontrolname="cabinclass"
                                className="custom-control-input ng-untouched ng-pristine ng-valid"
                                id="E"
                              />
                              <label
                                _ngcontent-mfh-c95=""
                                className="custom-control-label"
                                htmlFor="E"
                              >
                                Economy
                              </label>
                            </div>
                            <div
                              _ngcontent-mfh-c95=""
                              className="custom-control custom-radio col-md-12 col-12 ng-star-inserted"
                            >
                              <input
                                _ngcontent-mfh-c95=""
                                type="radio"
                                name="cabinclass"
                                formcontrolname="cabinclass"
                                className="custom-control-input ng-untouched ng-pristine ng-valid"
                                id="B"
                              />
                              <label
                                _ngcontent-mfh-c95=""
                                className="custom-control-label"
                                htmlFor="B"
                              >
                                Premium(Business/First)
                              </label>
                            </div>
                            {/**/}
                          </div>
                          {/**/}
                          {/**/}
                          <div
                            _ngcontent-mfh-c95=""
                            className="confirmBtnBox col-xs-12 col-sm-12 mt-3"
                          >
                            <button
                              _ngcontent-mfh-c95=""
                              type="button"
                              className="col-xs-12 col-sm-12 paxconfirm"
                            >
                              {" "}
                              Confirm{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </app-passenger>
                </div>
                <div _ngcontent-mfh-c97="" tabIndex={-1} className="errorlist">
                  {/**/}
                </div>
                <app-multicity
                  _ngcontent-mfh-c97=""
                  formcontrolname="multiCityArr"
                  className="form-controls col-md-9 ng-untouched ng-valid ng-dirty"
                  _nghost-mfh-c94=""
                  hidden=""
                >
                  <div
                    _ngcontent-mfh-c94=""
                    className="multicity col-12 col-md-12 ng-untouched ng-pristine ng-invalid"
                  >
                    <div
                      _ngcontent-mfh-c94=""
                      formarrayname="multiCityFormArray"
                      className="form-controls col-md-12 px-0 ng-untouched ng-pristine ng-invalid"
                    >
                      <div
                        _ngcontent-mfh-c94=""
                        className="flightsearch-fields col-md-12 d-md-flex ng-star-inserted"
                      >
                        {/**/}
                        <app-flight-autocomplete
                          _ngcontent-mfh-c94=""
                          formcontrolname="multicityFromTo"
                          className="col-12 col-md-8 d-md-flex br ng-untouched ng-pristine ng-invalid"
                          _nghost-mfh-c93=""
                        >
                          <div
                            _ngcontent-mfh-c93=""
                            className="autocomplete-container ng-untouched ng-pristine ng-valid"
                          >
                            {/**/}
                            <div
                              _ngcontent-mfh-c93=""
                              className="bookfrom col-12 col-md-6"
                            >
                              {/**/}
                              <mat-form-field
                                _ngcontent-mfh-c93=""
                                appearance="fill"
                                className="mat-form-field ng-tns-c44-5 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid ng-star-inserted"
                              >
                                <div className="mat-form-field-wrapper ng-tns-c44-5">
                                  <div className="mat-form-field-flex ng-tns-c44-5">
                                    {/**/}
                                    {/**/}
                                    <div className="mat-form-field-infix ng-tns-c44-5">
                                      <input
                                        _ngcontent-mfh-c93=""
                                        type="text"
                                        aria-label="From Autocomplete Enter your place"
                                        matinput=""
                                        formcontrolname="origin"
                                        matautocompleteposition="below"
                                        role="combobox"
                                        aria-autocomplete="list"
                                        className="mat-input-element mat-form-field-autofill-control mat-autocomplete-trigger inputfield ng-tns-c44-5 ng-untouched ng-pristine ng-valid cdk-text-field-autofill-monitored"
                                        id="mat-input-3"
                                        aria-invalid="false"
                                        aria-required="false"
                                        autoComplete="off"
                                        aria-expanded="false"
                                        aria-haspopup="listbox"
                                      />
                                      {/**/}
                                      <mat-autocomplete
                                        _ngcontent-mfh-c93=""
                                        role="listbox"
                                        autoactivefirstoption="true"
                                        className="mat-autocomplete ng-tns-c44-5"
                                      >
                                        {/**/}
                                      </mat-autocomplete>
                                      <span className="mat-form-field-label-wrapper ng-tns-c44-5">
                                        <label
                                          className="mat-form-field-label ng-tns-c44-5 mat-empty mat-form-field-empty ng-star-inserted"
                                          id="mat-form-field-label-7"
                                          htmlFor="mat-input-3"
                                          aria-owns="mat-input-3"
                                        >
                                          {/**/}
                                          <mat-label
                                            _ngcontent-mfh-c93=""
                                            id="origin0"
                                            className="ng-tns-c44-5 ng-star-inserted"
                                          >
                                            From
                                          </mat-label>
                                          {/**/}
                                          {/**/}
                                        </label>
                                        {/**/}
                                      </span>
                                    </div>
                                    {/**/}
                                  </div>
                                  <div className="mat-form-field-underline ng-tns-c44-5 ng-star-inserted">
                                    <span className="mat-form-field-ripple ng-tns-c44-5" />
                                  </div>
                                  {/**/}
                                  <div className="mat-form-field-subscript-wrapper ng-tns-c44-5">
                                    {/**/}
                                    <div
                                      className="mat-form-field-hint-wrapper ng-tns-c44-5 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                      style={{
                                        opacity: 1,
                                        transform: "translateY(0%)"
                                      }}
                                    >
                                      {/**/}
                                      <div className="mat-form-field-hint-spacer ng-tns-c44-5" />
                                    </div>
                                    {/**/}
                                  </div>
                                </div>
                              </mat-form-field>
                            </div>
                            <a
                              _ngcontent-mfh-c93=""
                              aria-label="swap-location"
                              href="javascript:void(0);"
                              className="bw-ic-ic-swap swap"
                              id="swap-location0"
                            />
                            <div
                              _ngcontent-mfh-c93=""
                              className="bookto col-12 col-md-6"
                            >
                              {/**/}
                              <mat-form-field
                                _ngcontent-mfh-c93=""
                                appearance="fill"
                                className="mat-form-field ng-tns-c44-6 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid ng-star-inserted"
                              >
                                <div className="mat-form-field-wrapper ng-tns-c44-6">
                                  <div className="mat-form-field-flex ng-tns-c44-6">
                                    {/**/}
                                    {/**/}
                                    <div className="mat-form-field-infix ng-tns-c44-6">
                                      <input
                                        _ngcontent-mfh-c93=""
                                        type="text"
                                        matinput=""
                                        aria-label="To Autocomplete Enter your place"
                                        formcontrolname="destination"
                                        matautocompleteposition="below"
                                        className="mat-input-element mat-form-field-autofill-control mat-autocomplete-trigger inputfield ng-tns-c44-6 ng-untouched ng-pristine ng-valid cdk-text-field-autofill-monitored"
                                        id="mat-input-4"
                                        aria-invalid="false"
                                        aria-required="false"
                                        autoComplete="off"
                                        role="combobox"
                                        aria-autocomplete="list"
                                        aria-expanded="false"
                                        aria-haspopup="listbox"
                                      />
                                      {/**/}
                                      <mat-autocomplete
                                        _ngcontent-mfh-c93=""
                                        autoactivefirstoption="true"
                                        className="mat-autocomplete ng-tns-c44-6"
                                      >
                                        {/**/}
                                      </mat-autocomplete>
                                      <span className="mat-form-field-label-wrapper ng-tns-c44-6">
                                        <label
                                          className="mat-form-field-label ng-tns-c44-6 mat-empty mat-form-field-empty ng-star-inserted"
                                          id="mat-form-field-label-9"
                                          htmlFor="mat-input-4"
                                          aria-owns="mat-input-4"
                                        >
                                          {/**/}
                                          <mat-label
                                            _ngcontent-mfh-c93=""
                                            id="destination0"
                                            className="ng-tns-c44-6 ng-star-inserted"
                                          >
                                            To
                                          </mat-label>
                                          {/**/}
                                          {/**/}
                                        </label>
                                        {/**/}
                                      </span>
                                    </div>
                                    {/**/}
                                  </div>
                                  <div className="mat-form-field-underline ng-tns-c44-6 ng-star-inserted">
                                    <span className="mat-form-field-ripple ng-tns-c44-6" />
                                  </div>
                                  {/**/}
                                  <div className="mat-form-field-subscript-wrapper ng-tns-c44-6">
                                    {/**/}
                                    <div
                                      className="mat-form-field-hint-wrapper ng-tns-c44-6 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                      style={{
                                        opacity: 1,
                                        transform: "translateY(0%)"
                                      }}
                                    >
                                      {/**/}
                                      <div className="mat-form-field-hint-spacer ng-tns-c44-6" />
                                    </div>
                                    {/**/}
                                  </div>
                                </div>
                              </mat-form-field>
                            </div>
                          </div>
                        </app-flight-autocomplete>
                        {/**/}
                        <app-calendar
                          _ngcontent-mfh-c94=""
                          formcontrolname="multicityDepart"
                          className="col-12 col-md-4 ng-tns-c92-4 ng-untouched ng-pristine ng-valid ng-star-inserted"
                          _nghost-mfh-c92=""
                        >
                          <div
                            _ngcontent-mfh-c92=""
                            className="col-12 ng-tns-c92-4"
                          >
                            <form
                              _ngcontent-mfh-c92=""
                              noValidate=""
                              className="row-cols-sm-auto ng-tns-c92-4 ng-untouched ng-pristine ng-invalid"
                            >
                              {/**/}
                              <div
                                _ngcontent-mfh-c92=""
                                className="col-12 calwrap ng-tns-c92-4"
                              >
                                {/**/}
                                <div
                                  _ngcontent-mfh-c92=""
                                  className="ng-tns-c92-4 dp-hidden position-absolute range"
                                >
                                  <div
                                    _ngcontent-mfh-c92=""
                                    className="input-group inputgroup depart ng-tns-c92-4"
                                  >
                                    <input
                                      _ngcontent-mfh-c92=""
                                      ngbdatepicker=""
                                      aria-label="Please enter depart date in the format dd space mmm space yyyy"
                                      autoComplete="off"
                                      tabIndex={-1}
                                      className="inputfield form-control date-picker ng-tns-c92-4"
                                      id="datepicker0"
                                      name="dp0"
                                    />
                                    {/**/}
                                    <span
                                      _ngcontent-mfh-c92=""
                                      className="ng-tns-c92-4 calLabel active"
                                    >
                                      Departure
                                    </span>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-mfh-c92=""
                                  className="input-group returned ng-tns-c92-4 ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-mfh-c92=""
                                    className="col-6 ng-tns-c92-4"
                                  >
                                    <div
                                      _ngcontent-mfh-c92=""
                                      className="inputgroup ng-tns-c92-4"
                                    >
                                      <input
                                        _ngcontent-mfh-c92=""
                                        name="dpFromDate"
                                        id="dpFromDate"
                                        aria-label="Please enter depart date in the format dd space mmm space yyyy"
                                        tabIndex={0}
                                        formcontrolname="departureDate"
                                        autoComplete="off"
                                        className="inputfield form-control ng-tns-c92-4 ng-untouched ng-pristine ng-invalid"
                                      />
                                      <span
                                        _ngcontent-mfh-c92=""
                                        className="ng-tns-c92-4 calLabel active"
                                      >
                                        Departure
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    _ngcontent-mfh-c92=""
                                    className="col-6 ng-tns-c92-4"
                                  >
                                    <div
                                      _ngcontent-mfh-c92=""
                                      className="inputgroup ng-tns-c92-4"
                                    >
                                      <input
                                        _ngcontent-mfh-c92=""
                                        name="dpToDate"
                                        formcontrolname="returnDate"
                                        autoComplete="off"
                                        aria-label="Please enter return date in the format dd space mmm space yyyy"
                                        id="dpToDate"
                                        className="inputfield form-control ng-tns-c92-4 ng-untouched ng-pristine ng-valid"
                                      />
                                      <span
                                        _ngcontent-mfh-c92=""
                                        className="ng-tns-c92-4 calLabel active"
                                      >
                                        Return
                                      </span>
                                    </div>
                                  </div>
                                  {/**/}
                                </div>
                                {/**/}
                                <div
                                  _ngcontent-mfh-c92=""
                                  aria-live="polite"
                                  className="ng-tns-c92-4"
                                >
                                  <div
                                    _ngcontent-mfh-c92=""
                                    className="error-message ng-tns-c92-4 ng-star-inserted"
                                  >
                                    <ul
                                      _ngcontent-mfh-c92=""
                                      className="ng-tns-c92-4 ng-star-inserted"
                                    >
                                      {/**/}
                                      {/**/}
                                    </ul>
                                    {/**/}
                                  </div>
                                  {/**/}
                                  {/**/}
                                </div>
                              </div>
                            </form>
                          </div>
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
                        </app-calendar>
                        {/**/}
                      </div>
                      <div
                        _ngcontent-mfh-c94=""
                        aria-live="polite"
                        className="ng-star-inserted"
                      >
                        {/**/}
                      </div>
                      {/**/}
                      {/**/}
                    </div>
                    <div
                      _ngcontent-mfh-c94=""
                      className="add-flight col-12 ng-star-inserted"
                    >
                      <button _ngcontent-mfh-c94="" className="addbutton">
                        <span _ngcontent-mfh-c94="" className="bw-ic-close" />
                        Add a flight{" "}
                      </button>
                    </div>
                    {/**/}
                  </div>
                </app-multicity>
                <div
                  _ngcontent-mfh-c97=""
                  className="form-controls searchflight-container col-12"
                >
                  <div _ngcontent-mfh-c97="" className="award-booking-wrapper">
                    <app-award-booking _ngcontent-mfh-c97="" _nghost-mfh-c96="">
                      {/**/}
                    </app-award-booking>
                  </div>
                  <div
                    _ngcontent-mfh-c97=""
                    className="promocode col-12 col-md-4 ng-star-inserted"
                  >
                    <a
                      _ngcontent-mfh-c97=""
                      href="javascript:void(0);"
                      id="ihavePromo"
                      aria-label="Add Promo Code"
                      className="promolink"
                    >
                      <span _ngcontent-mfh-c97="" className="bw-ic-close" /> Add
                      promo code{" "}
                    </a>
                    {/**/}
                  </div>
                  {/**/}
                  <div
                    _ngcontent-mfh-c97=""
                    className="formsubmit col-12 col-md-3"
                  >
                    <button
                      _ngcontent-mfh-c97=""
                      type="submit"
                      className="flightsearh-button"
                    >
                      {" "}
                      Search flights{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </app-flights>
        </div>
        {/**/}
        {/**/}
      </div>
      {/**/}
      <div _ngcontent-mfh-c117="" className="accordion-item">
        {/**/}
        {/**/}
      </div>
      <div _ngcontent-mfh-c117="" className="accordion-item">
        {/**/}
        {/**/}
      </div>
      <div _ngcontent-mfh-c117="" className="accordion-item ng-star-inserted">
        {/**/}
        {/**/}
      </div>
      {/**/}
    </div>
    {/**/}
  </div>
</div>

  );
};