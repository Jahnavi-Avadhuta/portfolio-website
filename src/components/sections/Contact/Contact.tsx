import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";

import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import SocialLinks from "./SocialLinks";

import { contactInfo } from "../../../data";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <Container>

        <SectionHeading
          title="Get In Touch"
          subtitle="Let's connect and build something amazing together."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          <div>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <ContactItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>

            <SocialLinks />

          </div>

          <ContactForm />

        </div>

      </Container>
    </section>
  );
};

export default Contact;