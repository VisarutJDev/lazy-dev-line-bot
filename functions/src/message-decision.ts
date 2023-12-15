import { FlexCarouselBlog } from "./flex-carousel-blog";
import { FlexGitHub } from "./flex-github";
import { FlexPortfolio } from "./flex-portfolio";
import { FlexResumeCV } from "./flex-resume-cv";

export const MessageDicision = (msg: string) => {
    switch (msg.toLowerCase()) {
        case 'port': return FlexPortfolio();
        case 'medium': return FlexCarouselBlog();
        case 'resume': return FlexResumeCV()
        case 'cv': return FlexResumeCV();
        case 'github': return FlexGitHub();
        default: return `Line message ของ lazy-dev ในรองรับเพียงคำสั่ง port, medium, resume, cv, github เท่านั้น เพราะ lazy`;
    }
}