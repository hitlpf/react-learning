import React from 'react';
import { renderToString } from "react-dom/server";
import Title from "../../app/title"
// import '../../app/style';
// import logo from '../../app/static/timg.png'

function App() {
    return <Title name="react"/>
}

module.exports = {
    Index: async (ctx) =>{
        ctx.body = renderToString(<App/>);
    },
    Ssr: async (ctx) =>{
        ctx.body = renderToString(<App/>);
    },
    Spa: async (ctx) => {
        await ctx.render('index.html');
    }
}