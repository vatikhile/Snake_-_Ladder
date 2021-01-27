

class Utility{
    Start_Place = 0;
     End_Place = 100;

    rollDice = () => {
        var random_check = Math.floor( Math.random() * 6 ) + 1 ;
         console.log('Random check dice : '  +random_check);
    }

}
module.exports=new Utility()