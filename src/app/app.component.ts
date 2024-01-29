import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailproductComponent } from "./detailproduct/detailproduct.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DetailproductComponent]
})
export class AppComponent {
  title = 'devoirProjet';
}
