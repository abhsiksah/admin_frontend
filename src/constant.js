import firebase from "firebase/app";
import "firebase/auth";

//export const BASE_URL = "http://localhost/vendor";
export const BASE_URL = "https://vendor.badidukkan.com/api";

export const uiConfig = {
  signInOptions: [
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      // providerName: "Mobile number",
      defaultCountry: "IN",
      // fullLabel: "Vendor Login",
      whitelistedCountries: ["IN", "+91"],
    },
  ],
  privacyPolicyUrl: function () {
    window.location.assign("https://badidukkan.com/media/privacy-policy");
  },
  tosUrl: "https://badidukkan.com/media/privacy-policy/",
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      return false;
    },
  },
};
