const API_KEY = "AIzaSyCNmRfMIU1Pz0AvLrrHWah8b8HA8zgQsx0";

const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

export const signUp = (email, password) => {
  const body = {
    email,
    password,
    returnSecureToken: true,
  };

  return fetch(SIGN_UP_URL, {
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.ok) {
        console.log(response)
        return response;
      }

      return Promise.reject(response);
    })
    .then((response) => response.json())
    .then((data) => {
      const { localId, idToken, email } = data;

      localStorage.setItem("localId", localId);
      localStorage.setItem("idToken", idToken);
      localStorage.setItem("email", email);

      return data;

    });
};
