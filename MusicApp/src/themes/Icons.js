import React from "react";
import home from '../assets/svgs/home.svg'
import home_focus from '../assets/svgs/home_focus.svg'
import music from '../assets/svgs/music.svg'
import music_focus from '../assets/svgs/music_focus.svg'
import profile from '../assets/svgs/profile.svg'
import profile_focus from '../assets/svgs/profile_focus.svg'
import search from '../assets/svgs/search.svg'
import search_focus from '../assets/svgs/search_focus.svg'
import play_circle from '../assets/svgs/play_circle.svg'
import next from '../assets/svgs/next.svg'
import concerts from '../assets/svgs/concerts.svg'
import live from '../assets/svgs/live.svg'
import podcast from '../assets/svgs/podcast.svg'
import featured from '../assets/svgs/featured.svg'
import ranking from '../assets/svgs/ranking.svg'
import logo from '../assets/svgs/logo.svg'
import search_gray from '../assets/svgs/search_gray.svg'
import close from '../assets/svgs/close.svg'
import close_white from '../assets/svgs/close_white.svg'
import add from '../assets/svgs/add.svg'
import heart from '../assets/svgs/heart.svg'
import loop from '../assets/svgs/loop.svg'
import back from '../assets/svgs/back.svg'
import forward from '../assets/svgs/forward.svg'
import shuffle from '../assets/svgs/shuffle.svg'
import play from '../assets/svgs/play.svg'
import instagram from '../assets/svgs/instagram.svg'
import back_btn from '../assets/svgs/back_btn.svg'

const SVGs = {
    home,
    home_focus,
    music,
    music_focus,
    profile,
    profile_focus,
    search,
    search_focus,
    play_circle,
    next,
    concerts,
    live,
    podcast,
    featured,
    ranking,
    logo,
    search_gray,
    close,
    close_white,
    add,
    heart,
    loop,
    back,
    forward,
    shuffle,
    play,
    instagram,
    back_btn
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width} />
        } else {
            return null
        }
    }
}