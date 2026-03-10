let gudang = [];

function tampilkanBarang() {
    const daftar = document.getElementById("daftarBarang");
    const totalText = document.getElementById("totalBarang");

    daftar.innerHTML = "";
    let total = 0;

    gudang.forEach((barang, index) => {
        let item = document.createElement("li");
        item.textContent = `Barang ke-${index + 1}: ${barang.nama} - Stok: ${barang.stok}`;
        daftar.appendChild(item);

        total += barang.stok;
    });

    totalText.textContent = "Total Seluruh Barang: " + total;
}

function tambahBarang() {
    const nama = document.getElementById("namaBarang").value;
    const stok = parseInt(document.getElementById("stokBarang").value);

    if (nama === "" || isNaN(stok)) {
        alert("Masukkan nama barang dan jumlah stok!");
        return;
    }

    gudang.push({
        nama: nama,
        stok: stok
    });

    document.getElementById("namaBarang").value = "";
    document.getElementById("stokBarang").value = "";

    tampilkanBarang();
}

function hapusTerakhir() {
    if (gudang.length > 0) {
        gudang.pop();
        tampilkanBarang();
    } else {
        alert("Gudang sudah kosong!");
    }
}

function kosongkanGudang() {
    gudang = [];
    tampilkanBarang();
}