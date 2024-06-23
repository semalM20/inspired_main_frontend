const backendDomain = "https://api.inspiredstudio-academy.com";
// const backendDomain = "https://inspired-studio-academy.onrender.com";
// const backendDomain = "http://localhost:5900";
const SummaryApi = {
  signUP: {
    url: `${backendDomain}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomain}/api/login`,
    method: "post",
  },
  current_user: {
    url: `${backendDomain}/api/user-details`,
    method: "get",
  },
  logout_user: {
    url: `${backendDomain}/api/userLogout`,
    method: "get",
  },

  allUser: {
    url: `${backendDomain}/api/all-user`,
    method: "get",
  },
  updateUser: {
    url: `${backendDomain}/api/update-user`,
    method: "post",
  },

  bookSlot: {
    url: `${backendDomain}/api/book-slot`,
    method: "post",
  },
  allSlot: {
    url: `${backendDomain}/api/all-slot`,
    method: "get",
  },
  allSubscription: {
    url: `${backendDomain}/api/all-subscription`,
    method: "get",
  },
  allProduct: {
    url: `${backendDomain}/api/all-product`,
    method: "get",
  },
  forgotPassword: {
    url: `${backendDomain}/api/forgotPassword`,
    method: "post",
  },
  resetPassword: {
    url: `${backendDomain}/api/resetPassword`,
    method: "post",
  },
  payment: {
    url: `${backendDomain}/api/payment`,
    method: "post",
  },
  postReviews: {
    url: `${backendDomain}/api/post-reviews`,
    method: "post",
  },
  getReviews: {
    url: `${backendDomain}/api/get-reviews`,
    method: "get",
  },
  BeginnerCourseSlots: {
    url: `${backendDomain}/api/beginner-course-slots`,
    method: "get",
  },
  addBeginnerCourseSlots: {
    url: `${backendDomain}/api/add-beginner-course-slots`,
    method: "post",
  },
};

export default SummaryApi;
