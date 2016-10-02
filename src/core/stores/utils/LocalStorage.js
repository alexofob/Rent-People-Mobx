/* global localStorage */
export const loadProfile = () => {
  try {
    const serializedState = localStorage.getItem('profile');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveProfile = (profile) => {
  // Saves profile data to localStorage
  try {
    const serializedProfile = JSON.stringify(profile);
    localStorage.setItem('profile', serializedProfile);
  } catch (err) {
    // Ignore write errors.
  }
};

export const saveToken = (idToken) => {
  try {
    localStorage.setItem('idToken', idToken);
  } catch (err) {
    // Ignore write errors.
  }
};


export const loadToken = () => {
  // Retrieves the user token from localStorage
  try {
    const idToken = localStorage.getItem('idToken');
    if (idToken === null) {
      return undefined;
    }
    return idToken;
  } catch (err) {
    return undefined;
  }
};

export const removeItem = (item) => {
  // Removes item from localStorage
  try {
    localStorage.remove(item);
  } catch (err) {
  // Ignore remove errors
  }
};
