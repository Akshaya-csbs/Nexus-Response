<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# NexusResponse

NexusResponse is a next-generation crisis coordination and emergency resource management system. Built for facility administrators and emergency responders, it provides real-time situational awareness, dynamic resource tracking, and automated guest guidance during critical events.

## Features

- **Real-Time Operational Dashboard**: Monitor facility status, active incidents, and core services at a glance with a high-fidelity "Sentinel" UI.
- **Resource Inventory Engine**: Floor-wise allocation tracking for essential supplies (linens, safety kits, medical, water) with direct Firebase synchronization.
- **Responder Unit Management**: Track deployment status, commander assignments, and active sectors for all security and emergency personnel.
- **Guest Guide Interface**: A guest-facing portal (SafeStay) providing interactive facility maps, SOS features, and dynamic evacuation routes during an emergency.
- **System Activity Logging**: Comprehensive transaction and event history for the NexusResponse Hub.
- **Visual Demo Mode**: Includes an immersive presentation mode simulating crisis coordination capabilities.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, motion/react (for animations), Lucide React (icons)
- **Backend/Database**: Firebase (Firestore, Auth)
- **Data Visualization**: Recharts
- **AI Integration**: Google Generative AI (Gemini) for dynamic evacuation route generation

## Run Locally

**Prerequisites:** Node.js

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Configuration:**
   Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key.

3. **Run the app:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

- `src/components`: UI components including maps, dashboards, and visual elements.
- `src/services`: Firebase integration and AI services.
- `src/App.tsx`: Main application entry point handling routing between views (Admin, Guest, Presentation).
