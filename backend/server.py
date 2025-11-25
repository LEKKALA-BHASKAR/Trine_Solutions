from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class Service(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    icon: str
    capabilities: List[str] = []
    tools: List[str] = []

class CaseStudy(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    industry: str
    challenge: str
    solution: str
    results: str
    image: str
    technologies: List[str] = []

class BlogPost(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    excerpt: str
    content: str
    image: str
    date: str
    author: str
    category: str
    readTime: str
    tags: List[str] = []

class ContactForm(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactFormCreate(BaseModel):
    name: str
    email: str
    company: str
    message: str

class TeamMember(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    position: str
    bio: str
    image: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "Trine Solutions API"}

@api_router.get("/services", response_model=List[Service])
async def get_services():
    services = await db.services.find({}, {"_id": 0}).to_list(100)
    if not services:
        # Return default services
        default_services = [
            {
                "id": "1",
                "title": "Digital Transformation",
                "description": "Transform your business with cutting-edge digital solutions that drive innovation and efficiency.",
                "icon": "Zap",
                "capabilities": ["Enterprise Architecture", "Process Automation", "Digital Strategy", "Change Management"],
                "tools": ["Cloud Platforms", "AI/ML", "IoT", "Blockchain"]
            },
            {
                "id": "2",
                "title": "Cybersecurity",
                "description": "Protect your enterprise with comprehensive security solutions and risk management strategies.",
                "icon": "Shield",
                "capabilities": ["Security Assessment", "Threat Intelligence", "Incident Response", "Compliance Management"],
                "tools": ["SIEM", "Penetration Testing", "Security Operations Center", "Identity Management"]
            },
            {
                "id": "3",
                "title": "Cloud & DevOps",
                "description": "Accelerate delivery with modern cloud infrastructure and DevOps best practices.",
                "icon": "Cloud",
                "capabilities": ["Cloud Migration", "Infrastructure as Code", "CI/CD Pipelines", "Container Orchestration"],
                "tools": ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"]
            },
            {
                "id": "4",
                "title": "Data Analytics & AI",
                "description": "Unlock insights from your data with advanced analytics and artificial intelligence solutions.",
                "icon": "BarChart3",
                "capabilities": ["Data Warehousing", "Machine Learning", "Predictive Analytics", "Business Intelligence"],
                "tools": ["Python", "TensorFlow", "Tableau", "Power BI", "Snowflake"]
            },
            {
                "id": "5",
                "title": "Risk & Compliance",
                "description": "Navigate regulatory landscapes with expert risk management and compliance solutions.",
                "icon": "FileCheck",
                "capabilities": ["Regulatory Compliance", "Risk Assessment", "Audit Support", "Policy Development"],
                "tools": ["GRC Platforms", "Audit Tools", "Compliance Management Systems"]
            },
            {
                "id": "6",
                "title": "Managed IT Services",
                "description": "Focus on your business while we manage your IT infrastructure and support needs.",
                "icon": "Wrench",
                "capabilities": ["24/7 Support", "Infrastructure Management", "Service Desk", "Performance Monitoring"],
                "tools": ["Monitoring Tools", "Service Management", "Remote Support", "Asset Management"]
            }
        ]
        return default_services
    return services

@api_router.get("/case-studies", response_model=List[CaseStudy])
async def get_case_studies():
    studies = await db.case_studies.find({}, {"_id": 0}).to_list(100)
    if not studies:
        default_studies = [
            {
                "id": "1",
                "title": "Global Bank Digital Transformation",
                "industry": "Banking",
                "challenge": "Legacy systems hindering digital innovation and customer experience",
                "solution": "Implemented cloud-native architecture with microservices and AI-powered customer insights",
                "results": "40% reduction in processing time, 65% increase in customer satisfaction, $12M annual savings",
                "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
                "technologies": ["AWS", "Kubernetes", "React", "Python", "TensorFlow"]
            },
            {
                "id": "2",
                "title": "Healthcare Data Security Overhaul",
                "industry": "Healthcare",
                "challenge": "Protecting sensitive patient data while ensuring HIPAA compliance",
                "solution": "Deployed zero-trust security architecture with advanced encryption and monitoring",
                "results": "100% compliance achievement, Zero security breaches, 30% reduction in security incidents",
                "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
                "technologies": ["Azure", "Security Operations Center", "Identity Management", "Encryption"]
            },
            {
                "id": "3",
                "title": "Retail Supply Chain Optimization",
                "industry": "Retail",
                "challenge": "Inefficient inventory management leading to stockouts and excess inventory",
                "solution": "AI-powered predictive analytics and real-time inventory tracking system",
                "results": "25% reduction in inventory costs, 50% decrease in stockouts, 35% improvement in forecast accuracy",
                "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
                "technologies": ["Machine Learning", "IoT", "Real-time Analytics", "Cloud Integration"]
            }
        ]
        return default_studies
    return studies

@api_router.get("/blog", response_model=List[BlogPost])
async def get_blog_posts():
    posts = await db.blog_posts.find({}, {"_id": 0}).to_list(100)
    if not posts:
        default_posts = [
            {
                "id": "1",
                "title": "The Future of Enterprise AI: Trends Shaping 2025",
                "excerpt": "Explore how artificial intelligence is revolutionizing enterprise operations and what to expect in the coming years.",
                "content": "Artificial Intelligence continues to reshape the enterprise landscape in unprecedented ways. From predictive analytics to automated decision-making, AI is becoming the cornerstone of modern business operations. This comprehensive guide explores the key trends that will define enterprise AI in 2025 and beyond.",
                "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
                "date": "2025-01-15",
                "author": "Dr. Sarah Chen",
                "category": "AI & Innovation",
                "readTime": "8 min read",
                "tags": ["AI", "Machine Learning", "Enterprise Technology", "Innovation"]
            },
            {
                "id": "2",
                "title": "Zero Trust Security: A Comprehensive Implementation Guide",
                "excerpt": "Learn how zero trust architecture is becoming essential for modern cybersecurity strategies and how to implement it effectively.",
                "content": "As cyber threats become increasingly sophisticated, the traditional perimeter-based security model is no longer sufficient. Zero Trust Architecture represents a paradigm shift in how organizations approach security, assuming that threats can exist both inside and outside the network.",
                "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200",
                "date": "2025-01-10",
                "author": "Michael Rodriguez",
                "category": "Cybersecurity",
                "readTime": "12 min read",
                "tags": ["Cybersecurity", "Zero Trust", "Network Security", "Enterprise Security"]
            },
            {
                "id": "3",
                "title": "Cloud Migration Best Practices for Enterprise Success",
                "excerpt": "Navigate the complexities of cloud migration with our expert insights and proven strategies for 2025.",
                "content": "Cloud migration is no longer a question of 'if' but 'how' for modern enterprises. This comprehensive guide covers everything from assessment and planning to execution and optimization, ensuring your cloud journey is smooth and successful.",
                "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200",
                "date": "2025-01-05",
                "author": "Emily Watson",
                "category": "Cloud Computing",
                "readTime": "10 min read",
                "tags": ["Cloud Computing", "AWS", "Azure", "Migration Strategy"]
            },
            {
                "id": "4",
                "title": "Data Privacy Regulations: Global Compliance Strategies",
                "excerpt": "Stay compliant with evolving data privacy regulations across different jurisdictions with our expert guidance.",
                "content": "The regulatory landscape for data privacy is constantly evolving, with new laws and requirements emerging globally. Understanding and complying with regulations like GDPR, CCPA, and emerging frameworks is crucial for any organization handling personal data.",
                "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200",
                "date": "2024-12-28",
                "author": "James Park",
                "category": "Compliance",
                "readTime": "15 min read",
                "tags": ["Data Privacy", "GDPR", "Compliance", "Legal"]
            },
            {
                "id": "5",
                "title": "Kubernetes at Scale: Managing Enterprise Container Orchestration",
                "excerpt": "Master the art of scaling Kubernetes deployments for enterprise-grade applications with advanced strategies.",
                "content": "Kubernetes has become the de facto standard for container orchestration, but managing it at enterprise scale presents unique challenges. This guide provides advanced techniques for scaling, monitoring, and optimizing Kubernetes in production environments.",
                "image": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200",
                "date": "2024-12-20",
                "author": "Dr. Sarah Chen",
                "category": "Cloud Computing",
                "readTime": "14 min read",
                "tags": ["Kubernetes", "DevOps", "Container Orchestration", "Cloud Native"]
            },
            {
                "id": "6",
                "title": "The ROI of Digital Transformation: Measuring Success",
                "excerpt": "Discover how to quantify and maximize the return on investment from your digital transformation initiatives.",
                "content": "Digital transformation requires significant investment, but how do you measure its success? This article explores key metrics, frameworks, and real-world examples of organizations that have successfully quantified their digital transformation ROI.",
                "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
                "date": "2024-12-15",
                "author": "Emily Watson",
                "category": "Digital Transformation",
                "readTime": "11 min read",
                "tags": ["Digital Transformation", "ROI", "Business Strategy", "Metrics"]
            },
            {
                "id": "7",
                "title": "API Security: Protecting Your Digital Assets in 2025",
                "excerpt": "Essential strategies for securing APIs in an increasingly interconnected digital ecosystem.",
                "content": "APIs are the backbone of modern applications, but they also represent a significant security risk if not properly protected. This comprehensive guide covers the latest API security threats and how to defend against them.",
                "image": "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200",
                "date": "2024-12-10",
                "author": "Michael Rodriguez",
                "category": "Cybersecurity",
                "readTime": "9 min read",
                "tags": ["API Security", "Cybersecurity", "Web Security", "Best Practices"]
            },
            {
                "id": "8",
                "title": "Building Data-Driven Organizations: A Leadership Perspective",
                "excerpt": "Transform your organization's culture to embrace data-driven decision making at every level.",
                "content": "Becoming a truly data-driven organization requires more than just technology—it demands cultural change, leadership commitment, and the right processes. Learn how leading organizations are making this transition successfully.",
                "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
                "date": "2024-12-05",
                "author": "James Park",
                "category": "AI & Innovation",
                "readTime": "13 min read",
                "tags": ["Data Analytics", "Leadership", "Business Intelligence", "Culture"]
            }
        ]
        return default_posts
    return posts

@api_router.post("/contact", response_model=ContactForm)
async def create_contact(input: ContactFormCreate):
    contact_dict = input.model_dump()
    contact_obj = ContactForm(**contact_dict)
    
    doc = contact_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.contacts.insert_one(doc)
    return contact_obj

@api_router.get("/team", response_model=List[TeamMember])
async def get_team():
    team = await db.team_members.find({}, {"_id": 0}).to_list(100)
    if not team:
        default_team = [
            {
                "id": "1",
                "name": "John Anderson",
                "position": "Chief Executive Officer",
                "bio": "20+ years leading digital transformation initiatives for Fortune 500 companies.",
                "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
            },
            {
                "id": "2",
                "name": "Dr. Sarah Chen",
                "position": "Chief Technology Officer",
                "bio": "Former tech lead at major cloud providers, specializing in AI and distributed systems.",
                "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
            },
            {
                "id": "3",
                "name": "Michael Rodriguez",
                "position": "Head of Cybersecurity",
                "bio": "Certified ethical hacker with expertise in enterprise security architecture.",
                "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"
            },
            {
                "id": "4",
                "name": "Emily Watson",
                "position": "Director of Cloud Solutions",
                "bio": "Cloud architect with deep expertise in AWS, Azure, and GCP implementations.",
                "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400"
            }
        ]
        return default_team
    return team

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()