/**
 * Sets a cookie with the given name, value, and expiry time.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {number} expiryDay - The number of days until the cookie expires.
 * @return {void} This function does not return a value.
 */
export function setCookie(name: string, value: string, expiryDay: number) {
  const date = new Date();
  date.setTime(date.getTime() + expiryDay * 24 * 60 * 60 * 1000);
  let expiry = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expiry + ";path=/";
}


/**
 * Deletes the specified cookie by setting its expiration date to the past.
 *
 * @param {string} cookieName - The name of the cookie to be deleted
 * @return {void}
 */
export const deleteCookie = () => {
  var allCookies = document.cookie.split(";");

  const date = new Date();
  let expires = "expires=" + date.toUTCString();
  for (var i = 0; i < allCookies.length; i++) {
    var cookie = allCookies[i];
      document.cookie = cookie + "=" + "" + ";" + expires + `;path=/`;
  }
};

/**
 * Logs the user out by deleting the authentication cookie and reloading the page.
 * @returns {void}
 */
export const handleLogout = () => {
    deleteCookie()
    window.location.reload()
  }


export const sendApiRequest = async(endpoint:string,method:string,headers:HeadersInit,body?:object)=>{
  try{
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  }catch(error){
    console.error(`Error sending ${method} request to ${endpoint}:`, error);
    throw error;
  }
}

export function jsonResponse(data:object, status:number, headerOptions = {}) {
  return new Response(JSON.stringify(data), {
    status: status,
    headers: {
      "content-type": "application/json",
      ...headerOptions,
    },
  });
}