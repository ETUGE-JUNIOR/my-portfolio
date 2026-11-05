import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "etugemarxsimjunior@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+237 678128857",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Douala-CAMEROON",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-linear-to-b from-card to-foregroubd">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 flex justify-center items-center flex-row-reverse gap-1 text-purple-600 text-shadow-lg text-shadow-purple-900/25">Get In Touch <MessageCircle size={18} /> </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card className="border-0 shadow-2xl">
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
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                  <div className="flex gap-4 justify-center items-center w-full"><div className="w-full  bg-gray-500 border  "></div> <p>Others</p> <div className="w-full  bg-gray-500 border  "></div> </div>
                  <div className="flex gap-4 justify-center">
                            <a 
                              href="https://whatsapp.com/YOUR_GITHUB_USERNAME" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3  backdrop-blur-sm rounded-full hover:bg-primary/80 hover:text-secondary transition-colors border border-gray-700"
                            >
                              <Instagram className="h-5 w-5" />
                            </a>
                            <a 
                              href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3  backdrop-blur-sm rounded-full hover:bg-primary/80 hover:text-secondary transition-colors border border-gray-700"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                            <a 
                              href="mailto:your.email@example.com" 
                              className="p-3  backdrop-blur-sm rounded-full hover:bg-primary/80 hover:text-secondary transition-colors border border-gray-700"
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
              <h3 className="mb-4 text-purple-600 text-shadow-lg text-shadow-purple-900/25">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Feel free to contact me through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-card/20 rounded-lg border">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-purple-400">{info.label}</p>
                      <p className="text-primary">{info.value}</p>
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