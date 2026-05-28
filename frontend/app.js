import {
  db,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from './firebase.js';

import { connectWallet } from './ton.js';

const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe.user;
const uid = String(user.id);

const tapBtn = document.getElementById('tapBtn');
const coinsEl = document.getElementById('coins');
const energyEl = document.getElementById('energy');
const walletBtn = document.getElementById('walletBtn');

let coins = 0;
let energy = 1000;

async function initUser() {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      uid,
      coins: 0,
      energy: 1000,
      level: 1,
      wallet: '',
      createdAt: Date.now()
    });
  }

  const data = (await getDoc(ref)).data();

  coins = data.coins;
  energy = data.energy;

  updateUI();
}

function updateUI() {
  coinsEl.innerText = coins;
  energyEl.innerText = energy;
}

async function tap() {
  if (energy <= 0) return;

  coins += 1;
  energy -= 1;

  updateUI();

  const ref = doc(db, 'users', uid);

  await updateDoc(ref, {
    coins: increment(1),
    energy: increment(-1)
  });
}

setInterval(async () => {
  if (energy < 1000) {
    energy += 1;
    updateUI();

    const ref = doc(db, 'users', uid);

    await updateDoc(ref, {
      energy: increment(1)
    });
  }
}, 3000);

walletBtn.onclick = async () => {
  await connectWallet();
};

tapBtn.onclick = tap;

initUser();