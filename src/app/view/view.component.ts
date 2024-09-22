import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import {
  FormControl,
} from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
} from "rxjs/operators";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {
  items: any;
  loading: boolean = false; // Inicialização da propriedade
  query: FormControl = new FormControl(); // Controle de formulário

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.query.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged()) // Debounce e distinct
      .subscribe((query: string) => {
        let te = query.replace(/\s/g, ""); // Remove espaços
        if (te.length > 2) {
          this.loading = true; // Começa o carregamento
          this.apiService.get(te).subscribe((result: any) => {
            // Faz a chamada ao serviço API
            setTimeout(() => {
              this.items = result.items; // Armazena os itens recebidos
              console.log(this.items); // Log dos itens
              this.loading = false; // Termina o carregamento
            }, 3000); // Simula um atraso de 3 segundos
          });
          console.log(query); // Log do valor de entrada
        }
      });
    console.log(this.query); // Log do controle de formulário
  }
}
