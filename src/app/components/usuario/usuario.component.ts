import {Component, OnInit} from '@angular/core';
import {UsuarioModel} from '../../model/usuarioModel/UsuarioModel';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarioModel = new UsuarioModel();

  constructor() {
  }

  ngOnInit() {
  }

}
