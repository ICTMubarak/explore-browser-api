console.log('Promt connect');
// alert('Ki khobor dusto');
const showAlert = () => {
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        alert('Ki khobor dusto');
    } 
}

const askSomething = () =>{
    const dicision = confirm('Are you coming Picnic?');
    console.log(dicision);
    if(dicision == true){
        alert("dusto 500 taka bKash kor");
    }
    else{
        alert("dure giya mor");
    }
}

const getUserInfo = () =>{
    const name = prompt('Tell us your name');
    console.log(name);
}