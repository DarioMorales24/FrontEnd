import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export function  App () {
    const gothkids = {userName: 'gothkids', name: 'Goth Kids', isFollowing: true }
    return (
        <section className="App">
            <TwitterFollowCard userName='midudev' name='Miguel Angel Duran'/>
            <TwitterFollowCard {...gothkids} /> {/*Esto no es recomendable, pero funciona*/}
            <TwitterFollowCard userName='MrBeast' name='Mr. Beast' isFollowing={true} />
        </section>
    )

}