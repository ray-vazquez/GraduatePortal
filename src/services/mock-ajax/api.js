import config from "../../config";

// *******  FOR DEVELOPMENT ONLY - this is the only way I could get photos & resumes to work
import billPic from "./bill_profile_pic.jpg";
import billResume from "./william_peirce_resume.pdf";
import altResume from "./alt-resume.pdf";
import noPic from "./no-profile.svg";

const api = `${config.apiUrl}api`;

// Fake rofiles
const profiles = {
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
};

// Regular expressions for matching against request URLs
const regexLogin = /login$/;
const regexFetchAllProfiles = /graduates$/;
const regexCreateProfile = /graduate\/new$/;
const regexEditProfile = /graduate\/\w+\/edit$/;
const regexUploadImage = /graduate\/\w+\/upload-image$/;
const regexDeleteImage = /graduate\/\w+\/delete-image$/;
const regexUploadResume = /graduate\/\w+\/upload-resume$/;
const regexViewResume = /graduate\/\w+\/view-resume$/;
const regexDownloadResume = /graduate\/\w+\/download-resume$/;
const regexDeleteResume = /graduate\/\w+\/delete-resume$/;
const regexDownloadBatchResumes = /download-resumes$/;

// No guarantees these will work with your logic - you may need to rewrite some code for that

const send = (url, data = null, method = "POST") => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      // AJAX REJECTION
      // return reject(); // Uncomment this to fake an AJAX error

      // LOGIN: fullfilled
      if (regexLogin.test(url)) {
        resolve({
          isSuccess: 1, // toggle for authentication
          // isSuccess: 0, // toggle for non-authentication
          message: "Success"
        });
      }

      // FETCH ALL PROFILES: fulfilled
      else if (regexFetchAllProfiles.test(url)) {
        resolve({
          // Toggle the lines below to mimic whether profiles were found or not
          // *********  FOUND:  *********
          isSuccess: 1,
          message: "Success",
          profiles: profiles
          // *********  NOT FOUND:  *********
          // isSuccess: 0,
          // retMessage: "No profiles were found matching your search terms.",
          // profiles: {}
        });
      }

      // CREATE NEW PROFILE: fullfilled
      else if (regexCreateProfile.test(url)) {
        resolve({
          // toggle the lines below to allow or deny profile creation
          // ******  ALLOW  ******
          isSuccess: 1,
          message: "Success"
          // ******  DENY  ******
          // isSuccess: 0,
          // retMessage: "We are unable to create a new profile at this time."
        });
      }

      // EDIT PROFILE: fullfilled ( used for both editing and activating/deactivating profiles )
      else if (regexEditProfile.test(url)) {
        resolve({
          // toggle the lines below to allow or deny submission of a profile
          // ******  ALLOW  ******
          isSuccess: 1,
          message: "Success"
          // ******  DENY  ******
          // isSuccess: 0,
          // message: "We are unable to edit this profile at this time."
        });
      }

      // UPLOAD IMAGE: fullfilled
      // FYI: There's a Sandra Oh profile image in the mock-ajax folder for testing this.
      else if (regexUploadImage.test(url)) {
        profiles[data.id].image = data.file; // comment this line to DENY upload of image
        resolve({
          // toggle the lines below (and above) to allow or deny upload of an image
          // ******  ALLOW  ******
          isSuccess: 1,
          message: "Success",
          profiles: profiles
          // ******  DENY  ******
          // isSuccess: 0,
          // message: "Sorry, we are unable to upload the image you submitted."
        });
      }

      // DELETE IMAGE: fullfilled
      else if (regexDeleteImage.test(url)) {
        profiles[data.id].image = ""; // comment this line to DENY deletion of image
        resolve({
          // toggle the lines below (and above) to allow or deny upload of an image
          // ******  ALLOW  ******
          isSuccess: 1,
          message: "Success",
          profiles: profiles
          // ******  DENY  ******
          // isSuccess: 0,
          // message: "Sorry, we are unable to upload this image at this time."
        });
      }

      // UPLOAD RESUME: fullfilled
      else if (regexUploadResume.test(url)) {
        profiles[data.id].resume = data.file; // comment this line to DENY upload of resume
        resolve({
          // toggle the lines below (and above) to allow or deny upload of a resume
          // ******  ALLOW  ******
          isSuccess: 1,
          message: "Success",
          profiles: profiles
          // ******  DENY  ******
          // isSuccess: 0,
          // message: "Sorry, we are unable to upload the resume you submitted."
        });
      }

      // VIEW RESUME: fullfilled
      else if (regexViewResume.test(url)) {
        resolve({
          // toggle the lines below to allow or deny submission of a profile
          // ******  ALLOW  ******
          isSuccess: 1,
          message: "Success",
          file: billResume
          // ******  DENY  ******
          // isSuccess: 0,
          // message: "Sorry, we are unable to access the resume you requested."
        });
      }

      // DOWNLOAD RESUME: fullfilled
      else if (regexDownloadResume.test(url)) {
        resolve({
          // toggle the lines below to allow or deny submission of a profile
          // ******  ALLOW  ******
          isSuccess: 1,
          message: "Success",
          file: billResume
          // ******  DENY  ******
          // isSuccess: 0,
          // message: "Sorry, we are unable to access the resume you requested."
        });
      }

      // DELETE RESUME: fullfilled
      else if (regexDeleteResume.test(url)) {
        profiles[data.id].resume = ""; // comment this line to DENY deletion of resume
        resolve({
          // toggle the lines below (and above) to allow or deny upload of a resume
          // ******  ALLOW  ******
          isSuccess: 1,
          message: "Success",
          file: billResume
          // ******  DENY  ******
          // isSuccess: 0,
          // message: "Sorry, we are unable to delete the resume you requested."
        });
      }

      // DOWNLOAD BATCH RESUMES: fullfilled
      else if (regexDownloadBatchResumes.test(url)) {
        resolve({
          // toggle the lines below to allow or deny submission of a profile
          // ******  ALLOW  ******
          isSuccess: 1,
          message: "Success",
          files: Object.values(data).reduce((obj, id, index) => {
            let resumes = [billResume, altResume];
            return (obj[id] = resumes[index]);
          }, {})
          // ******  DENY  ******
          // isSuccess: 0,
          // message: "Sorry, we are unable to access the resume you requested."
        });
      }
    }, 500);
  });
};

// Once again, you may need to rewrite some code or at least change function names for these to work.
// If the final endpoints don't match mine then the urls below and regexes above will both need reworking.
export const loginRequest = (username, password) => {
  return send(`${api}/login`, { username, password });
};

export const fetchAllProfilesRequest = () => {
  return send(`${api}/graduates`, null, "GET");
};

export const createProfileRequest = profile => {
  return send(`${api}/graduate/new`, { profile });
};

export const editProfileRequest = (id, profile) => {
  return send(`${api}/graduate/${id}`, { profile }, "PUT");
};

// *************   NOT SURE ABOUT THESE YET:   ***************
export const uploadImageRequest = (id, imageData) => {
  return send(`${api}/graduate/${id}/edit/upload-image`, imageData);
};

export const deleteImageRequest = id => {
  return send(`${api}/graduate/${id}/edit/delete-image`, null, "DELETE");
};

export const uploadResumeRequest = (id, resumeData) => {
  return send(`${api}/graduate/${id}/edit/upload-resume`, resumeData);
};

export const viewResumeRequest = id => {
  return send(`${api}/graduate/${id}/view-resume`, null, "GET");
};

export const downloadResumeRequest = id => {
  return send(`${api}/graduate/${id}/download-resume`, null, "GET");
};

export const deleteResumeRequest = id => {
  return send(`${api}/graduate/${id}/delete-resume`, id, "DELETE");
};

export const downloadBatchResumesRequest = ids => {
  return send(`${api}/download-resumes`, { ids }, "GET");
};
