import * as types from "../constants/actionTypes";
// import { searchProfilesRequest } from "../services/api";

// *******  FOR DEVELOPMENT ONLY - this is the only way I could get them to work
import billPic from "../images/bill_profile_pic.jpg";
import sandraPic from "../images/sandra_profile_pic.jpg";

// const ajaxLoading = () => {
//     return {
//       type: types.SEARCH_PROFILES_PENDING
//     };
//   };
  
//   const ajaxSuccess = (payload) => {
//     return {
//       type: types.SEARCH_PROFILES_FULFILLED,
//       payload
//     };
//   };
  
//   const ajaxFailure = () => {
//     return {
//       type: types.SEARCH_PROFILES_REJECTED
//     };
//   };
  
//   export const searchProfiles = (searchInput) => {
//     return dispatch => {
//       dispatch(ajaxLoading());
//       searchProfilesRequest(searchInput)
//         .then((response) => dispatch(ajaxSuccess(response)))
//         .catch(() => dispatch(ajaxFailure()));
//     };
//   };

  export const setSearchInput = (searchInput) => {
    return {
        type: types.SET_SEARCH_INPUT,
        searchInput
    }
  }
  
  // *******  FOR DEVELOPMENT ONLY - fake ajax call to "find" profiles
  export const searchProfiles = (searchInput) => {
    return {
        type: types.SEARCH_PROFILES_FULFILLED,
        payload: { 
            profiles: {
                AH7393MN7: {
                    id: "AH7393MN7",
                    firstName: "Bill",
                    lastName: "Peirce",
                    image: billPic, // this will be a url in actual profile
                    skills: ["HTML", "CSS", "JavaScript", "JQuery", "React"],
                    email: "queensburybill@gmail.com",
                    phone: "518-480-3434",
                    story: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
                    yearOfGrad: "2019",
                    links: {
                        github: "https://github.com/queensburybill",
                        linkedin: "https://www.linkedin.com/in/williampeirce/"
                    },
                    resume: "https://albanycancode/graduateportal/profiles/AH7393MN7/resume"
                },
                GD800JZ43: {
                    id: "GD800JZ43",
                    firstName: "Sandra",
                    lastName: "Oh",
                    image: sandraPic, // this will be a url in actual profile
                    skills: ["HTML", "CSS", "JavaScript", "Sass", "React", "Redux"],
                    email: "./maryjones@gmail.com",
                    phone: "518-666-6666",
                    story: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
                    yearOfGrad: "2018",
                    links: {
                        github: "https://github.com/sandraoh",
                        linkedin: "https://www.linkedin.com/in/sandraoh/"
                    },
                    resume: "https://albanycancode/graduateportal/profiles/GD800JZ43/resume"
                }
            }
        }
    };
  };