const API_KEY = "AIzaSyCNmRfMIU1Pz0AvLrrHWah8b8HA8zgQsx0";

const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

export const signIn = (email, password) => {
  const body = {
    email,
    password,
    returnSecureToken: true,
  };

  return fetchData(SIGN_IN_URL, body)
    .then((response) => response.json())
    .then((data) => {
      const { localId, idToken } = data;

      localStorage.setItem("localId", localId);
      localStorage.setItem("idToken", idToken);
      localStorage.setItem("email", email);
      return data;
    });
};

export const fetchData = (URL, body) => {
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(body),
  }).then((response) => {
    if (response.ok) {
      return response;
    }

    return Promise.reject(response);
  });
};

export const isTokenInStorage = () => {
  const token = localStorage.getItem("idToken");
  return token ? true : false;
};

export const logOut = () => {
  localStorage.removeItem("localId");
  localStorage.removeItem("idToken");
  localStorage.removeItem("email");
};
