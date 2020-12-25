export interface Comment{
   id: number;
   name: string;
   email: string;
}
/*Essa interface está associada com curso.service.ts
Sua função é extrair atributos json de uma requisição api(Rest/BackEnd).
Isso lembra o conceito de JAVA DTO...
Ex: Tudo que vir de uma requisição json do backend extraia os atributos desta 
interface
*/