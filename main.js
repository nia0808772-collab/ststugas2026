 let daftarTugas = [];

function tambahTugas() {
    let input = document.getElementById("inputTugas");
    let tugas = input.value;

    if (tugas === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    daftarTugas.push(tugas);
    input.value = "";
    tampilkanTugas();
}

function hapusTugasTerakhir() {
    if (daftarTugas.length > 0) {
        daftarTugas.pop();
    }
    tampilkanTugas();
}

function bersihkanDaftar() {
    daftarTugas = [];
    tampilkanTugas();
}

function tampilkanTugas() {
    let list = document.getElementById("listTugas");
    list.innerHTML = "";

    for (let i = 0; i < daftarTugas.length; i++) {
        let li = document.createElement("li");
        li.textContent = daftarTugas[i];
        list.appendChild(li);
    }

    document.getElementById("total").textContent =
        "Total Tugas: " + daftarTugas.length;
}


