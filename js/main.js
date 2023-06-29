/* TESTO DELL'ESERCIZIO:

Salvare sul nostro programma JS alcune nostre informazioni di base, chiedendole con il prompt come:
- Nome
- Cognome
-Colore Preferito

Una volta acquisite tali informazioni, mostrare in output nella console 
scrivi sulla console nomecognomecolorepreferito21
*/

//INIZIO

//Chiedo le informazioni necessarie all'utente che necessito
let nameUser = prompt("Inserisci il tuo nome");
let surnameUser = prompt("Inserisci il tuo cognome");
let colorUser = prompt("Inserisci il tuo colore preferito");
let number21 = 21;

//Preparo la password
let passwordUtente = nameUser + surnameUser + colorUser + number21
 //console.log passwordUtente
 console.log(passwordUtente);

 //PARTE BONUS
let numerXx = prompt("Inserisci due numeri");
let newPassword= nameUser + surnameUser + colorUser + numerXx
console.log(newPassword);


//Stampo le informazioni sull'html
document.getElementById ("username").innerHTML=nameUser;
document.getElementById ("usersurname").innerHTML=surnameUser;
document.getElementById ("userfavcolor").innerHTML=colorUser;
document.getElementById ("yourpass").innerHTML=newPassword;
//FINE
