import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true, // Indique que ce composant est autonome
  imports: [CommonModule], // Importez ici CommonModule
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { id: '1', titre: 'Premier post', contenu: 'détails premier post' },
    { id: '2', titre: 'Deuxième post', contenu: 'détails deuxième post' },
    { id: '3', titre: 'Troisième post', contenu: 'détails troisième post' }
  ];
}
