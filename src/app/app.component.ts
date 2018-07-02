import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  counter: any = "00:00:00";
  interval: any;
  countDownCode() {
    let time = 25 * 60;
    clearInterval(this.interval);
    this.countDown(time, () => {
      alert("Finalizado!");
    });
  }

  countDownSocial() {
    let time = 15 * 60;
    clearInterval(this.interval);
    this.countDown(time, () => {
      alert("Finalizado!");
    });
  }

  countDownCoffee() {
    let time = 5 * 60;
    clearInterval(this.interval);
    this.countDown(time, () => {
      alert("Finalizado!");
    });
  }

  countDown(i, callback) {
    this.interval = setInterval(() => {
      this.counter = this.timeString(i);
      i-- || (clearInterval(this.interval), callback());
    }, 1000);
  }

  timeString(s) {
    function addZero(number) {
      return number <= 9 ? "0" + number : number;
    }

    let hour = addZero(Math.round(s / 3600));
    let minute = addZero(Math.floor((s % 3600) / 60));
    let second = addZero((s % 3600) % 60);

    let formatted = hour + ":" + minute + ":" + second;

    return formatted;
  }
}
