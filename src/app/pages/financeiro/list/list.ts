import { Component, inject } from '@angular/core';
import { TableModule } from "primeng/table";
import { ResgistroStatusTag } from "../../../core/components/resgistro-status-tag/resgistro-status-tag";
import { FinanceiroResponseModel } from '../../../models/financeiro.model';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { AutoFocusModule } from 'primeng/autofocus';
import { DialogModule } from 'primeng/dialog';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-list',
  imports: [
    TableModule,
    ResgistroStatusTag,
    ButtonModule,
    InputTextModule,
    SelectModule,
    FormsModule,
    AutoFocusModule,
    DialogModule,
    InputMaskModule,
    DatePickerModule,
    TextareaModule,
    ReactiveFormsModule,
  ],
  templateUrl: './list.html',
})
export class List {
  visible: boolean = false;
  pesquisa: string = "";
  filtros = ["Todos", "Paga", "Em Aberto", "Cancelada"];
  filtroSelecionado: string = "Todos";


  private readonly formBuilder = inject(FormBuilder);
  faturaForm = this.formBuilder.group({
    paciente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    data: ['', [Validators.required]],
    valor: [null, Validators.required],
  });



  faturas: FinanceiroResponseModel[] =
    [
      {
        "id": "#0001",
        "paciente": "João da Silva",
        "data": "2026-02-01",
        "valor": 250.75,
        "status": "Paga"
      },
      {
        "id": "#0002",
        "paciente": "Maria Oliveira",
        "data": "2025-01-12",
        "valor": 180.00,
        "status": "Em Aberto"
      },
      {
        "id": "#0003",
        "paciente": "Carlos Santos",
        "data": "2025-01-15",
        "valor": 320.40,
        "status": "Cancelada"
      },
      {
        "id": "#0004",
        "paciente": "Ana Pereira",
        "data": "2026-02-04",
        "valor": 95.90,
        "status": "Paga"
      },
      {
        "id": "#0005",
        "paciente": "Fernanda Costa",
        "data": "2025-01-20",
        "valor": 410.00,
        "status": "Em Aberto"
      }
    ]

  somarFaturasEmAberto(): string {
    const total = this.faturas
      .filter(fatura => fatura.status === "Em Aberto")
      .reduce((total, fatura) => total + fatura.valor, 0);
    return `R$ ${total.toFixed(2).replace('.', ',')}`;
  }

  somarFaturasPagasHoje(): string {
    const hoje = new Date();
    const dataHoje = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, '0')}-${String(hoje.getDate()).padStart(2, '0')}`;
    const total = this.faturas
      .filter(fatura => fatura.status === "Paga" && fatura.data === dataHoje)
      .reduce((total, fatura) => total + fatura.valor, 0);

    return `R$ ${total.toFixed(2).replace('.', ',')}`;
  }

  somarFaturasPagasNoMes(): string {
    const hoje = new Date();
    const mesAtual = hoje.getMonth() + 1;
    const anoAtual = hoje.getFullYear();
    const total = this.faturas.filter(fatura => {
      if (fatura.status !== "Paga") return false;
      const partesData = fatura.data.split('-');
      const anoFatura = Number(partesData[0]);
      const mesFatura = Number(partesData[1]);
      return anoFatura === anoAtual && mesFatura === mesAtual;
    })
      .reduce((soma, fatura) => soma + fatura.valor, 0);
    return `R$ ${total.toFixed(2).replace('.', ',')}`;
  }


  showDialog(): void {
    this.visible = true;
  }

  cancelar() {
    this.visible = false;

  }

  salvar() {

  }
}