import { Component } from "@angular/core"

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  contactForm = {
    name: "",
    email: "",
    message: "",
  }

  submitForm() {
    console.log("Form submitted:", this.contactForm)
    // Reset form after submission
    this.contactForm = {
      name: "",
      email: "",
      message: "",
    }
    alert("Thank you for your message! We will get back to you soon.")
  }
}
