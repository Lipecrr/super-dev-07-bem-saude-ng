import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { AutoFocusModule } from 'primeng/autofocus';
import { DialogModule } from 'primeng/dialog';
import { ResgistroStatusTag } from '../../../core/components/resgistro-status-tag/resgistro-status-tag';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { TextareaModule } from 'primeng/textarea';
import { ConsultaResponseModel } from '../../../models/consulta.model';
import { PacienteResponseModel } from '../../../models/paciente.model';
import { PacienteService } from '../../../services/paciente.service';
import { ProfissionalResponseModel } from '../../../models/profissional.model';



@Component({
  selector: 'app-list',
  imports: [
    ButtonModule,
    InputTextModule,
    SelectModule,
    FormsModule,
    TableModule,
    ResgistroStatusTag,
    AutoFocusModule,
    DialogModule,
    InputMaskModule,
    DatePickerModule,
    TextareaModule,
    ReactiveFormsModule],
  templateUrl: './list.html',
})
export class List {
  filtrosStatus = ["Todos", "Confirmada", "Agendada", "Em Atendimento", "Finalizada", "Cancelada"];
  statusSelecionado: string = "Todos";
  dataSelecionada: Date | null = null;
  pesquisa: string = "";
  visible: boolean = false;
  private pacienteService = inject(PacienteService);
  private readonly formBuilder = inject(FormBuilder);
  consultaForm = this.formBuilder.group({
    paciente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    profissional: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    data: ['', [Validators.required]],
    horario: ['', Validators.required],
    observacoes: [null]
  });


  pacientes: PacienteResponseModel[] = this.pacienteService.getPacientes();

  profissionais: ProfissionalResponseModel[] = [
    { id: '029e2a1b-1a11-4f2a-9c10-a1b2c3d4e501', nome: 'Dra. Ana Souza' },
    { id: '029e2a1b-1a11-4f2a-9c10-a1b2c3d4e502', nome: 'Dr. Carlos Lima' },
    { id: '029e2a1b-1a11-4f2a-9c10-a1b2c3d4e503', nome: 'Dra. Juliana Martins' },
    { id: '029e2a1b-1a11-4f2a-9c10-a1b2c3d4e504', nome: 'Dr. Bruno Rocha' },
    { id: '029e2a1b-1a11-4f2a-9c10-a1b2c3d4e505', nome: 'Dra. Mariana Pacheco' },
    { id: '029e2a1b-1a11-4f2a-9c10-a1b2c3d4e506', nome: 'Dr. Felipe Azevedo' },
    { id: '029e2a1b-1a11-4f2a-9c10-a1b2c3d4e507', nome: 'Dra. Renata Guimarães' },
    { id: '029e2a1b-1a11-4f2a-9c10-a1b2c3d4e508', nome: 'Dr. Lucas Farias' }
  ]
  profissionaisFiltro: ProfissionalResponseModel[] = [
    { id: 'todos', nome: 'Todos' },
    ...this.profissionais
  ];
  profissionalSelecionado: ProfissionalResponseModel =
    this.profissionaisFiltro[0];

  consultas: ConsultaResponseModel[] = [
    {
      paciente: 'Maria Silva',
      profissional: 'Dra. Ana Souza',
      status: 'Agendada',
      data: '2026-02-03',
      horario: '08:00'
    },
    {
      paciente: 'João Pereira',
      profissional: 'Dr. Carlos Lima',
      status: 'Confirmada',
      data: '2026-02-03',
      horario: '08:30'
    },
    {
      paciente: 'Fernanda Costa',
      profissional: 'Dra. Juliana Martins',
      status: 'Atrasada',
      data: '2026-02-03',
      horario: '09:00'
    },
    {
      paciente: 'Rafael Almeida',
      profissional: 'Dr. Bruno Rocha',
      status: 'Em Andamento',
      data: '2026-02-03',
      horario: '09:30'
    },
    {
      paciente: 'Camila Santos',
      profissional: 'Dra. Ana Souza',
      status: 'Finalizada',
      data: '2026-02-03',
      horario: '10:00'
    },
    {
      paciente: 'Diego Fernandes',
      profissional: 'Dr. Carlos Lima',
      status: 'Cancelada',
      data: '2026-02-04',
      horario: '08:00'
    },
    {
      paciente: 'Patrícia Oliveira',
      profissional: 'Dra. Juliana Martins',
      status: 'Agendada',
      data: '2026-02-04',
      horario: '08:30'
    },
    {
      paciente: 'Lucas Ribeiro',
      profissional: 'Dr. Bruno Rocha',
      status: 'Confirmada',
      data: '2026-02-04',
      horario: '09:00'
    },
    {
      paciente: 'Aline Barbosa',
      profissional: 'Dra. Ana Souza',
      status: 'Finalizada',
      data: '2026-02-04',
      horario: '09:30'
    },
    {
      paciente: 'Gustavo Nunes',
      profissional: 'Dr. Carlos Lima',
      status: 'Em Andamento',
      data: '2026-02-05',
      horario: '10:00'
    },
    {
      paciente: 'Bruna Carvalho',
      profissional: 'Dra. Juliana Martins',
      status: 'Atrasada',
      data: '2026-02-05',
      horario: '10:30'
    },
    {
      paciente: 'Eduardo Souza',
      profissional: 'Dr. Bruno Rocha',
      status: 'Agendada',
      data: '2026-02-06',
      horario: '08:00'
    }
  ];

  showDialog(): void {
    this.visible = true;
  }

  cancelar() {
    this.visible = false;
    this.consultaForm.reset();
  }

  salvar() {

  }
}