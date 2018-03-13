import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-postagem-list',
  templateUrl: './postagem-list.component.html',
  styleUrls: ['./postagem-list.component.css']
})
export class PostagemListComponent implements OnInit {

  imgs: Observable<any[]>;

  constructor(bd: AngularFireDatabase) {
    this.imgs = bd.list('Postagems').valueChanges();
     }

  ngOnInit() {
  }

}
