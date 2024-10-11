# React Public URL - CLI Tool

This is a command-line interface (CLI) tool that simplifies the process of creating a public URL for your locally hosted applications using **ngrok**. It also generates a QR code for easy access to your public URL, making it convenient for testing your application across devices.

## Features

- Generate a public URL using **ngrok** for any local web server.
- Automatically generate and display a **QR code** in the terminal.
- Simple, interactive command-line interface to select the port of your application.
- Secure tunneling using **ngrok authtoken** for trusted connections.

## Requirements

- Node.js version 14 or higher.
- ngrok account (for obtaining the authentication token).

## Installation

To install this CLI tool, you can use npm:

```bash
npm install -g react-public-url
```

## Setup

1. After installing the package, create a `.env` file in your project root and add the following environment variables:
   
   ```
   PORT=3000  # Port where your local app is running
   NGROK_AUTHTOKEN=your_ngrok_auth_token  # Your ngrok authentication token
   ```

2. If you don't have an ngrok auth token, you can sign up for one at [ngrok](https://ngrok.com/).

3. In package.json, add the following to scripts:

   ```
   "react-public-url" : "react-public-url"
   ```

## Usage

1. Start your local application on any port, for example:

   ```bash
   npm start
   ```

2. Once your app is running, you can run the `react-public-url` CLI command to create a public URL and display the QR code in your terminal:

   ```bash
   react-public-url
   ```

3. The CLI will prompt you to enter the port your application is running on if it is not defined in the `.env` file:

   ```
   Which port is your application running on? (e.g., 3000):
   ```

4. After that, the tool will generate a public URL using **ngrok** and print it in the terminal:

   ```
   Your public link is: https://your-ngrok-url.ngrok.io
   ```

5. Additionally, a **QR code** will be generated directly in the terminal, allowing you to scan it with a mobile device to access the application instantly.

## Example

```bash
react-public-url
```

Output:

```
Your public link is: https://your-ngrok-url.ngrok.io
Here is the QR Code for your public site:
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/licenses/MIT) file for more information.

---

**Author:** Leonardo Valões Novaes Ribeiro  
**Version:** 1.0.1  
**Keywords:** ngrok, qr-code, cli

---
