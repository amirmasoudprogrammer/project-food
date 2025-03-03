import React from 'react';
import MenuPage from "../../Components/templates/MenuPage";

function Index({data}) {

    return (
        <MenuPage data={data}/>
    );
}

export default Index;

export async function getStaticProps() {
    const respons = await fetch("https://api-food-teal.vercel.app/data")
    const data = await respons.json()
    console.log(data)
    return{
        props:{ data },
        revalidate:1 * 60 * 60, //seconds
    }
}