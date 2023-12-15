import {flexCarouselBlog} from "./flex-carousel-blog";
import {flexGitHub} from "./flex-github";
import {flexPortfolio} from "./flex-portfolio";
import {flexResumeCV} from "./flex-resume-cv";

export const messageDicision = (msg: string) => {
  switch (msg.toLowerCase()) {
  case "port": return flexPortfolio();
  case "medium": return flexCarouselBlog();
  case "resume": return flexResumeCV();
  case "cv": return flexResumeCV();
  case "github": return flexGitHub();
  default: return "";
  }
};
