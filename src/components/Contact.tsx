import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "etugemarxsim@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+237 678-12-88-57",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cameroon",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input type="text" placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Input type="text" placeholder="Subject" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                  <div className="flex gap-4 justify-center items-center w-full"><div className="w-full  bg-gray-500 border  "></div> <p>Others</p> <div className="w-full  bg-gray-500 border  "></div> </div>
                  <div className="flex gap-4 justify-center">
                            <a 
                              href="https://whatsapp.com/YOUR_GITHUB_USERNAME" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3  backdrop-blur-sm rounded-full hover:bg-gray-700 transition-colors border border-gray-700"
                            >
                              <Instagram className="h-5 w-5" />
                            </a>
                            <a 
                              href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3  backdrop-blur-sm rounded-full hover:bg-gray-700 transition-colors border border-gray-700"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                            <a 
                              href="mailto:your.email@example.com" 
                              className="p-3  backdrop-blur-sm rounded-full hover:bg-gray-700 transition-colors border border-gray-700"
                            >
                              <Mail className="h-5 w-5" />
                            </a>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Feel free to contact me through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-900">{info.label}</p>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}