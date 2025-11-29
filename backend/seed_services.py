import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

MONGO_URL = os.getenv('MONGO_URL')
DB_NAME = os.getenv('DB_NAME', 'trine_solutions')

if not MONGO_URL:
    print("Error: MONGO_URL environment variable not set.")
    exit(1)

# Service Images
defaultServiceImages = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
]

# Services Data
services_data = [
  {
    "id": "1",
    "title": "Software Development",
    "description": "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    "icon": "Code2",
    "capabilities": ["Custom Application Development", "Mobile App Development", "API Integration", "Legacy Modernization"],
    "tools": ["React", "Node.js", "Python", "Java", ".NET"],
    "image": defaultServiceImages[0],
    "fullDescription": "We build robust, scalable, and secure software solutions that drive business growth. Our expert developers leverage the latest technologies to deliver custom applications, mobile apps, and enterprise systems that meet your unique requirements and exceed user expectations."
  },
  {
    "id": "2",
    "title": "AI/ML",
    "description": "Harness the power of Artificial Intelligence and Machine Learning to unlock actionable insights and automate processes.",
    "icon": "Cpu",
    "capabilities": ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"],
    "tools": ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
    "image": defaultServiceImages[1],
    "fullDescription": "Transform your data into a strategic asset with our AI and Machine Learning services. We help you build intelligent systems that predict trends, automate complex tasks, and provide deep insights, enabling you to make smarter, data-driven decisions."
  },
  {
    "id": "3",
    "title": "GenAI",
    "description": "Leverage Generative AI to create content, code, and designs, revolutionizing creativity and productivity.",
    "icon": "Sparkles",
    "capabilities": ["Content Generation", "Code Assistant Implementation", "Conversational AI Agents", "Image & Design Generation"],
    "tools": ["OpenAI GPT", "Llama", "Midjourney", "LangChain"],
    "image": defaultServiceImages[2],
    "fullDescription": "Step into the future of innovation with our Generative AI solutions. We help organizations integrate GenAI to automate content creation, enhance customer interactions with intelligent agents, and accelerate development cycles, unlocking new levels of creativity and efficiency."
  },
  {
    "id": "4",
    "title": "Cloud & DevOps Solutions",
    "description": "Accelerate delivery and optimize infrastructure with our comprehensive Cloud and DevOps services.",
    "icon": "Cloud",
    "capabilities": ["Cloud Migration & Strategy", "CI/CD Pipeline Automation", "Infrastructure as Code", "Containerization & Orchestration"],
    "tools": ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins"],
    "image": defaultServiceImages[3],
    "fullDescription": "Modernize your infrastructure and streamline your development lifecycle. Our Cloud and DevOps experts assist with seamless cloud migrations, automated deployment pipelines, and scalable infrastructure management, ensuring faster time-to-market and higher reliability."
  },
  {
    "id": "5",
    "title": "Cybersecurity",
    "description": "Protect your digital assets with robust security strategies, threat detection, and compliance management.",
    "icon": "Shield",
    "capabilities": ["Vulnerability Assessments", "Penetration Testing", "Security Operations Center (SOC)", "Compliance Audits"],
    "tools": ["SIEM", "Firewalls", "Identity & Access Management (IAM)", "Encryption"],
    "image": defaultServiceImages[4],
    "fullDescription": "Safeguard your enterprise against evolving cyber threats. Our cybersecurity services provide end-to-end protection, from risk assessments and threat monitoring to incident response and compliance management, ensuring your business remains secure and resilient."
  },
  {
    "id": "6",
    "title": "ERP Solutions",
    "description": "Streamline your business operations with integrated Enterprise Resource Planning systems.",
    "icon": "Layers",
    "capabilities": ["ERP Implementation", "Module Customization", "System Integration", "Data Migration & Support"],
    "tools": ["SAP", "Oracle NetSuite", "Microsoft Dynamics 365", "Odoo"],
    "image": defaultServiceImages[5],
    "fullDescription": "Optimize your resources and improve operational efficiency with our ERP solutions. We specialize in implementing and customizing ERP systems that integrate finance, HR, supply chain, and customer relations into a unified platform for better visibility and control."
  },
  {
    "id": "7",
    "title": "Project Management",
    "description": "Ensure project success with our expert management methodologies, from planning to execution and delivery.",
    "icon": "Target",
    "capabilities": ["Agile & Waterfall Methodologies", "Resource Planning", "Risk Management", "Quality Assurance"],
    "tools": ["Jira", "Asana", "Trello", "Microsoft Project"],
    "image": defaultServiceImages[0],
    "fullDescription": "Deliver projects on time and within budget with our professional project management services. Our certified project managers utilize proven methodologies to lead teams, manage risks, and ensure quality deliverables, aligning project outcomes with your strategic business goals."
  },
  {
    "id": "8",
    "title": "Digital Transformation",
    "description": "Reimagine your business for the digital age with strategic innovation and technology adoption.",
    "icon": "Zap",
    "capabilities": ["Digital Strategy Consulting", "Process Digitization", "Customer Experience Transformation", "Legacy System Modernization"],
    "tools": ["IoT", "Big Data", "Mobile Technologies", "Cloud Computing"],
    "image": defaultServiceImages[1],
    "fullDescription": "Drive sustainable growth and stay competitive by embracing digital transformation. We guide organizations through the adoption of digital technologies to reinvent business models, enhance customer experiences, and improve operational agility."
  }
]

async def seed_services():
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]
    
    print(f"Connected to database: {DB_NAME}")
    
    # Clear existing services
    print("Clearing existing services...")
    await db.services.delete_many({})
    
    # Insert new services
    print("Inserting new services...")
    result = await db.services.insert_many(services_data)
    
    print(f"Successfully inserted {len(result.inserted_ids)} services.")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(seed_services())
