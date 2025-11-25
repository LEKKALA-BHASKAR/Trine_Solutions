import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Plus, Edit2, Trash2, X, Save } from 'lucide-react';
import { toast } from 'sonner';
import AdminLayout from './AdminLayout';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api/admin`;

const AdminCaseStudies = () => {
  const navigate = useNavigate();
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingStudy, setEditingStudy] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    industry: '',
    challenge: '',
    solution: '',
    results: '',
    image: '',
    technologies: '',
  });

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchStudies();
  }, [token, navigate]);

  const fetchStudies = async () => {
    try {
      const response = await axios.get(`${API}/case-studies`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStudies(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching case studies:', error);
      if (error.response?.status === 401) {
        navigate('/admin/login');
      }
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openModal = (study = null) => {
    if (study) {
      setEditingStudy(study);
      setFormData({
        title: study.title,
        industry: study.industry,
        challenge: study.challenge,
        solution: study.solution,
        results: study.results,
        image: study.image,
        technologies: study.technologies?.join(', ') || '',
      });
    } else {
      setEditingStudy(null);
      setFormData({
        title: '',
        industry: '',
        challenge: '',
        solution: '',
        results: '',
        image: '',
        technologies: '',
      });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(t => t),
    };

    try {
      if (editingStudy) {
        await axios.put(`${API}/case-studies/${editingStudy.id}`, payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Case study updated successfully');
      } else {
        await axios.post(`${API}/case-studies`, payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Case study created successfully');
      }
      setShowModal(false);
      fetchStudies();
    } catch (error) {
      console.error('Error saving case study:', error);
      toast.error('Failed to save case study');
    }
  };

  const handleDelete = async (studyId) => {
    if (!window.confirm('Are you sure you want to delete this case study?')) return;
    
    try {
      await axios.delete(`${API}/case-studies/${studyId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Case study deleted successfully');
      fetchStudies();
    } catch (error) {
      console.error('Error deleting case study:', error);
      toast.error('Failed to delete case study');
    }
  };

  const industries = ['Banking', 'Healthcare', 'Manufacturing', 'Retail', 'Education', 'Logistics', 'Technology'];

  return (
    <AdminLayout>
      <div data-testid="admin-case-studies-page">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Case Studies</h2>
            <p className="text-gray-500">Manage your success stories</p>
          </div>
          <button
            onClick={() => openModal()}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>New Case Study</span>
          </button>
        </div>

        {/* Studies Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : studies.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl">
            <p className="text-gray-500 mb-4">No case studies yet</p>
            <button
              onClick={() => openModal()}
              className="btn-primary"
            >
              Create Your First Case Study
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((study) => (
              <div
                key={study.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-orange-500 font-semibold uppercase">{study.industry}</span>
                  <h3 className="font-bold text-lg mt-2 mb-2 line-clamp-2">{study.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{study.challenge}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies?.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => openModal(study)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Edit2 className="w-4 h-4 text-blue-500" />
                    </button>
                    <button
                      onClick={() => handleDelete(study.id)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between sticky top-0 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold">
                  {editingStudy ? 'Edit Case Study' : 'Create New Case Study'}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Industry *</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 outline-none focus:border-orange-500"
                    >
                      <option value="">Select Industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Image URL *</label>
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 outline-none focus:border-orange-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Challenge *</label>
                    <textarea
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 outline-none focus:border-orange-500 resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Solution *</label>
                    <textarea
                      name="solution"
                      value={formData.solution}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 outline-none focus:border-orange-500 resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Results *</label>
                    <textarea
                      name="results"
                      value={formData.results}
                      onChange={handleChange}
                      required
                      rows={2}
                      placeholder="e.g., 40% reduction in costs, 65% increase in efficiency"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 outline-none focus:border-orange-500 resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Technologies (comma-separated)</label>
                    <input
                      type="text"
                      name="technologies"
                      value={formData.technologies}
                      onChange={handleChange}
                      placeholder="AWS, Kubernetes, React, Python"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex items-center space-x-2"
                  >
                    <Save className="w-5 h-5" />
                    <span>{editingStudy ? 'Update' : 'Create'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminCaseStudies;
