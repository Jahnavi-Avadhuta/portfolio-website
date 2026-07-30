import { Download, Mail } from "lucide-react";
import Button from "../../ui/Button";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-10">
      <Button href="/resume.pdf">
        <Download size={18} className="mr-2" />
        Resume
      </Button>

      <Button href="#contact">
        <Mail size={18} className="mr-2" />
        Contact Me
      </Button>
    </div>
  );
};

export default HeroButtons;