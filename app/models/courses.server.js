export async function getCourse(){
    const pet = await fetch(`${process.env.API_URL}course?populate=*`);
    const res = await pet.json();
    return res;
}