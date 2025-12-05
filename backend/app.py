from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from datetime import datetime

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # Allow frontend calls

# MongoDB connection (Database = ZiCON_Cloud, Collection = consultations)
app.config["MONGO_URI"] = "mongodb+srv://duaarshadhasan:Hayday218@sabza.gdas4qp.mongodb.net/sabza?retryWrites=true&w=majority&appName=Cluster0"
mongo = PyMongo(app)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Consultation backend is running 🚀"})

# Endpoint to save consultation form data
@app.route("/api/consultation", methods=["POST"])
def consultation():
    try:
        data = request.get_json()

        # Extract fields
        name = data.get("name")
        email = data.get("email")
        phone = data.get("phone")
        date = data.get("date")
        time = data.get("time")
        message = data.get("message")

        # Basic validation
        if not name or not email:
            return jsonify({"success": False, "error": "Name and Email are required"}), 400

        # Document structure
        document = {
            "name": name,
            "email": email,
            "phone": phone,
            "date": date,
            "time": time,
            "message": message,
            "org": "SABZA",
            "lead": "EcoLedger",
            "source": "Consultation Form",
            "createdAt": datetime.utcnow()
        }

        # Save to MongoDB (collection: consultations)
        result = mongo.db.leads.insert_one(document)
        print(f"✅ Consultation saved! ID: {result.inserted_id}")

        return jsonify({"success": True, "message": "Consultation request submitted!"}), 201

    except Exception as e:
        print("❌ Error:", str(e))
        return jsonify({"success": False, "error": "Server error"}), 500

# Optional: Get all consultations (for admin panel later)
@app.route("/api/consultations", methods=["GET"])
def get_consultations():
    try:
        records = list(mongo.db.consultations.find({}, {"_id": 0}))
        return jsonify(records), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    print("🚀 Consultation backend running on http://localhost:5090")
    app.run(debug=True, port=5090)
