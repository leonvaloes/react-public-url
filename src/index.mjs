#!/usr/bin/env node
import ngrok from "ngrok";
import inquirer from "inquirer";
import QRCode from "qrcode";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Function to generate a QR Code in the terminal
async function generateQRCode(url) {
    try {
        const qrCode = await QRCode.toString(url, { type: "terminal" });
        console.log("Here is the QR Code for your public site:");
        console.log(qrCode);
    } catch (err) {
        console.error("Error generating QR Code:", err);
    }
}

// Function to configure ngrok tunnel
async function configureNgrok() {
    try {
        // Get configuration from environment variables
        const port =
            process.env.PORT ||
            (
                await inquirer.prompt([
                    {
                        type: "input",
                        name: "port",
                        message:
                            "Which port is your application running on? (e.g., 3000):",
                        default: "3000",
                    },
                ])
            ).port;

        const authtoken = process.env.NGROK_AUTHTOKEN;
        if (!authtoken) {
            throw new Error("NGROK_AUTHTOKEN is not set in the .env file.");
        }

        // Set the ngrok authtoken
        await ngrok.authtoken(authtoken);

        // Create a tunnel using ngrok
        const url = await ngrok.connect(port);

        console.log(`Your public link is: ${url}`);
        await generateQRCode(url);
    } catch (err) {
        console.error("Error configuring ngrok:", err);
    }
}

// Run the ngrok configuration function
configureNgrok();
