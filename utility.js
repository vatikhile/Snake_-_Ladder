class Utility {


    Start_Place = 0;
    End_place = 100;
    SNAKE = 1;
    LADDER = 2;
    NO_PLAY = 0;
    current_position = 0;

    rollDice = () => {

        var dice = Math.floor(Math.random() * 6) + 1;
        console.log('Random check dice : ' + dice);
        let check_option = Math.floor(Math.random() * 3) + 1;

        switch (check_option) {
            case this.SNAKE:
                console.log('SNAKE');
                if (this.current_position - dice >= this.Start_Place) {
                    this.current_position = this.current_position - dice;
                }
                break;

            case this.LADDER:
                console.log(' LADDER ');
                if (this.current_position + dice <= this.End_place) {
                    this.current_position = this.current_position + dice;
                }
                break;

            default:
                console.log('NO PLAY');
                this.current_position = this.current_position;
                break;

                
        }
        console.log(`Current position :${this.current_position}`);
    }


}
module.exports = new Utility();
