document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".game-menu-grid button");
  const guideContent = document.getElementById("guideContent");

  if (!buttons.length || !guideContent) {
    return;
  }

  const guides = {
    "nomor-keluar": `
      <h2><span>NOMOR</span> KELUAR</h2>

      <p>
        nomor pengeluaran adalah berdasar kan 1st prize nomor yang
        dihasilkan oleh 4D Singapore untuk melihat hasil nomor tersebut
        bisa dilihat di apitoto.com.
      </p>

      <p>
        Contoh nomor bola angka yang dihasilkan Singapore toto:
      </p>

      <p>
        Bola 1 = 7<br>
        Bola 2 = 21<br>
        Bola 3 = 29<br>
        Bola 4 = 32<br>
        Bola 5 = 36<br>
        Bola 6 = 38<br>
        Additional Number = 04
      </p>

      <p>
        Nomor buka <strong>0885</strong>
      </p>

      <h3>Cara perhitungan rumus:</h3>

      <ol>
        <li>
          Bola di urutkan dari yang terkecil sampai yang terbesar.
        </li>

        <li>
          Bola ke 1 sampai bola ke 6 dijumlahkan
          7+21+29+32+36+38 = 163 di kali 2 = 326.
        </li>

        <li>
          Hasil dari 326 dikurangkan bola ke 1 (7) dan bola ke 6 (38)
          = 281.
        </li>

        <li>
          Sisa 281 ditambah additional number (04) = 285.
        </li>

        <li>
          Dari hasil 285, didapatkan 2 angka puluhan 85 tersebut.
          Setelah itu dicari angka ratusan dan ribuan nya.
        </li>

        <li>
          Untuk mendapat angka ratusan kita mengambil dari bola ke 4
          (32) ditambah bola ke 5 (36), jumlah = 68. Kita ambil ekor 8
          sebagai angka untuk ratusan.
        </li>

        <li>
          Untuk mendapat angka ribuan kita mengambil dari bola ke 2
          (21) ditambah bola ke 3 (29), jumlah = 50. Kita ambil ekor 0
          sebagai angka untuk ribuan.
        </li>
      </ol>

      <p>
        Maka hasil perhitungan diatas:
      </p>

      <p>
        Ribuan = 0<br>
        Ratusan = 8<br>
        Puluhan = 85
      </p>

      <p>
        Hasilnya = buka <strong>0885</strong>
      </p>
      Untuk melihat hasil dari perputaran nomor untuk toto Singapore ini bisa dilihat di website resminya.https://apitoto.com/.
      </p>
Untuk togel jenis 4D Singapore pengeluaran setiap hari kami mengambil pedoman sebagai nomor pengeluaran adalah berdasar kan 1st prize nomor yang dihasilkan oleh 4D Singapore untuk melihat hasil nomor tersebut bisa dilihat di apitoto.com.
    `,

    "empat-d": `
      <h2><span>4D/3D/2D</span></h2>
      <p>
        Panduan permainan 4D/3D/2D akan ditampilkan di bagian ini.
      </p>
    `,

    "colok-bebas": `
      <h2><span>COLOK</span> BEBAS</h2>
      <p>
        Panduan Colok Bebas akan ditampilkan di bagian ini.
      </p>
    `,

    "colok-bebas-2d": `
      <h2><span>COLOK BEBAS</span> 2D</h2>
      <p>
        Panduan Colok Bebas 2D akan ditampilkan di bagian ini.
      </p>
    `,

    "colok-naga": `
      <h2><span>COLOK</span> NAGA</h2>
      <p>
        Panduan Colok Naga akan ditampilkan di bagian ini.
      </p>
    `,

    "colok-jitu": `
      <h2><span>COLOK</span> JITU</h2>
      <p>
        Panduan Colok Jitu akan ditampilkan di bagian ini.
      </p>
    `
  };

  function showGuide(key, clickedButton) {
    const content =
      guides[key] ||
      `
        <h2><span>PANDUAN</span> PERMAINAN</h2>
        <p>
          Panduan untuk menu ini belum ditambahkan.
        </p>
      `;

    guideContent.classList.remove("is-visible");

    buttons.forEach(function (button) {
      button.classList.remove("active");
    });

    clickedButton.classList.add("active");

    setTimeout(function () {
      guideContent.innerHTML = content;
      guideContent.classList.add("is-visible");
      guideContent.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      showGuide(button.dataset.guide, button);
    });
  });
});