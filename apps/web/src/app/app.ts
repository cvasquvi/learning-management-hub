import { Component, inject, signal } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = 'Learning Management Hub';

  private readonly helloService = inject(HelloService);

  protected readonly message = signal('Cargando...');
  protected readonly error = signal<string | null>(null);

  constructor() {
    this.helloService.getHello().subscribe({
      next: (response) => this.message.set(response.message),
      error: () =>
        this.error.set(
          'No se pudo conectar con el backend. ¿Está corriendo en http://localhost:3000?',
        ),
    });
  }
}
