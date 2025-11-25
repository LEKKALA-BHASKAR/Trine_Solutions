import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Trash2, Mail, CheckCircle, Circle, Building2, Calendar } from 'lucide-react';
import { toast } from 'sonner';
import AdminLayout from './AdminLayout';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api/admin`;

const AdminContacts = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchContacts();
  }, [token, navigate]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${API}/contacts`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setContacts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      if (error.response?.status === 401) {
        navigate('/admin/login');
      }
      setLoading(false);
    }
  };

  const handleMarkRead = async (contactId) => {
    try {
      await axios.put(`${API}/contacts/${contactId}/read`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setContacts(contacts.map(c => c.id === contactId ? { ...c, read: true } : c));
      if (selectedContact?.id === contactId) {
        setSelectedContact({ ...selectedContact, read: true });
      }
      toast.success('Marked as read');
    } catch (error) {
      console.error('Error marking contact as read:', error);
      toast.error('Failed to update');
    }
  };

  const handleDelete = async (contactId) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    
    try {
      await axios.delete(`${API}/contacts/${contactId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setContacts(contacts.filter(c => c.id !== contactId));
      if (selectedContact?.id === contactId) {
        setSelectedContact(null);
      }
      toast.success('Message deleted');
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast.error('Failed to delete');
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const unreadCount = contacts.filter(c => !c.read).length;

  return (
    <AdminLayout>
      <div data-testid="admin-contacts-page">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Contact Messages</h2>
            <p className="text-gray-500">
              {unreadCount > 0 ? `${unreadCount} unread message${unreadCount > 1 ? 's' : ''}` : 'All messages read'}
            </p>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-24 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
              ))}
            </div>
            <div className="lg:col-span-2">
              <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
            </div>
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl">
            <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No contact messages yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Messages List */}
            <div className="lg:col-span-1 space-y-3 max-h-[70vh] overflow-y-auto">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  onClick={() => setSelectedContact(contact)}
                  className={`bg-white dark:bg-gray-800 rounded-2xl p-4 cursor-pointer transition-all hover:shadow-lg ${
                    selectedContact?.id === contact.id
                      ? 'ring-2 ring-orange-500'
                      : ''
                  } ${!contact.read ? 'border-l-4 border-orange-500' : ''}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {contact.read ? (
                        <CheckCircle className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Circle className="w-4 h-4 text-orange-500 fill-orange-500" />
                      )}
                      <span className="font-semibold truncate">{contact.name}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{contact.email}</p>
                  <p className="text-sm text-gray-400 truncate mt-1">{contact.message}</p>
                </div>
              ))}
            </div>

            {/* Message Detail */}
            <div className="lg:col-span-2">
              {selectedContact ? (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{selectedContact.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${selectedContact.email}`} className="hover:text-orange-500">
                            {selectedContact.email}
                          </a>
                        </div>
                        {selectedContact.company && (
                          <div className="flex items-center space-x-1">
                            <Building2 className="w-4 h-4" />
                            <span>{selectedContact.company}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {!selectedContact.read && (
                        <button
                          onClick={() => handleMarkRead(selectedContact.id)}
                          className="px-4 py-2 rounded-xl bg-green-100 dark:bg-green-900/20 text-green-600 hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors text-sm font-medium"
                        >
                          Mark as Read
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(selectedContact.id)}
                        className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedContact.timestamp)}</span>
                  </div>

                  <div className="prose dark:prose-invert max-w-none">
                    <h4 className="text-lg font-semibold mb-4">Message</h4>
                    <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedContact.message}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={`mailto:${selectedContact.email}?subject=Re: Your inquiry to Trine Solutions`}
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Reply via Email</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg h-full flex items-center justify-center">
                  <div className="text-center">
                    <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Select a message to view details</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminContacts;
