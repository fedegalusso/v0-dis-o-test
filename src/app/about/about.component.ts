import { Component } from "@angular/core"

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent {
  teamMembers = [
    { name: "John Doe", role: "CEO", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Jane Smith", role: "CTO", bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {
      name: "Mike Johnson",
      role: "Lead Developer",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ]
}
