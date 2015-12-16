$(document).ready(function() {
$('input').change(function(){

 var I = $('.introvert:checked').length
 var E = $('.extrovert:checked').length 

 var S = $('.sensing:checked').length
 var N = $('.intuition:checked').length 

 var T = $('.thinking:checked').length
 var F = $('.feeling:checked').length 

 var J = $('.judging:checked').length
 var P = $('.perceiving:checked').length 

if (I > E) {
    satu = "I";
} else {
    satu = "E";
}; 

if (S > N) {
    dua = "S";
} else {
    dua = "N";
}; 

if (T > F) {
    tiga = "T";
} else {
    tiga = "F";
}; 

if (J > P) {
    empat = "J";
} else {
    empat = "P";
}; 

var mbti_total = satu+dua+tiga+empat;
if (mbti_total == "ISTJ") { keterangan = `
  <div>
    <span><strong><img  alt="ISTJ"  src="gambar/stickers/orig/191814f44f5d36f9a4.png"/*edgar allan poe*/><h3>ISTJ<small> (Bertanggungjawab)</small></h3></strong>
    <ul>
      <li>Serius, tenang, stabil &amp; damai.</li>
      <li>Senang pada fakta, logis, obyektif, praktis &amp; realistis.</li>
      <li>Task oriented, tekun, teratur, menepati janji, dapat diandalkan &amp;
        bertanggung jawab.</li>
      <li>Pendengar yang baik, setia, hanya mau berbagi dengan orang
        dekat.</li>
      <li>Memegang aturan, standar &amp; prosedur dengan teguh.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Belajarlah memahami perasaan &amp; kebutuhan orang lain.</li>
      <li>Kurangi keinginan untuk mengontrol orang lain atau memerintah mereka
        untuk menegakkan aturan.</li>
      <li>Lihatlah lebih banyak sisi positif pada orang lain atau hal lainnya.</li>
      <li>Terbukalah terhadap perubahan.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Bidang Manajemen, Polisi,
      Intelijen, Hakim, Pengacara, Dokter, Akuntan (Staf Keuangan), Programmer
      atau yang berhubungan dengan IT, System Analys, Pemimpin Militer</p>
    <p><strong><em>Pasangan/Partner Alami:</em></strong> ESFP atau ESTP</p>
    <strong></strong></span>
  </div>
`; }
else {
if (mbti_total == "ISFP") { keterangan = `
  <div>
    <span><strong><img  alt="ISFP"  src="gambar/stickers/orig/c906dac5e81170dc74.png"/*chaplin*/><h3>ISFP<small> (Artistik)</small></h3></strong>
    <ul>
      <li>Berpikiran simpel &amp; praktis, fleksibel, sensitif, ramah, tidak
        menonjolkan diri, rendah hati pada kemampuannya.</li>
      <li>Menghindari konflik, tidak memaksakan pendapat atau nilai-nilainya
        pada orang lain.</li>
      <li>Biasanya tidak mau memimpin tetapi menjadi pengikut dan pelaksana yang
        setia.</li>
      <li>Seringkali santai menyelesaikan sesuatu, karena sangat menikmati apa
        yang terjadi saat ini.</li>
      <li>Menunjukkan perhatian lebih banyak melalui tindakan dibandingkan
        kata-kata.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Jangan takut pada penolakan dan konflik. Anda tidak perlu menyenangkan
        semua orang.</li>
      <li>Cobalah untuk mulai memikirkan dampak jangka panjang dari
        keputusan-keputusan kecil di hari ini.</li>
      <li>Asah dan kembangkan sisi kreatifitas dan seni dalam diri Anda sebagai
        modal bagus dalam diri Anda.</li>
      <li>Cobalah untuk lebih terbuka dan mengekspresikan perasaan Anda.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Seniman, Designer, Pekerja
      Sosial, Konselor, Psikolog, Guru, Aktor, Bidang Hospitality</p>
    <p><strong><em>Pasangan/Partner Alami:</em></strong> ESFJ atau ENFJ</p></span>
  </div>
`;
}
else {
if (mbti_total == "INFJ") { keterangan = `
  <div>
    <span><strong><img  alt="INFJ"  src="gambar/stickers/orig/guevara.png"/**/><h3>INFJ<small> (Reflektif)</small></h3></strong>
    <ul>
      <li>Perhatian, empati, sensitif &amp; berkomitmen terhadap sebuah
        hubungan.</li>
      <li>Sukses karena ketekunan, originalitas dan keinginan kuat untuk
        melakukan apa saja yang diperlukan termasuk memberikan yg terbaik dalam
        pekerjaan.</li>
      <li>Idealis, perfeksionis, memegang teguh prinsip.</li>
      <li>Visioner, penuh ide, kreatif, suka merenung dan inspiring.</li>
      <li>Biasanya diikuti dan dihormati karena kejelasan visi serta dedikasi
        pada hal-hal baik.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Seimbangkan cara pandang Anda. Jangan hanya melihat sisi negatif &amp;
        resiko. Namun, lihatlah sisi positif dan peluangnya.</li>
      <li>Bersabarlah, jangan mudah marah dan menyalahkan orang lain atau
        situasi.</li>
      <li>Rileks dan jangan terus menerus berfikir atau menyelesaikan
        tanggungjawab.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Pengajar, Psikolog, Dokter,
      Konselor, Pekerja Sosial, Fotografer, Seniman, Designer, Child Care.</p>
    </span>
  </div>
`;
}
else {
if (mbti_total == "INTJ") { keterangan = `
  <div>
    <span><strong><img  alt="INTJ"  src="gambar/stickers/orig/4381a7a74256fe0b9b.png"/*einstein*/><h3>INTJ<small> (Independen)</small></h3></strong>
    <ul>
      <li>Visioner, punya perencanaan praktis, &amp; biasanya memiliki ide-ide
        original serta dorongan kuat untuk mencapainya.</li>
      <li>Mandiri dan percaya diri.</li>
      <li>Punya kemampuan analisa yang bagus serta menyederhanakan sesuatu yang
        rumit dan abstrak menjadi sesuatu yang praktis, mudah difahami &amp;
        dipraktekkan.</li>
      <li>Skeptis, kritis, logis, menentukan (determinatif) dan kadang keras
        kepala.</li>
      <li>Punya keinginan untuk berkembang serta selalu ingin lebih maju dari
        orang lain.</li>
      <li>Kritik &amp; konflik tidak menjadi masalah berarti.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Belajarlah mengungkapkan emosi &amp; perasaan Anda.</li>
      <li>Cobalah untuk lebih terbuka pada dunia luar, banyak bergaul, banyak
        belajar, banyak membaca, mengunjungi banyak tempat, eksplorasi hal baru,
        &amp; memperluas wawasan.</li>
      <li>Hindari perdebatan tidak penting.</li>
      <li>Belajarlah untuk berempati, memberi perhatian dan lebih peka terhadap
        orang lain.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Peneliti, Ilmuwan, Insinyur,
      Teknisi, Pengajar, Profesor, Dokter, Research &amp; Development, Business
      Analyst, System Analyst, Pengacara, Hakim, Programmers, Posisi Strategis
      dalam organisasi.</p>
    </span>
  </div>
`;
}
else {
if (mbti_total == "INFP") { keterangan = `
  <div>
    <span>﻿<strong><img  alt="INFP"  src="gambar/stickers/orig/d28d4a5029d010e953.png"/*ghandi*/><h3>INFP<small> (Idealis)</small></h3></strong>
    <ul>
      <li>Sangat perhatian dan peka dengan perasaan orang lain.</li>
      <li>Penuh dengan antusiasme dan kesetiaan, tapi biasanya hanya untuk orang
        dekat.</li>
      <li>Peduli pada banyak hal. Cenderung mengambil terlalu banyak dan
        menyelesaikan sebagian.</li>
      <li>Cenderung idealis dan perfeksionis.</li>
      <li>Berpikir win-win solution, mempercayai dan mengoptimalkan orang lain.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Belajarlah menghadapi kritik. Jika baik maka kritik itu bisa membangun
        Anda, namun jika tidak abaikan saja. Jangan ragu pula untuk bertanya dan
        minta saran.</li>
      <li>Belajarlah untuk bersikap tegas. Jangan selalu berperasaan dan
        menyenangkan orang dengan tindakan baik. Bertindak baik itu berbeda
        dengan bertindak benar.</li>
      <li>Jangan terlalu menyalahkan diri dan bersikap terlalu keras pada diri
        sendiri. Kegagalan adalah hal biasa dan semua orang pernah mengalaminya.</li>
      <li>Jangan terlalu baik pada orang lain tapi melupakan diri sendiri. Anda
        juga punya tanggungjawab untuk berbuat baik pada diri sendiri.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Penulis, Sastrawan, Konselor,
      Psikolog, Pengajar, Seniman, Rohaniawan, Bidang Hospitality</p>
    <p><strong><em>Pasangan/Partner Alami:</em></strong> ENFJ atau ESFJ</p>
    </span>
  </div>
`;
}
else {
if (mbti_total == "INTP") { keterangan = `
  <div>
    <span><strong><img  alt="INTP"  src="gambar/stickers/orig/lovecraft.png"/**/><h3>INTP<small> (Konseptual)</small></h3></strong>
    <ul>
      <li>Sangat menghargai intelektualitas dan pengetahuan. Menikmati hal-hal
        teoritis dan ilmiah. Senang memecahkan masalah dengan logika dan
        analisa.</li>
      <li>Diam dan menahan diri. Lebih suka bekerja sendiri.</li>
      <li>Cenderung kritis, skeptis, mudah curiga dan pesimis.</li>
      <li>Tidak suka memimpin dan bisa menjadi pengikut yang tidak banyak
        menuntut.</li>
      <li>Cenderung memiliki minat yang jelas. Membutuhkan karir dimana minatnya
        bisa berkembang dan bermanfaat. Jika menemukan sesuatu yang menarik
        minatnya, ia akan sangat serius dan antusias menekuninya.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Belajarlah membangun hubungan dengan orang lain. Belajar berempati,
        mendengar aktif, memberi perhatian dan bertukar pendapat.</li>
      <li>Relaks. Jangan terlalu banyak berfikir. Nikmati hidup Anda tanpa harus
        bertanya mengapa dan bagaimana.</li>
      <li>Cobalah menemukan satu ide, merencanakan dan mewujudkannya. Jangan
        terlalu sering berganti-ganti ide tetapi tidak satupun yang terwujud.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Ilmuwan, Fotografer, Programmer,
      Ahli komputer, System Analyst, Penulis Buku Teknis, Ahli Forensik, Jaksa,
      Pengacara, Teknisi</p>
    </span>
  </div>
`;
}
else {
if (mbti_total == "ESTP") { keterangan = `
  <div>
    <span><strong><img  alt="ESTP"  src="gambar/stickers/orig/freediemercury.png"/**/><h3>ESTP<small></strong><strong> (Spontan)</small></h3></strong>
    <ul>
      <li>Spontan, Aktif, Enerjik, Cekatan, Cepat, Sigap, Antusias, Fun dan
        penuh variasi.</li>
      <li>Komunikator, asertif, to the point, ceplas-ceplos, berkarisma, punya
        interpersonal skill yang baik.</li>
      <li>Baik dalam pemecahan masalah langsung di tempat. Mampu menghadapi
        masalah, konflik dan kritik. Tidak khawatir, menikmati apapun yang
        terjadi.</li>
      <li>Cenderung untuk menyukai sesuatu yang mekanistis, kegiatan bersama dan
        olahraga.</li>
      <li>Mudah beradaptasi, toleran, pada umumnya konservatif tentang
        nilai-nilai. Tidak suka penjelasan terlalu panjang. Paling baik dalam
        hal-hal nyata yang dapat dilakukan.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Belajarlah memahami perasaan dan pemikiran orang lain terutama saat
        bicara dengan mereka.</li>
      <li>Belajarlah untuk sabar, menikmati proses, tidak semua hal bisa dicapai
        dengan cepat.</li>
      <li>Sesekali luangkan waktu untuk merenung dan merencanakan masa depan
        Anda.</li>
      <li>Cobalah untuk mencatat pengamatan-pengamatan Anda termasuk detailnya.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Marketing, Sales, Polisi,
      Entrepreneur, Pialang Saham, Technical Support</p>
    </span>
  </div>
`;
}
else {
if (mbti_total == "ESFP") { keterangan = `
  <div>
    <span><strong><img  alt="ESFP"  src="gambar/stickers/orig/4a2f85c6feac9e1bca.png"/*bob marley*/><h3>ESFP<small></strong><strong> (Murah Hati)</small></h3></strong>
    <ul>
      <li><em>Outgoing</em>,&nbsp;<em>easygoing,</em> mudah berteman,
        bersahabat, sangat sosial, ramah, hangat, &amp; menyenangkan.</li>
      <li>Optimis, ceria, antusias, fun, menghibur, suka menjadi perhatian.</li>
      <li>Punya interpersonal skill yang baik, murah hati, mudah simpatik dan
        mengenali perasaan orang lain. Menghindari konflik dan menjaga
        keharmonisan suatu hubungan.</li>
      <li>Mengetahui apa yang terjadi di sekelilingnya dan ikut serta dalam
        kegiatan tersebut.</li>
      <li>Sangat baik dalam keadaan yang membutuhkan&nbsp;<em>common sense</em><em>,
        </em>tindakan cepat<em> </em>dan ketrampilan praktis.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Jangan terburu-buru dalam mengambil keputusan. Belajarlah untuk fokus
        dan tidak mudah berubah-ubah terutama untuk hal yang penting.</li>
      <li>Jangan menyenangkan semua orang. Begitu pula sebaliknya, tidak semua
        orang bisa menyenangkan Anda.</li>
      <li>Belajarlah menghadapi kritik dan konflik. Jangan lari.</li>
      <li>Anda punya kecenderungan meterialistis. Hati-hati, tidak semua hal
        bisa diukur dengan materi ataupun uang.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Entertainer, Seniman, Marketing,
      Konselor, Designer, Tour Guide, Bidang Anak-anak, Bidang Hospitality</p>
    </span>
  </div>
`;
}
else {
if (mbti_total == "ISFJ") { keterangan = `
  <div>
    <span><strong><img  alt="ISFJ"  src="gambar/stickers/orig/c082e8a2ad59522cfd.png"/*Mark Twain*/><h3>ISFJ<small> (Setia)</small></h3></strong>
    <ul>
      <li>Penuh pertimbangan, hati-hati, teliti dan akurat.</li>
      <li>Serius, tenang, stabil namun sensitif.</li>
      <li>Ramah, perhatian pada perasaan &amp; kebutuhan orang lain, setia,
        kooperatif, pendengar yang baik.</li>
      <li>Punya kemampuan mengorganisasi, detail, teliti, sangat
        bertanggungjawab &amp; bisa diandalkan.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Lihat lebih dalam, lebih antusias, &amp; lebih semangat.</li>
      <li>Belajarlah mengatakan ”tidak”. Jangan menyenangkan semua orang atau
        Anda dianggap plin plan.</li>
      <li>Jangan terjebak zona nyaman dan rutinitas. Cobalah hal baru. Ada
        banyak hal menyenangkan yang mungkin belum pernah Anda coba.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Architect, Interior Designer,
      Perawat, Administratif, Designer, Child Care, Konselor, Back Office
      Manager, Penjaga Toko / Perpustakaan, Dunia Perhotelan.</p>
    </span>
  </div>
`;
}
else {
if (mbti_total == "ENFP") { keterangan = `
  <div>
    <span><strong><img  alt="ENFP"  src="gambar/stickers/orig/d19275c7c681c63367.png"/*diana*/><h3>ENFP<small></strong><strong> (Optimis)</small></h3></strong>
    <ul>
      <li>Ramah, hangat, enerjik, optimis, antusias, semangat tinggi, fun.</li>
      <li>Imaginatif, penuh ide, kreatif, inovatif.</li>
      <li>Mampu beradaptasi dengan beragam situasi dan perubahan.</li>
      <li>Pandai berkomunikasi, senang bersosialisasi &amp; membawa suasana
        positif.</li>
      <li>Mudah membaca perasaan dan kebutuhan orang lain.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Belajarlah untuk fokus, disiplin, tegas dan konsisten</li>
      <li>Belajarlah untuk menghadapi konflik dan kritik.</li>
      <li>Pikirkan kebutuhan diri sendiri. Jangan melupakannya karena terlalu
        peduli pada kebutuhan orang lain.</li>
      <li>Jangan terlalu boros. Belajarlah untuk mengelola keuangan sedikit demi
        sedikit.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Konselor, Psikolog, Entertainer,
      Pengajar, Motivator, Presenter, Reporter, MC, Seniman, Hospitality</p>
    </span>
  </div>
`;
}
else {
if (mbti_total == "ENTP") { keterangan = `
  <div>
    <span><strong><img  alt="ENTP"  src="gambar/stickers/orig/55f6c9c9f87c4dceb0.png"/*steve jobs*/><h3>ENTP<small> (Inovatif – Kreatif)</small></h3></strong>
    <ul>
      <li>Gesit, kreatif, inovatif, cerdik, logis, baik dalam banyak hal.</li>
      <li>Banyak bicara dan punya kemampuan debat yang baik. Bisa berargumentasi
        untuk senang-senang saja tanpa merasa bersalah.</li>
      <li>Fleksibel. Punya banyak cara untuk memecahkan masalah dan tantangan.</li>
      <li>Kurang konsisten. Cenderung untuk melakukan hal baru yang menarik hati
        setelah melakukan sesuatu yang lain.</li>
      <li>Punya keinginan kuat untuk mengembangkan diri.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Cobalah untuk win-win solution. Jangan ingin menang sendiri.</li>
      <li>Belajarlah untuk disiplin dan konsisten.</li>
      <li>Hindari perdebatan tidak penting.</li>
      <li>Belajarlah untuk sedikit waspada. Seimbangkan cara pandang Anda agar
        tidak terlalu optimis dan mengambil resiko yang tidak realistis.</li>
      <li>Belajarlah untuk memberi perhatian pada perasaan orang lain.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Pengacara, Psikolog, Konsultan,
      Ilmuwan, Aktor,Marketing, Programmer, Fotografer</p>
    
    </span>
  </div>
`;
}
else {
if (mbti_total == "ESTJ") { keterangan = `
  <div>
    <span><strong><img  alt="ESTJ"  src="gambar/stickers/orig/a75eee858dd829fb89.png"/*julius caesar*/><h3>ESTJ<small> (Konservatif – Disiplin)</small></h3></strong>
    <ul>
      <li>Praktis, realistis, berpegang pada fakta, dengan dorongan alamiah
        untuk bisnis dan mekanistis.</li>
      <li>Sangat sistematis, procedural dan terencana.</li>
      <li>Disiplin, on time dan pekerja keras.</li>
      <li>Konservatif dan cenderung kaku.</li>
      <li>Tidak tertarik pada subject yang tidak berguna baginya, tapi dapat
        menyesuaikan diri jika diperlukan.</li>
      <li>Senang mengorganisir sesuatu. Bisa menjadi administrator yang baik
        jika mereka ingat untuk memperhatikan perasaan dan perspektif orang
        lain.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Kurangi keinginan untuk mengontrol dan memaksa orang lain.</li>
      <li>Belajarlah untuk mengontrol emosi dan amarah Anda.</li>
      <li>Cobalah untuk introspeksi diri dan meluangkan waktu sejenak untuk
        merenung.</li>
      <li>Belajarlah untuk lebih sabar dan low profile</li>
      <li>Belajarlah untuk memahami orang lain.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Militer, Manajer, Polisi, Hakim,
      Pengacara, Guru, Sales, Auditor, Akuntan, System Analyst</p>
    </span>
  </div>
`;
}
else {
if (mbti_total == "ESFJ") { keterangan = `
  <div>
    <span><strong><img  alt="ESFJ"  src="gambar/stickers/orig/16635fe8e0485bd0b8.png"/*Virginia Woolf*/><h3>ESFJ<small> (Harmonis)</small></h3></strong>
    <ul>
      <li>Hangat, banyak bicara, populer, dilahirkan untuk bekerjasama, suportif
        dan anggota kelompok yang aktif.</li>
      <li>Membutuhkan keseimbangan dan baik dalam menciptakan harmoni.</li>
      <li>Selalu melakukan sesuatu yang manis bagi orang lain. Kerja dengan baik
        dalam situasi yang mendukung dan memujinya.</li>
      <li>Santai, easy going, sederhana, tidak berfikir panjang.</li>
      <li>Teliti dan rajin merawat apa yang ia miliki.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Jangan mengorbankan diri hanya untuk menyenangkan orang lain.</li>
      <li>Jangan mengukur harga diri Anda dari perlakuan, penghargaan dan pujian
        orang lain.</li>
      <li>Mintalah pertimbangan orang lain dalam mengambil keputusan. Belajarlah
        untuk lebih tegas.</li>
      <li>Terima tanggungjawab hidup dan belajarlah untuk lebih dewasa. Jangan
        mengasihani diri sendiri.</li>
      <li>Hadapi kritik dan konflik, jangan lari.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Perencana Keuangan, Perawat,
      Guru, Bidang anak-anak, Konselor, Administratif, Hospitality</p>
    </span>
  </div>
`;
}
else {
if (mbti_total == "ENFJ") { keterangan = `
  <div>
    <span><strong><img  alt="ENFJ"  src="gambar/stickers/orig/68ae9b4e90b10c1fb8.png"/*monroe*/><h3>ENFJ<small> (Meyakinkan)</small></h3></strong>
    <ul>
      <li>Kreatif, imajinatif, peka, sensitive, loyal.</li>
      <li>Pada umumnya peduli pada apa kata orang atau apa yang orang lain
        inginkan dan cenderung melakukan sesuatu dengan memperhatikan perasaan
        orang lain.</li>
      <li>Pandai bergaul, meyakinkan, ramah, fun, populer, simpatik. Responsif
        pada kritik dan pujian.</li>
      <li>Menyukai variasi dan tantangan baru.</li>
      <li>Butuh apresiasi dan penerimaan.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Jangan mengorbankan diri hanya untuk menyenangkan orang lain.</li>
      <li>Jangan mengukur harga diri Anda dari perlakuan orang lain. Jangan
        mudah kecewa jika mereka tidak seperti yang Anda inginkan.</li>
      <li>Belajarlah untuk tegas dan mengambil keputusan. Menghadapi kritik dan
        konflik.</li>
      <li>Jangan terlalu bersikap keras terhadap diri sendiri.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Konsultan, Psikolog, Konselor,
      Pengajar, Marketing, HRD, Event Coordinator, Entertainer, Penulis,
      Motivator</p>
    <p><strong><em>Pasangan/Partner Alami:</em></strong> INFP atau ISFP</p>
    </span>
  </div>
`;
}
else {
if (mbti_total == "ENTJ") { keterangan = `
  <div>
    <span><strong><img  alt="ENTJ"  src="gambar/stickers/orig/53f9f1fc731c63547d.png"/*abraham lincoln*/><h3>ENTJ<small> (Pemimpin Alami)</small></h3></strong>
    <ul>
      <li>Tegas, asertif, to the point, jujur terus terang, obyektif, kritis,
        &amp; punya standard tinggi.</li>
      <li>Dominan, kuat kemauannya, perfeksionis dan kompetitif.</li>
      <li>Tangguh, disiplin, dan sangat menghargai komitmen.</li>
      <li>Cenderung menutupi perasaan dan menyembunyikan kelemahan.</li>
      <li>Berkarisma, komunikasi baik, mampu menggerakkan orang.</li>
      <li>Berbakat pemimpin.</li>
    </ul>
    <p><strong><em>Saran Pengembangan:</em></strong></p>
    <ul>
      <li>Belajarlah untuk relaks. Tidak perlu perfeksionis dan selalu
        kompetitif dengan semua orang.</li>
      <li>Ungkapkan perasaan Anda. Menyatakan perasaan bukanlah kelemahan.</li>
      <li>Belajarlah mengelola emosi Anda. Jangan mudah marah.</li>
      <li>Belajarlah untuk menghargai dan mengapresiasi orang lain.</li>
      <li>Jangan terlalu arogan dan menganggap remeh orang lain. Lihat sisi
        positifnya. Jangan hanya melihat benar dan salah saja.</li>
    </ul>
    <p><strong><em>Saran Profesi:</em></strong> Entrepreneur, Pengacara, Hakim,
      Konsultan, Pemimpin Organisasi, Business analyst, Bidang Finansial</p>
    </span>
  </div>
`;
}
else {
if (mbti_total == "ISTP") { keterangan = `
  <div>
    <span><p><img  alt="istp"  src="gambar/stickers/orig/da6c69de6ad5afcb8f.png"/*john lenon*/>
<h3>ISTP<small> (Pragmatis)</small></h3><br>
    </p>
    <ul>
      <li>&nbsp;&nbsp;&nbsp; Tenang, pendiam, cenderung kaku, dingin, hati-hati,
        penuh pertimbangan.</li>
      <li>&nbsp;&nbsp;&nbsp; Logis, rasional, kritis, obyektif, mampu
        mengesampingkan perasaan.</li>
      <li>&nbsp;&nbsp;&nbsp; Mampu menghadapi perubahan mendadak dengan cepat
        dan tenang.</li>
      <li>&nbsp;&nbsp;&nbsp; Percaya diri, tegas dan mampu menghadapi perbedaan
        maupun kritik.</li>
      <li>&nbsp;&nbsp;&nbsp; Mampu menganalisa, mengorganisir, &amp;
        mendelegasikan.</li>
      <li>&nbsp;&nbsp;&nbsp; Problem solver yang baik terutama untuk masalah
        teknis &amp; keadaan mendadak.</li>
    </ul>
    <p><br>
      Saran Pengembangan:<br>
    </p>
    <ul>
      <li>&nbsp;&nbsp;&nbsp; Observasilah kehidupan sosial, apa yang
        membuat orang marah, cinta, senang, termotivasi &amp; terapkan pada
        hubungan Anda.</li>
      <li>&nbsp;&nbsp;&nbsp; Belajarlah untuk mengenali perasaan Anda dan
        mengekspresikannya.</li>
      <li>&nbsp;&nbsp;&nbsp; Jadilah orang yang lebih terbuka, keluar dari zona
        nyaman, eksplorasi ide baru, dan berdiskusi dengan orang lain.</li>
      <li>&nbsp;&nbsp;&nbsp; Jangan mencari-cari kesalahan orang hanya untuk
        menyelesaikan masalahnya.</li>
      <li>&nbsp;&nbsp;&nbsp; Jangan menyimpan informasi yang harusnya dibagi dan
        belajarlah mempercayakan tanggungjawab pada orang lain.</li>
    </ul>
    <p><br>
      Saran Profesi: Polisi, Ahli Forensik, Programmer, Ahli Komputer, System
      Analyst, Teknisi, Insinyur, Mekanik, Pilot, Atlit, Entrepreneur<br>
      <br>
      Pasangan/Partner Alami: ESTJ atau ENTJ</p></span>
`;
}}}}}}}}}}}}}}}}

$("#hasil").html(keterangan);
})
});