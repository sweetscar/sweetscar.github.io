window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        $('nav').addClass('shadow-sm')
    } else {
        $('nav').removeClass('shadow-sm')
    }
})

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });
});

let swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    spaceBetween: 5,
    slidesPerView: 1.1,
    pagination: {
        el: '.swiper-pagination',
    },
});
let projectTitle = $('#project-title')
let projectDescription = $('#project-description')

$('#swiper-control-button .swiper-prev').on('click', () => {
    swiper.slidePrev(500)
})
$('#swiper-control-button .swiper-next').on('click', () => {
    swiper.slideNext(500)
})

let projects = [
    {
        title: "Web Portofolio",
        description: "<p>Di dalam website ini terdapat berbagai postingan tentang pemrograman dan teknologi, showcase proyek saya, dan beberapa video yang saya ambil dari channel YouTube saya.</p><ul><li><strong>Jenis Aplikasi:</strong> Web</li><li><strong>Stack:</strong> Python, Django, PostgreSQL, Javascript, Bootstrap</li><li><strong>Hosting:</strong> Heroku</li><li><strong>Storage:</strong> AWS S3</li><li><strong>Link:</strong> <a href='https://rizkykurniawan.herokuapp.com'>Click Here</a></li></ul>"
    },
    {
        title: "Web Pemerintahan",
        description: "<p>Website Resmi Pemerintah Desa Tahai Jaya</p><ul><li><strong>Jenis Aplikasi:</strong>Web</li><li><strong>Stack:</strong> PHP, MySQL, Codeigniter3, JQuery, Javascript</li><li><strong>Link:</strong><a href='https://tahaijaya.desa.id/'>Click Here</a></li></ul>"
    },
    {
        title: "Web Organisasi",
        description: "<p>Website Himpunan Mahasiswa Prodi Teknik Informatika (HMP-TI) UNISKA.</p><ul><li><strong>Jenis Aplikasi:</strong>Web</li><li><strong>Stack:</strong>PHP, MySQL, Codeigniter3, Bootstrap, JQuery, Javascript</li><li><strong>Link:</strong><a href='https://hmpti-uniska.com/'>Click Here</a></li></ul>"
    },
]

swiper.on('slideChange', () => {
    projectTitle.html(projects[swiper.realIndex].title)
    projectDescription.html(projects[swiper.realIndex].description)

})

// Modals
function showVideoModal(videoId) {
    $('#videoModal .iframe-container').hide()
    $('#videoModal .loader').show()
    $('#videoModal').modal('show')
    let url = "https://www.youtube.com/embed/" + videoId + "?rel=0"
    $('#videoModal iframe').attr('src', url)
    setTimeout(() => {
        $('#videoModal .iframe-container').show()
        $('#videoModal .loader').hide()
    }, 1000)
}

let videoModal = document.getElementById('videoModal')
videoModal.addEventListener('hide.bs.modal', function (event) {
    let iframe = $('#videoModal iframe')
    let url = iframe.attr('src')
    $('#videoModal iframe').attr('src', '')
    $('#videoModal iframe').attr('src', url)
})

function showBlogModal(blogId) {
    let blogs = [
        {
            title: "Mengenal Bahasa Pemrograman Kotlin",
            content: "<p><strong>Kotlin</strong> adalah sebuah bahasa pemrograman dengan pengetikan statis yang berjalan pada Mesin Virtual Java ataupun menggunakan kompiler LLVM yang dapat pula dikompilasikan kedalam bentuk kode sumber JavaScript.Pengembang utamanya berasal dari tim programer dari JetBrains yang bermarkas di Rusia.Meskipun sintaksisnya tidak kompatibel dengan bahasa Java, Kotlin didesain untuk dapat bekerja sama dengan kode bahasa Java dan bergantung kepada kode bahasa Java dari Kelas Pustaka Java yang ada, seperti berbagai framework Java yang ada. Tim Pengembang memutuskan menamakannya Kotlin dengan mengambil nama dari sebuah pulau di Rusia, sebagaimana Java yang mengambil nama dari pulau Jawa di Indonesia.Setelah Google mengumumkan bahwa Kotlin menjadi bahasa kelas satu bagi Android, maka bersama Java dan C++, Kotlin menjadi bahasa resmi untuk pengembangan aplikasi - aplikasi Android.</p><p>Kotlin versi 1.0 dirilis pada 15 Februari 2016 Versi ini secara resmi ditetapkan sebagai versi rilis stabil pertama dan JetBrains telah menetapkan dukungan versi sebelumnya untuk jangka panjangan dengan versi ini. Pada Google I/O 2017, Google mengumumkan dukungan kelas pertama untuk Kotlin pada Android. Kotlin versi 1.2 dirilis pada 28 November 2017. Fitur berbagi kode antara JVM dan platform Javascript baru ditambahkan pada versi rilis ini. Kotlin versi 1.3 dirilis pada 29 Oktober 2018, membawa coroutines pada pemrograman asynchronous.</p>",
            image: "assets/img/1.png"
        },
        {
            title: "Mengenal Bahasa Pemrograman Python",
            content: "<p>Python adalah bahasa pemrograman interpretatif multiguna dengan filosofi perancangan yang berfokus pada tingkat keterbacaan kode. Python diklaim sebagai bahasa yang menggabungkan kapabilitas, kemampuan, dengan sintaksis kode yang sangat jelas, dan dilengkapi dengan fungsionalitas pustaka standar yang besar serta komprehensif. Python juga didukung oleh komunitas yang besar.</p><p>Python mendukung multi paradigma pemrograman, utamanya; namun tidak dibatasi; pada pemrograman berorientasi objek pemrograman imperatif, dan pemrograman fungsional.Salah satu fitur yang tersedia pada python adalah sebagai bahasa pemrograman dinamis yang dilengkapi dengan manajemen memori otomatis.Seperti halnya pada bahasa pemrograman dinamis lainnya, python umumnya digunakan sebagai bahasa skrip meski pada praktiknya penggunaan bahasa ini lebih luas mencakup konteks pemanfaatan yang umumnya tidak dilakukan dengan menggunakan bahasa skrip.Python dapat digunakan untuk berbagai keperluan pengembangan perangkat lunak dan dapat berjalan di berbagai platform sistem operasi.</p><p>Saat ini kode python dapat dijalankan di berbagai platform sistem operasi, beberapa di antaranya adalah:</p><ul><li>Linux/Unix</li><li>Windows</li><li>Mac OS X</li><li>Java Virtual Machine</li><li>OS/2</li><li>Amiga</li><li>Palm</li><li>Symbian (untuk produk-produk Nokia)</li></ul><p>Python didistribusikan dengan beberapa lisensi yang berbeda dari beberapa versi. Lihat sejarahnya di Python Copyright. Namun pada prinsipnya Python dapat diperoleh dan dipergunakan secara bebas, bahkan untuk kepentingan komersial. Lisensi Python tidak bertentangan baik menurut definisi Open Source maupun General Public License (GPL).</p><p>Python dikembangkan oleh Guido van Rossum pada tahun 1990 di Stichting Mathematisch Centrum (CWI), Amsterdam sebagai kelanjutan dari bahasa pemrograman ABC. Versi terakhir yang dikeluarkan CWI adalah 1.2.</p><p>Tahun 1995, Guido pindah ke CNRI di Virginia Amerika sambil terus melanjutkan pengembangan Python. Versi terakhir yang dikeluarkan adalah 1.6 Tahun 2000, Guido dan para pengembang inti Python pindah ke <a href='http://BeOpen.com'>BeOpen.com</a> yang merupakan sebuah perusahaan komersial dan membentuk BeOpen PythonLabs. Python 2.0 dikeluarkan oleh BeOpen. Setelah mengeluarkan Python 2.0, Guido dan beberapa anggota tim PythonLabs pindah ke DigitalCreations.</p><p>Saat ini pengembangan Python terus dilakukan oleh sekumpulan pemrogram yang dikoordinir Guido dan Python Software Foundation. Python Software Foundation adalah sebuah organisasi non-profit yang dibentuk sebagai pemegang hak cipta intelektual Python sejak versi 2.1 dan dengan demikian mencegah Python dimiliki oleh perusahaan komersial. Saat ini distribusi Python sudah mencapai versi 2.7.14 dan versi 3.6.3</p><p>Nama Python dipilih oleh Guido sebagai nama bahasa ciptaannya karena kecintaan Guido pada acara televisi Monty Python's Flying Circus. Oleh karena itu sering kali ungkapan-ungkapan khas dari acara tersebut sering kali muncul dalam korespondensi antar pengguna Python.</p><p>Semua versi python yang dirilis bersifat open source. Dalam sejarahnya, hampir semua rilis python menggunakan lisensi GFL-compatible. Berikut adalah versi mayor dan minor python berikut tanggal rilisnya.</p><ol><li>Python 1.0 – Januari 1994</li><li>Python 1.2 – 10 April 1995</li><li>Python 1.3 – 12 Oktober 1995</li><li>Python 1.4 – 25 Oktober 1996</li><li>Python 1.5 – 31 Desember 1997</li><li>Python 1.6 – 5 September 2000</li><li>Python 2.0 – 16 Oktober 2000</li><li>Python 2.1 – 17 April 2001</li><li>Python 2.2 – 21 Desember 2001</li><li>Python 2.3 – 29 Juli 2003</li><li>Python 2.4 – 30 Nopember 2004</li><li>Python 2.5 – 19 September 2006</li><li>Python 2.6 – 1 Oktober 2008</li><li>Python 2.7 – 3 Juli 2010</li><li>Python 3.0 – 3 Desember 2008</li><li>Python 3.1 – 27 Juni 2009</li><li>Python 3.2 – 20 Februari 2011</li><li>Python 3.3 – 29 September 2012</li><li>Python 3.4 – 16 Maret 2014<li><li>Python 3.5 – 13 September 2015</li><li>Python 3.6 – 23 Desember 2016</li><li>Python 3.7 – 27 Juni 2018</li><li>Python 3.8 – 14 Oktober 2019<li></ol><p>Beberapa fitur yang dimiliki Python adalah:</p><ol><li>memiliki kepustakaan yang luas; dalam distribusi Python telah disediakan modul-modul 'siap pakai' untuk berbagai keperluan.</li><li>memiliki tata bahasa yang jernih dan mudah dipelajari.</li> <li>memiliki aturan layout kode sumber yang memudahkan pengecekan, pembacaan kembali dan penulisan ulang kode sumber.</li> <li>berorientasi objek.</li> <li>memiliki sistem pengelolaan memori otomatis (garbage collection, seperti java)</li> <li>modular, mudah dikembangkan dengan menciptakan modul-modul baru; modul-modul tersebut dapat dibangun dengan bahasa Python maupun C/C++.</li> <li>memiliki fasilitas pengumpulan sampah otomatis, seperti halnya pada bahasa pemrograman Java, python memiliki fasilitas pengaturan penggunaan ingatan komputer sehingga para pemrogram tidak perlu melakukan pengaturan ingatan komputer secara langsung.</li><li>memiliki banyak faslitas pendukung sehingga mudah dalam pengoperasiannya.</li></ol>",
            image: "assets/img/2.jpg"
        },
        {
            title: "Apa itu GitHub Page?",
            content: "<p>GitHub Pages adalah layanan hosting situs statis yang mengambil file HTML, CSS, dan JavaScript langsung dari repositori di GitHub, secara opsional menjalankan file melalui proses pembuatan, dan menerbitkan situs web. Anda dapat melihat contoh situs Halaman GitHub di kumpulan contoh Halaman GitHub .</p><p>Anda dapat menghosting situs Anda di github.iodomain GitHub atau domain kustom Anda sendiri.Untuk informasi lebih lanjut, lihat 'Menggunakan domain kustom dengan Halaman GitHub.'</p><p>Jika situs project Anda dipublikasikan dari repositori pribadi atau internal yang dimiliki oleh organisasi menggunakan GitHub Enterprise Cloud Anda dapat mengelola kontrol akses untuk situs tersebut. Untuk informasi lebih lanjut, lihat 'Mengubah visibilitas situs Halaman GitHub Anda.'</p><p>Untuk memulai, lihat 'Membuat situs Halaman GitHub'.</p><p>Pemilik organisasi dapat menonaktifkan publikasi situs Halaman GitHub dari repositori organisasi. Untuk informasi selengkapnya, lihat 'Mengelola publikasi situs Halaman GitHub untuk organisasi Anda .'</p>",
            image: "assets/img/3.jpg"
        },
        {
            title: "Mengenal Bahasa Pemrograman Kotlin",
            content: "",
            image: "assets/img/1.png"
        },
    ]
    let blogModal = $('#blogModal')
    $('#blogModal img').attr('src', blogs[blogId].image)
    $('#blogModal .blog-title').html(blogs[blogId].title)
    $('#blogModal article').html(blogs[blogId].content)
    blogModal.modal('show')
}