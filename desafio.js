let nomeHeroi = "Elvis da Quebrada";
let xp = 15000;






for(let i= 0; i<1 ; i++){
   
    if( xp <= 1000){
        console.log("O Herói de nome " + nomeHeroi + " está no vível Ferro, com " + xp + " de XP!");
    }else if( xp >= 1001 && xp <= 2000){
        console.log("O Herói de nome " + nomeHeroi + " está no vível Bronze, com " + xp + " de XP!");
    }else if (xp >= 2001 && xp <= 5000){
        console.log("O Herói de nome " + nomeHeroi + " está no vível Prata, com " + xp + " de XP!");
    }else if(xp >=5001 && xp <= 7000){
        console.log("O Herói de nome " + nomeHeroi + " está no vível Ouro, com " + xp + " de XP!");
    }else if( xp >= 7001 && xp <=8000){
        console.log("O Herói de nome " + nomeHeroi + " está no vível Platina, com " + xp + " de XP!");
    }else if( xp >= 8001 && xp <= 9000){
        console.log("O Herói de nome " + nomeHeroi + " está no vível Ascendente, com " + xp + " de XP!");
    }else if(xp>=9001 && xp <= 10000){
        console.log("O Herói de nome " + nomeHeroi + " está no vível Imortal, com " + xp + " de XP!");
    }else if(xp >= 10001){
        console.log("O Herói de nome " + nomeHeroi + " está no vível Radiante, com " + xp + " de XP!");
    } else{
        console.log("OPÇÃO INVÁLIDA!");
    }


}
