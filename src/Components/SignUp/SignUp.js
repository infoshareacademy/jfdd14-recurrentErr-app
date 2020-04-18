import { fetchData } from "../SignIn/SignIn";

const API_KEY = "AIzaSyCNmRfMIU1Pz0AvLrrHWah8b8HA8zgQsx0";

const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

export const signUp = (email, password) => {
  const body = {
    email,
    password,
    returnSecureToken: true,
  };

  return fetchData(SIGN_UP_URL, body)
    .then((response) => response.json())
    .then((data) => {
      const { localId, idToken, email } = data;

      localStorage.setItem("localId", localId);
      localStorage.setItem("idToken", idToken);
      localStorage.setItem("email", email);

      return data;
    });
};
