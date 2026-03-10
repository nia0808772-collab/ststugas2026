let tabungan = [];

function tampilkanData(){
    let list = document.getElementById("riwayat");
    let saldoText = document.getElementById("saldo");

    list.innerHTML = "";
    let total = 0;

    tabungan.forEach((setoran, index) => {
        let item = document.createElement("li");
        item.textContent = `Setoran ke-${index+1}: Rp ${setoran.toLocaleString()}`;
        list.appendChild(item);

        total += setoran;
    });

    saldoText.textContent = "Jumlah Saldo: Rp " + total.toLocaleString();
}

 let bonusText = document.getElementById("bonus");

function tampilkanBonus() {
    bonusText.textContent = "Selamat! Anda mendapat bonus 7% sebesar Rp 70.000";
}

function resetTabungan() {
    bonusText.textContent = "";
}

function tambahSetoran(){
    let input = document.getElementById("setoran");
    let nilai = parseInt(input.value);

    if(isNaN(nilai) || nilai <= 0){
        alert("Masukkan nominal yang benar!");
        return;
    }

    tabungan.push(nilai);
    input.value = "";

    tampilkanData();
}

function hapusTerakhir(){
    tabungan.pop();
    tampilkanData();
}

function resetTabungan(){
    tabungan = [];
    tampilkanData();
}

function cetakSaldo(){
    let total = tabungan.reduce((a,b)=>a+b,0);
    alert("Total Saldo Tabungan: Rp " + total.toLocaleString());
}

  