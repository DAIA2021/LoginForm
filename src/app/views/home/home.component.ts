import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mensagem: any;

  constructor(private loginService:LoginService, private router :Router) { }

  ngOnInit(): void {
  }
  carModel= new Car ( )
  mensagem = ""

  onSubmit (){
    console.log (this.carModel)

    this.loginService.login(this.carModel).subscribe((response)=>{
      this.router.navigateByUrl('')
    }, (respostaErro) =>{
      this.mensagem = respostaErro.error
      console.log(this.mensagem)

    })
  }

}
