import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ContatoRouteModule } from './contato-routing.module';
import { ContatoListaComponent } from './contatos-lista.component';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { FormsModule } from '@angular/forms';

import { ContatoService } from './contato.service';

@NgModule({
    imports: [
        CommonModule,
        ContatoRouteModule,
        FormsModule
    ],
    declarations: [
        ContatoListaComponent,
        ContatoDetalheComponent
    ],
    exports: [
        ContatoListaComponent
    ],
    providers: [
        ContatoService
    ]
})
export class ContatosModule { } 