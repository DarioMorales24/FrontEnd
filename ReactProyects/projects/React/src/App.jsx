import './App.css'
import { useState } from 'react'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export function  App () {
    return (
        <section className="App">
            <TwitterFollowCard userName='midudev' initialIsFollowing={true}>
                Miguel Angel Duran
            </TwitterFollowCard>
            <TwitterFollowCard userName='dross' initialIsFollowing={false}>
                Goth Kids
            </TwitterFollowCard>
        </section>
    )

}