import { Component, input } from '@angular/core';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-resgistro-status-tag',
  imports: [TagModule],
  templateUrl: './resgistro-status-tag.html',
})
export class ResgistroStatusTag {
  status= input<boolean>()
}
