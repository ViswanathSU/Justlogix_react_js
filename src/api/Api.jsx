import Cookie from 'js-cookie'
export const BASE_URL = "https://melodi-proprietorial-hue.ngrok-free.dev";

// REGISTER USER
export const registerUser = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Server Error");
    }

    const data = await response.json();
    return { status: "success", data };
  } catch (error) {
    return { status: "error", message: "Network Error", error };
  }
};

// LOGIN USER comparing whether the data is present in db.json
export const loginUser = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data,"data")

    if (response.ok) {
      return { status: "success", msg: data.msg, user: data.user };
      //  cookies.set("cookieToken", token) 
    }
    if(rememberMe){
      Cookie.set("userEmail",formData.email,{expires: 7});
      Cookie.set("userToken",DataToken||"dummy token",{expires: 7});
    }

    // Backend sends "Invalid Credentials"
    return { status: "error", message: data.msg || "Invalid Credentials" };

  } catch (error) {
    return { status: "error", message: "Network Error", error };
  }
};
