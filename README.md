# 📍 Discover Galway

Discover Galway is a mobile-friendly city guide designed for tourists and locals to easily navigate and explore Galway City. The app provides real-time directions, offline access, event listings, transport options, emergency info, and interactive maps — all in one simple interface.

Built using the Ionic Framework and Angular with Capacitor for native mobile features.

---

## 📱 Features

- 🗺️ **Interactive Map** with real-time GPS location and popular attractions
- 🍔 **Food & Drink Listings** with images, descriptions, and direct map links
- 🎉 **Local Events Calendar** with date, location, and directions
- 🚖 **Transport Info** including bus routes, taxis, rental options, and Ceannt Station
- 🚨 **Emergency Services** with call buttons and location-based directions
- 📡 **Offline Access** (via PWA support)
- 📍 **Location-aware routing** (Google Maps integration)
- 🔘 **Reusable Footer Navigation** with Back, Forward, Home, and Info icons
- ⚙️ Built-in storage for user preferences (via Ionic Storage)

---

## 🛠️ Technologies Used

- **Ionic Framework 7.2.1**
- **Angular 15+**
- **Capacitor** (for native plugins and Android build)
- **Leaflet.js** (for interactive maps)
- **@ionic/storage-angular** (local storage)
- **@angular/service-worker** (PWA/offline support)
- **Custom icons & SCSS for UI/UX**

---

## 📸 Screenshots

_Add screenshots here if you have them. Recommended size: 800px width._

---

## 📂 Folder Structure

src/ ├── app/ │ ├── home/ │ ├── events/ │ ├── map/ │ ├── emergency-info/ │ ├── footer-nav/ # Reusable component │ └── ... ├── assets/images/ # Custom icons and page images └── global.scss # App-wide styles and safe-area fixes


---

## 🧠 Problem Statement & Solution

Tourists in Galway often struggle with:

- Finding up-to-date attractions & event info
- Navigating public transport
- Accessing local emergency services
- Finding reliable offline guides

**Discover Galway** solves this by combining all those needs into one easy-to-use mobile app with offline functionality, GPS support, and smart UI design.

---

## 🚀 Getting Started

To build and run this app locally:

```bash
npm install
ionic build
npx cap sync
npx cap open android


To serve in browser:
ionic serve


📦 Installation (Android)
1. Plug in your Android device

2. Run ionic build

3. Run npx cap sync android

4. Open Android Studio: npx cap open android

5. Build and run on device

📄 License
This project was developed for the Mobile App Development module at ATU Galway, 2025.
Created by Nathan Carr.


---

## 📝 How to Use This

1. Create a new file in your repo:

2. Paste the contents into it
3. Add screenshots to a `/screenshots/` or `/assets/images/` folder and link them if you want
4. Commit + push

---


