"use server";

// Email sign up
export const EmailSignUp = () => {
  try {
    console.log("calling datya from server");

    // return {
    //     status: "success",
    //     payload: ""
    // }
  } catch (error) {
    // return {
    //     status: "error",
    //     payload: error
    // }
  }
};

export const EmailSend = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  try {
    console.log("Sending Email server");

    return {
      status: "success",
      payload: data,
    };
  } catch (error) {
    return {
      status: "error",
      payload: error,
    };
  }
};
