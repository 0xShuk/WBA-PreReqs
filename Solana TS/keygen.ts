import { Keypair } from "@solana/web3.js";

let kp = Keypair.generate();
console.log(`My generated Solana wallet: ${kp.publicKey.toBase58()}

To save the wallet, copy and paste the following in JOSN file:

[${kp.secretKey}]

`);