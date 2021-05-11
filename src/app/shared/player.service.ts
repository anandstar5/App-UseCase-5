export class PlayerService {

    private players = [
        {
            id:1,
            name: "Dhoni",
            price: 9.00
        },
        {
            id:2,
            name: "Sachin",
            price: 11.00
        },
        {
            id:3,
            name: "Yuvraj",
            price: 6.00
        }
    ]

getPlayers()
{
    return this.players.slice();
}

getplayers(id:number)
{    
    return this.players.find(x=>x.id===id);

}

}