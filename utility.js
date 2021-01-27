class Utility {


    Start_Place = 0;
    End_place = 100;
    SNAKE = 1;
    LADDER = 2;
    NO_PLAY = 0;
    current_position = 0;

    rollDice = () => {
        let dice_count = 0;
        this.current_position = this.Start_Place;
        while (this.current_position < this.End_place) {




            var dice = Math.floor(Math.random() * 6) + 1;
            console.log('Random check dice : ' + dice);
            let check_option = Math.floor(Math.random() * 3) + 1;

            switch (check_option) {
                case this.SNAKE:
                    console.log('SNAKE ');
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
            dice_count++;
        }
        console.log(`Current position :${this.current_position}`);
        console.log('Dice count is :'+dice_count);

    }


}
module.exports = new Utility();
