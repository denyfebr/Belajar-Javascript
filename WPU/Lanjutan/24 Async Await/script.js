// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('selesai');
//   }, 2000);
// });

// coba.then(() => console.log(coba));
//console.log(coba);

function cobaPromise() {
  return new Promise((resolve, reject) => {
    let start = performance.now(); // waktu mulai

    for (let i = 0; i < 1000000; i++) {
      // looping simulasi
      let x = i * 2;
    }

    let end = performance.now(); // waktu selesai

    const waktu = end - start;

    if (waktu < 5) {
      setTimeout(() => {
        resolve(`selesai pada waktu ${Math.ceil(waktu)} ms`);
      }, waktu);
    } else {
      reject(`kelamaan ancok! ${Math.ceil(waktu)} ms`);
    }
  });
}

// Belum Async dan Await
// const coba = cobaPromise();
// coba.then((coba) => console.log(coba)).catch((coba) => console.log(coba));

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}

cobaAsync();
