import * as token from "@solana/spl-token";
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import wallet from "./wba_wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com", {commitment: "max"});

(async () => {
    const mintAccount = await token.createMint(
        connection, keypair, keypair.publicKey, 
        keypair.publicKey, 6 
    );

    console.log("Mint Account Created: ", mintAccount.toBase58());

    const tokenAccount = await token.getOrCreateAssociatedTokenAccount(
        connection, keypair, mintAccount, 
        keypair.publicKey
    );

    console.log("Token Account Created: ", tokenAccount.address.toBase58());

    const sig = await token.mintTo(connection, keypair, mintAccount, tokenAccount.address, keypair, 10000000)

    console.log("Token Airdropped", sig);
})()
