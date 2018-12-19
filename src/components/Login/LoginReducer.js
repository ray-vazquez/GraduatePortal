import * as types from "../../constants/actionTypes";

// *******  FOR DEVELOPMENT ONLY - this is the only way I could get photos & resumes to work
import billPic from "../../services/mock-ajax/bill_profile_pic.jpg";
import billResume from "../../services/mock-ajax/william_peirce_resume.pdf";
import noPic from "../../services/mock-ajax/no-profile.svg";

const LoginReducer = (
  state = {
    isLoginInvalid: false,
    isLoading: false,
    hasError: false,
    validationState: null,
    profiles: {
      AH7393MN7: {
        id: "AH7393MN7",
        isActive: 1,
        firstName: "Bill",
        lastName: "Peirce",
        image: billPic, // this will be a url in actual profile
        skills: ["HTML", "CSS", "JavaScript", "JQuery", "React"],
        email: "queensburybill@gmail.com",
        phone: "518-555-6666",
        story:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        yearOfGrad: "2019",
        links: {
          github: "https://github.com/queensburybill",
          linkedin: "https://www.linkedin.com/in/williampeirce/",
          website: "" // include logic to handle the absence of a link
        },
        resume: billResume // this will be a url in actual profile
      },
      GD800JZ43: {
        id: "GD800JZ43",
        isActive: 1,
        firstName: "Sandra",
        lastName: "Oh",
        image: noPic, // this will be a url to a default profile image in actual profile
        skills: ["HTML", "CSS", "JavaScript", "Sass", "React", "Redux"],
        email: "./maryjones@gmail.com",
        phone: "518-666-6666",
        story:
          "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        yearOfGrad: "2018",
        links: {
          github: "https://github.com/Louis345",
          linkedin: "https://www.linkedin.com/in/sandra-oh-468a083",
          website: "https://twitter.com/IamSandraOh"
        },
        resume: "" // include logic to handle the absence of a resume
      }
    }
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN_FULFILLED: {
      const { isSuccess } = action.payload;
      return isSuccess
        ? {
            ...state,
            isLoginInvalid: false,
            isLoading: false,
            hasError: false,
            validationState: "success"
          }
        : {
            ...state,
            isLoginInvalid: true,
            isLoading: false,
            hasError: false,
            validationState: "error"
          };
      }
    case types.LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        isLoginInvalid: false
      };
    case types.LOGIN_REJECTED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        isLoginInvalid: false
      };
    default:
      return state;
  }
};

export default LoginReducer;