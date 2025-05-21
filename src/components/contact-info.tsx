import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-bold">Location</h3>
            <p className="text-muted-foreground">ENUGU</p>
            <p className="text-muted-foreground">Nigerian</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex items-start space-x-4">
          <Mail className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-bold">Email</h3>
            <p className="text-muted-foreground">
              emmanuelforchinagorom@gmail.com
            </p>
            <p className="text-muted-foreground">emmanuelztrd@gmail.com</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex items-start space-x-4">
          <Phone className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-bold">Phone</h3>
            <p className="text-muted-foreground">+234 (8)108700025</p>
            <p className="text-muted-foreground">Mon-Fri, 9am-5pm GMT</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
