const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const getAuthToken = () => {
  try {
    return localStorage.getItem('authToken') || '';
  } catch {
    return '';
  }
};

const withAuth = (headers = {}) => {
  const token = getAuthToken();
  return token ? { ...headers, Authorization: `Bearer ${token}` } : headers;
};

export async function apiFetch(path, { method = 'GET', body, auth = false, headers = {} } = {}) {
  const url = `${API_BASE}${path}`;
  const init = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(auth ? withAuth(headers) : headers),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  };
  const res = await fetch(url, init);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.message || `Request failed: ${res.status}`;
    throw new Error(message);
  }
  return data;
}

export const loginApi = (email, password) => apiFetch('/api/auth/login', { method: 'POST', body: { email, password } });
export const getMyTasksApi = () => apiFetch('/api/tasks/mytasks', { auth: true });
export const createTaskApi = (payload) => apiFetch('/api/tasks', { method: 'POST', body: payload, auth: true });
export const updateTaskStatusApi = (id, status) => apiFetch(`/api/tasks/${id}`, { method: 'PUT', body: { status }, auth: true });


