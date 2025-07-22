const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function () {
  // document.body.style.backgroundColor = 'lightblue';
  // document.body.setAttribute('class','biru-muda');
  document.body.classList.toggle('biru-muda');
};

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

const lNilaiWarnaMerah = document.createElement('p');
lNilaiWarnaMerah.setAttribute('class', 'teksmerah');

// Sisipkan label nilai di bawah slider merah
sMerah.after(lNilaiWarnaMerah);

sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  // Ubah background
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

  // Perbarui isi teks
  lNilaiWarnaMerah.textContent = `Merah: ${r}`;
});

const lNilaiWarnaHijau = document.createElement('p');
lNilaiWarnaHijau.setAttribute('class', 'tekshijau');

// Sisipkan label nilai di bawah slider hijau
sHijau.after(lNilaiWarnaHijau);

sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  // Ubah background
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

  // Perbarui isi teks
  lNilaiWarnaHijau.textContent = `Hijau: ${g}`;
});

const lNilaiWarnaBiru = document.createElement('p');
lNilaiWarnaBiru.setAttribute('class', 'teksbiru');

// Sisipkan label nilai di bawah slider biru
sBiru.after(lNilaiWarnaBiru);

sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  // Ubah background
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

  // Perbarui isi teks
  lNilaiWarnaBiru.textContent = `Biru: ${b}`;
});

document.body.addEventListener('mousemove', function (event) {
  // posisi mouse
  // console.log(event.clientX);
  // ukuran browser
  // console.log(window.innerWidth);

  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  console.log(xPos);

  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  console.log(yPos);

  document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
});
