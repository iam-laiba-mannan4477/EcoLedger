# 🌍 EcoLedger – Validation & Retirement  
Blockchain-powered platform for carbon credit validation, retirement, and transparent lifecycle tracking.  

---

# 🎯 Overview  
EcoLedger ensures **trust, transparency, and traceability** in the carbon credit lifecycle by combining:  

- ✅ Validation of projects against recognized registries  
- 🔗 On-chain recording of retirement events  
- 📜 Immutable certificates of retirement stored on blockchain  

---

# 👥 User Preferences  
- Users want to browse **validated carbon projects**  
- Expect **blockchain-backed verification** for authenticity  
- Access **project details** (status, available credits, metadata)  
- Retrieve **retirement certificates** anytime  

---

# 🏗️ System Architecture  

## 🧩 Architecture Overview  
The system follows a **client–server–blockchain** model:  
- **Frontend**: React + Tailwind interface for project browsing  
- **Backend**: Flask API with MongoDB integration  
- **Blockchain**: Sepolia smart contract for validation & retirement  
- **Database**: MongoDB storing project metadata + validation records  

---

# 🎨 Frontend  
- Built with **React** + **TailwindCSS**  
- Key Components:  
  - `Hero` → Interactive landing section with registry showcase  
  - `HowItWorks` → Step-by-step carbon credit lifecycle  
  - `Dashboard` → View validated projects & retirement certificates  
- Axios for API calls  
- React Hooks for state management  

---

# ⚙️ Backend  
- Flask REST API with modular blueprints  
- CORS enabled for frontend integration  
- MongoDB (consultations, projects, leads)  
- 🔗 Blockchain utilities:  
  - `get_block_number`  
  - `get_contract`  

---

# 🔄 Data Flow  
1. User opens **EcoLedger Dashboard**  
2. Frontend → API request to Flask backend  
3. Backend queries **MongoDB** for project metadata  
4. Smart contract cross-check for validation status  
5. Validated projects + blockchain hash returned to frontend  
6. User views projects, retirement status, and certificates  

---

# 🗄️ Database Schema Design  
**Projects**  
- Name, ID, Sector, Country, Registry  
- Price, Status, Total Units, Available Units  
- Description, Images, Co-benefits  

**ValidatedProjects**  
- Project ID reference  
- Blockchain hash  

**Certificates**  
- Retirement ID  
- On-chain certificate link  

---

# 📦 External Dependencies  

## 🎨 Frontend  
- React  
- TailwindCSS  
- Axios  
- Sonner (toast notifications)  
- Lucide-react (icons)  

## ⚙️ Backend  
- Flask  
- Flask-CORS  
- Flask-PyMongo  
- Blockchain client (Sepolia testnet)  

## 🗄️ Database  
- MongoDB Atlas / Local  

---

## 🛠️ Development Tools  
- ⚡ Vite → Frontend build tool  
- 🐍 Python → Backend runtime  
- 🟢 Node.js → Frontend runtime  

---

## 🎨 Styling & Themes  
- TailwindCSS with **eco-friendly color palette** 🌱  
- Minimal, clean UI  
- Badges + Cards for project presentation  
- Certificates styled for transparency & trust  

---

## How to run the project
- Make sure node and npm is installed
- Open bash terminal to root of project (Folder that contains both frontend and backend)
- Direct to folder containing backend (cd "backend")
- "py app.py" OR "python app.py" to run backend
- Open new terminal
- Direct to folder containing main project (cd "ecoledger_-validation-retirement-on-blockchain")
- "npm run dev" to run frontend
