import { Component, input } from '@angular/core';
import { TagModule } from 'primeng/tag';

export type ConsultarStatus =
  | 'Agendada'
  | 'Atrasada'
  | 'Confirmada'
  | 'Cancelada'
  | 'Em Andamento'
  | 'Finalizada'
  | 'Em Aberto'
  | 'Paga';
@Component({
  selector: 'app-registro-status-tag',
  imports: [TagModule],
  templateUrl: './registro-status-tag.html',
})
export class ResgistroStatusTag {
  status= input<boolean | ConsultarStatus>()
}
