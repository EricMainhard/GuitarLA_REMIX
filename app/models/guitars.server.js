export async function getGuitars(){
    const pet = await fetch(`${process.env.API_URL}guitars?populate=*`);
    const res = await pet.json();
    return res;
}

export async function getGuitar(url){
    const pet = await fetch(`${process.env.API_URL}guitars?filters[url]=${url}&populate=*`);
    const res = await pet.json();
    return res;
}