import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import contacts from "@/constants/contacts";

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <Card className="border-border/60 hover:shadow-md transition-all duration-200 bg-card/90">
        <CardContent className="p-4 sm:p-6 flex items-start space-x-3 sm:space-x-4">
          <div className="bg-primary/10 p-2 sm:p-3 rounded-full light-shadow-sm flex-shrink-0">
            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold">Location</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              {contacts.location}
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              {contacts.country}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60 hover:shadow-md transition-all duration-200 bg-card/90">
        <CardContent className="p-4 sm:p-6 flex items-start space-x-3 sm:space-x-4">
          <div className="bg-primary/10 p-2 sm:p-3 rounded-full light-shadow-sm flex-shrink-0">
            <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold">Email</h3>
            <p className="text-muted-foreground text-sm sm:text-base break-words">
              {contacts.email.primary}
            </p>
            <p className="text-muted-foreground text-sm sm:text-base break-words">
              {contacts.email.secondary}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60 hover:shadow-md transition-all duration-200 bg-card/90">
        <CardContent className="p-4 sm:p-6 flex items-start space-x-3 sm:space-x-4">
          <div className="bg-primary/10 p-2 sm:p-3 rounded-full light-shadow-sm flex-shrink-0">
            <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold">Phone</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              {contacts.phone}
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              Mon-Fri, 9am-5pm GMT
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
