<div align="center">
  <img alt="Logo" src="https://user-images.githubusercontent.com/62770500/199333052-3cd38b31-7e77-4883-a1ff-a037afcc0492.png" width="100" />
</div>
<h1 align="center">
  adityawaghamare.in
</h1>
<p align="center">
  The official portfolio of <strong>Aditya Waghamare</strong> — built with <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and hosted on <strong>Vercel</strong>.
</p>

<p align="center">
  <a href="https://www.adityawaghamare.in" target="_blank">
    <img src="https://raw.githubusercontent.com/DataDog/integrations-extras/master/vercel/images/logo-full-black.png" width="100" alt="Vercel Status" />
  </a>
</p>

---

## 🚨 About This Repository

This repository hosts my personal developer portfolio showing my software engineering journey, skills, and projects. 

### 🚀 Design Inspiration
The visual design is inspired by Brittany Chiang's layout, built entirely from scratch with **Next.js**, **Tailwind CSS**, and **Framer Motion**, and featuring an updated premium dark theme with custom orange accents, custom backdrop radial glows, and interactive sections.

---

### Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Technologies & Libraries](#technologies--libraries)
- [Installation & Set Up](#installation--set-up)
- [Building & Running for Production](#building--running-for-production)
- [API Routes Description](#api-routes-description)
- [🎨 Color References](#color-references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

A developer portfolio is a unique way to showcase projects, research, and professional work. I chose **Next.js** for its fast load times, Server-Side Rendering (SSR) capabilities (great for SEO ranking), and optimized image management. **Tailwind CSS** is utilized for clean, modular, and responsive styling.

---

## Key Features

1. **Intelligent Design**: Modern dark theme with custom orange accents and dynamic background radial gradients.
2. **Interactive Sections**: Fully responsive tabs for work history (Freelance, PCCOER studies, Hackathons history).
3. **Playful Interstellar Loaders**: Features a custom-built, playful "This Site Can't Be Reached" loading component that simulates a local connection check before animating in.
4. **Rich Integrations**: Bundled sub-projects like a speed typing challenge, API integrations, and customized IP lookup routes.

---

## Technologies & Libraries

- **Framework**: Next.js & React
- **Logic**: TypeScript
- **Styling**: Tailwind CSS & Vanilla CSS
- **Animations**: Framer Motion & AOS (Animate On Scroll)
- **APIs & Analytics**: Google Analytics, Vercel Analytics, Leaflet maps, and Custom API endpoints

---

### Installation & Set Up

1. **Clone the repository**:
   ```sh
   git clone https://github.com/adityawaghamare04/portfolio.git
   ```

2. **Use the correct version of Node** (via NVM):
   ```sh
   nvm install
   ```

3. **Install dependencies**:
   ```sh
   yarn install
   ```
   
4. **Create a local environment file** (Optional):
   ```bash
   touch .env.local
   ```

5. **Configure your API keys**:
   Add your Google API keys inside `.env.local`:
   ```env
   NEXT_PUBLIC_KEY_GOOGLE_API="your_google_api_key"
   ```

6. **Start the development server**:
   ```sh
   yarn dev
   ```

---

## Building & Running for Production

1. **Generate a production build**:
   ```sh
   yarn build
   ```

2. **Preview the production build**:
   ```sh
   yarn start
   ```

---

## API Routes Description

##### `GET /api/userInfoByIP/[IP-Address]`
Returns detailed geological data based on the visitor's IP address.
*   **Example**: `/api/userInfoByIP/159.89.173.104`
*   **Response**:
    ```json
    {
      "zip": "560002",
      "country": "India",
      "countryCode": "IN",
      "region": "KA",
      "regionName": "Karnataka",
      "city": "Bengaluru",
      "lat": 12.9634,
      "lon": 77.5855,
      "timezone": "Asia/Kolkata",
      "isp": "DigitalOcean, LLC",
      "org": "Digital Ocean",
      "query": "159.89.173.104"
    }
    ```

##### `GET /api/userInfoByLatLon/[lat]/[lon]`
Returns the zip code matching specific coordinates using Google Reverse Geocoding.
*   **Example**: `/api/userInfoByLatLon/12.9634/77.5855`
*   **Response**:
    ```json
    {
      "zipcode": "560002"
    }
    ```

##### `GET /api/typing/[minLength]`
Returns a random quote with a specific minimum character count for the built-in Speed Typing project.
*   **Example**: `/api/typing/120`

---

## Color References

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Primary Dark   | ![#0a0a0f](https://via.placeholder.com/10/0a0a0f?text=+) `#0a0a0f` |
| Accent Orange  | ![#ff7700](https://via.placeholder.com/10/ff7700?text=+) `#ff7700` |
| Tertiary Dark  | ![#14141e](https://via.placeholder.com/10/14141e?text=+) `#14141e` |
| Error Red      | ![#ff6488](https://via.placeholder.com/10/ff6488?text=+) `#ff6488` |
| White / Silver | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |

---

## License

MIT License
Copyright (c) 2026 Aditya Waghamare

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Author Info

*   **Website**: [adityawaghamare.in](https://www.adityawaghamare.in)
*   **LinkedIn**: [Aditya Waghamare](https://www.linkedin.com/in/aditya-waghamare-707595257/)
*   **GitHub**: [@adityawaghamare04](https://github.com/adityawaghamare04)

[Back To The Top](#description)
