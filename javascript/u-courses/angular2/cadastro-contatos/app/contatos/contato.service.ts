import { Injectable } from "@angular/core";
import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

@Injectable()
export class ContatoService {

    getContatos(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            resolve(CONTATOS)
        })
    }

    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        })
        .then(() => {
            console.log('Start')
            return 'start Promise Chain'
        })
        .then((param: string) => {
            console.log('Second call')
            console.log(param)
                return new Promise((resolveInterPromise, reject) => {
                    setTimeout(() => {
                    console.log('Intern Promise call')
                    resolveInterPromise();
                }, 3000)
            })
        })
        .then(() => {
            console.log('End Promise Chain')
            return this.getContatos();
        })
    }
}