export async function getPosts(){
    const pet = await fetch(`${process.env.API_URL}posts?populate=*`); 
    const res = await pet.json();
    return res;
}

export async function getPost(url){
    const pet = await fetch(`${process.env.API_URL}posts?filters[url]=${url}&populate=*`); 
    const res = await pet.json();
    return res;
}