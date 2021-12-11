async function getData() {
    const url = 'https://getgreenspark.mocklab.io/products';
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    const datas = await getData();
    const bottles = document.getElementById("bottles")
    const trees = document.getElementById("trees");
    const carbon = document.getElementById("carbon");
    datas.map(data => data.type === "plastic bottles"? bottles.innerHTML = `${data.amount} ${data.type}` : data.type === "trees" ? trees.innerHTML = `${data.amount} ${data.type}` : carbon.innerHTML = `${data.amount}kgs of  ${data.type}`)
   
}

renderData();

