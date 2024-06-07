import React from "react";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const panValidator = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const aadharValidator = /^\d{12}$/;

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      emailAddress: "",
      password: "",
      showPassword: false,
      passwordConfirmation: "",
      phoneNo: "",
      country: "",
      city: "",
      panNo: "",
      aadharNo: "",
      countryCodes: ["+1", "+91", "+44", "+61"], // Array of country codes
      selectedCountryCode: "+91", // Default selected country code
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      phoneNoError: "",
      countryError: "",
      cityError: "",
      panNoError: "",
      aadharNoError: "",
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(this);
    this.validatePhoneNo = this.validatePhoneNo.bind(this);
    this.validateCountry = this.validateCountry.bind(this);
    this.validateCity = this.validateCity.bind(this);
    this.validatePanNo = this.validatePanNo.bind(this);
    this.validateAadharNo = this.validateAadharNo.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleBlur(event) {
    const { name } = event.target;
    this.validateField(name);
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "firstName",
      "lastName",
      "username",
      "emailAddress",
      "password",
      "passwordConfirmation",
      "phoneNo",
      "country",
      "city",
      "panNo",
      "aadharNo"
    ];
    let isValid = true;
    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });
  }

  validateField(name) {
    let isValid = false;

    if (name === "firstName") isValid = this.validateFirstName();
    else if (name === "lastName") isValid = this.validateLastName();
    else if (name === "username") isValid = this.validateUsername();
    else if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "password") isValid = this.validatePassword();
    else if (name === "passwordConfirmation") isValid = this.validatePasswordConfirmation();
    else if (name === "phoneNo") isValid = this.validatePhoneNo();
    else if (name === "country") isValid = this.validateCountry();
    else if (name === "city") isValid = this.validateCity();
    else if (name === "panNo") isValid = this.validatePanNo();
    else if (name === "aadharNo") isValid = this.validateAadharNo();

    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName;
    if (value.trim() === "") firstNameError = "First Name is required";

    this.setState({ firstNameError });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName;
    if (value.trim() === "") lastNameError = "Last Name is required";

    this.setState({ lastNameError });
    return lastNameError === "";
  }

  validateUsername() {
    let usernameError = "";
    const value = this.state.username;
    if (value.trim() === "") usernameError = "Username is required";

    this.setState({ usernameError });
    return usernameError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim() === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value)) emailAddressError = "Email is not valid";

    this.setState({ emailAddressError });
    return emailAddressError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim() === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value)) passwordError = "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({ passwordError });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    let passwordConfirmationError = "";
    if (this.state.password !== this.state.passwordConfirmation) passwordConfirmationError = "Password does not match Confirmation";

    this.setState({ passwordConfirmationError });
    return passwordConfirmationError === "";
  }

  validatePhoneNo() {
    let phoneNoError = "";
    const value = this.state.phoneNo;
    if (value.trim() === "") phoneNoError = "Phone Number is required";

    this.setState({ phoneNoError });
    return phoneNoError === "";
  }

  validateCountry() {
    let countryError = "";
    const value = this.state.country;
    if (value.trim() === "") countryError = "Country is required";

    this.setState({ countryError });
    return countryError === "";
  }

  validateCity() {
    let cityError = "";
    const value = this.state.city;
    if (value.trim() === "") cityError = "City is required";

    this.setState({ cityError });
    return cityError === "";
  }

  validatePanNo() {
    let panNoError = "";
    const value = this.state.panNo;
    if (value.trim() === "") panNoError = "PAN Number is required";
    else if (!panValidator.test(value)) panNoError = "PAN Number is not valid";

    this.setState({ panNoError });
    return panNoError === "";
  }

  validateAadharNo() {
    let aadharNoError = "";
    const value = this.state.aadharNo;
    if (value.trim() === "") aadharNoError = "Aadhar Number is required";
    else if (!aadharValidator.test(value)) aadharNoError = "Aadhar Number is not valid";

    this.setState({ aadharNoError });
    return aadharNoError === "";
  }

  togglePasswordVisibility() {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
  }

  render() {
    const { showPassword } = this.state;
    return (
      <div className="main">
        <h1><b>Sign Up Form</b></h1>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>Username: {this.state.username}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            <div>Phone Number: {this.state.phoneNo}</div>
            <div>Country: {this.state.country}</div>
            <div>City: {this.state.city}</div>
            <div>PAN Number: {this.state.panNo}</div>
            <div>Aadhar Number: {this.state.aadharNo}</div>
          </div>
        ) : (
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                  className={this.state.firstNameError ? "input-error" : ""}
                />
                {this.state.firstNameError && (
                  <div className="errorMsg">{this.state.firstNameError}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                  className={this.state.lastNameError ? "input-error" : ""}
                />
                {this.state.lastNameError && (
                  <div className="errorMsg">{this.state.lastNameError}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                  className={this.state.usernameError ? "input-error" : ""}
                />
                {this.state.usernameError && (
                  <div className="errorMsg">{this.state.usernameError}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="emailAddress"
                  value={this.state.emailAddress}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                  className={this.state.emailAddressError ? "input-error" : ""}
                />
                {this.state.emailAddressError && (
                  <div className="errorMsg">{this.state.emailAddressError}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                  className={this.state.passwordError ? "input-error" : ""}
                />
                <button type="button" onClick={this.togglePasswordVisibility}>
                  {showPassword ? "Hide" : "Show"} Password
                </button>
                {this.state.passwordError && (
                  <div className="errorMsg">{this.state.passwordError}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="passwordConfirmation"
                  value={this.state.passwordConfirmation}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                  className={this.state.passwordConfirmationError ? "input-error" : ""}
                />
                {this.state.passwordConfirmationError && (
                  <div className="errorMsg">{this.state.passwordConfirmationError}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phoneNo"
                  value={this.state.phoneNo}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                  className={this.state.phoneNoError ? "input-error" : ""}
                />
                {this.state.phoneNoError && (
                  <div className="errorMsg">{this.state.phoneNoError}</div>
                )}
              </div>
              <div className="form-group">
                <select
                  name="country"
                  value={this.state.country}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  className={this.state.countryError ? "input-error" : ""}
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                  {/* Add more countries as needed */}
                </select>
                {this.state.countryError && (
                  <div className="errorMsg">{this.state.countryError}</div>
                )}
              </div>
              <div className="form-group">
                <select
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  className={this.state.cityError ? "input-error" : ""}
                >
                  <option value="">Select City</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  {/* Add more cities as needed */}
                </select>
                {this.state.cityError && (
                  <div className="errorMsg">{this.state.cityError}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="PAN Number"
                  name="panNo"
                  value={this.state.panNo}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                  className={this.state.panNoError ? "input-error" : ""}
                />
                {this.state.panNoError && (
                  <div className="errorMsg">{this.state.panNoError}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Aadhar Number"
                  name="aadharNo"
                  value={this.state.aadharNo}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                  className={this.state.aadharNoError ? "input-error" : ""}
                />
                {this.state.aadharNoError && (
                  <div className="errorMsg">{this.state.aadharNoError}</div>
                )}
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default FormComponent;
