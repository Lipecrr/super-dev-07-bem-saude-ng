import { inject, Injectable } from '@angular/core';
import { PacienteCriarResponseModel, PacienteEditarResponseModel, PacientePesquisaResponseModel, PacienteResponseModel } from '../models/paciente.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})


export class PacienteService {
  
  private httpClient = inject(HttpClient);

  getAll(): Observable<PacienteResponseModel[]>{
    const url = `${environment.apiUrl}/pacientes`;
    return this.httpClient.get<PacienteResponseModel[]>(url);
  }

  create(form: PacienteCriarResponseModel): Observable<PacienteResponseModel>{
    const url = `${environment.apiUrl}/pacientes`;
    return this.httpClient.post<PacienteResponseModel>(url, form);
  }
  
  update(id: string, form: PacienteEditarResponseModel): Observable<PacienteResponseModel>{
    const url = `${environment.apiUrl}/pacientes${id}`;
    return this.httpClient.put<PacienteResponseModel>(url, form)
  }

  getById(id: string): Observable<PacientePesquisaResponseModel>{
    const url = `${environment.apiUrl}/pacientes/${id}`;
    return this.httpClient.get<PacientePesquisaResponseModel>(url)
  }

  delete(id: string): Observable<void> {
    const url = `${environment.apiUrl}/pacientes/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
