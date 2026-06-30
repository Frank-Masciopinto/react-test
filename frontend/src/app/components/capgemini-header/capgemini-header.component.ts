import { Component } from '@angular/core';

@Component({
  selector: 'app-capgemini-header',
  standalone: true,
  template: `
    <header class="capgemini-header">
      <img
        src="/capgemini-logo.svg"
        alt="Capgemini"
        class="capgemini-header__logo"
      />
    </header>
  `,
  styles: [
    `
      .capgemini-header {
        background: #fff;
        border-bottom: 1px solid #e5e7eb;
        padding: 0.875rem 1.5rem;
      }

      .capgemini-header__logo {
        display: block;
        height: 2rem;
        width: auto;
      }
    `,
  ],
})
export class CapgeminiHeaderComponent {}
