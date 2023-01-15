import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/models/habilidades';
import { HabilidadesService } from 'src/app/servicio/habilidades.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  public habilidadess:Habilidades[]=[];
  public editHabilidades: Habilidades | undefined;
  public deleteHabilidades:Habilidades | undefined;

  constructor(private habilidadesService: HabilidadesService) { }

  ngOnInit(): void {
    this.getHabilidadess();
  }

  public getHabilidadess():void{
    this.habilidadesService.getHabilidades().subscribe({
      next:(Response: Habilidades[])=>{
        this.habilidadess=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: String, habilidades?: Habilidades):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-bs-target', '#addHabilidadesModal');
    }else if(mode==='delete'){
      this.deleteHabilidades=habilidades;
      button.setAttribute('data-bs-target','#deleteHabilidadesModal');
    }else if(mode==='edit'){
      this.editHabilidades=habilidades;
      button.setAttribute('data-bs-target','#editHabilidadesModal');
    }
    container?.appendChild(button);
    button.click();

  }
  public onAddHabilidades(addForm: NgForm){
    document.getElementById('add-habilidades-form')?.click();
    this.habilidadesService.addHabilidades(addForm.value).subscribe({
      next: (response:Habilidades) => {
        console.log(response);
        this.getHabilidadess();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onUpdateHabilidades(habilidades: Habilidades){
    this.editHabilidades=habilidades;
    document.getElementById('add-habilidades-form')?.click();
    this.habilidadesService.updateHabilidades(habilidades).subscribe({
      next: (response:Habilidades) => {
        console.log(response);
        this.getHabilidadess();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteHabilidades(idSkill: number):void{
    this.habilidadesService.deleteHabilidades(idSkill).subscribe({
      next: (response:void) => {
        console.log(response);
        this.getHabilidadess();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
