let count = 0;

document.getElementById("btn").addEventListener("click", function ()  {
    count = count + 1;
    document.getElementById("mesaj").textContent = "Ai apasat de " + count + " ori";
})

document.getElementById("reset").addEventListener("click", function ()  {
    count = 0;
    document.getElementById("mesaj").textContent = "Ai resetat countul";
})