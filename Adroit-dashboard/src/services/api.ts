import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';
const DEV_TOKEN = import.meta.env.VITE_DEV_TOKEN || '';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach dev token to every request
apiClient.interceptors.request.use((config) => {
  if (DEV_TOKEN) {
    config.headers.Authorization = `Bearer ${DEV_TOKEN}`;
  }
  return config;
});

export { DEV_TOKEN, API_BASE_URL };

// Mock Fallback Data
const MOCK_PROJECTS = [
  { id: 'adroit-primary', name: 'ADROIT-GATEWAY-01', region: 'us-east-1', plan: 'Enterprise', status: 'active' },
  { id: 'adroit-runtime', name: 'RUNTIME-ENGINE-V2', region: 'eu-west-1', plan: 'Base', status: 'active' },
  { id: 'adroit-registry', name: 'IMAGE-REGISTRY-SECURE', region: 'ap-south-1', plan: 'Base', status: 'maintenance' },
];

const MOCK_DEPLOYMENTS = [
  { id: 'dep-1', status: 'success', commit: { message: 'FEAT: Implementing secure scaling protocols', sh: 'a1b2c3d4e5f6g7h8' }, createdAt: new Date(Date.now() - 3600000).toISOString() },
  { id: 'dep-2', status: 'success', commit: { message: 'FIX: Memory leak in runtime sandbox', sh: 'h8g7f6e5d4c3b2a1' }, createdAt: new Date(Date.now() - 7200000).toISOString() },
];

const MOCK_HEALTH = {
  stats: {
    cpu: { usage: '12.4' },
    memory: { usage: '42.1' },
    latency: '18',
  }
};

// Projects
export const getProjects = () => 
  apiClient.get('/projects')
    .then(res => res.data)
    .catch(() => MOCK_PROJECTS);

export const createProject = (data: any) => 
  apiClient.post('/projects', data)
    .then(res => res.data)
    .catch(() => ({ ...data, id: `proj-${Math.random().toString(36).substr(2, 9)}`, status: 'active' }));

export const uploadProject = (projectId: string, file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return apiClient.post(`/projects/${projectId}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then(res => res.data);
};

export const deleteProject = (id: string) => 
  apiClient.delete(`/projects/${id}`)
    .then(res => res.data);

// Deployments
export const getDeployments = (projectId: string) => 
  apiClient.get(`/deployments/${projectId}`)
    .then(res => res.data)
    .catch(() => MOCK_DEPLOYMENTS);

export const triggerDeployment = (projectId: string, gitToken?: string) => 
  apiClient.post(`/projects/${projectId}/deploy`, { gitToken })
    .then(res => res.data)
    .catch(() => ({ id: `dep-${Date.now()}`, status: 'pending' }));

export const revertDeployment = (projectId: string, deploymentId: string) =>
  apiClient.post(`/deployments/${projectId}/rollback/${deploymentId}`)
    .then(res => res.data);

// Logs
export const getBuildLogs = (buildId: string) => apiClient.get(`/logs/build/${buildId}`).then(res => res.data);
export const getRuntimeLogs = (projectId: string, deploymentId?: string) => 
  apiClient.get(`/logs/runtime/${projectId}${deploymentId ? `?deploymentId=${deploymentId}` : ''}`).then(res => res.data);

// Health
export const getProjectHealth = (projectId: string) => 
  apiClient.get(`/monitoring/health/${projectId}`)
    .then(res => res.data)
    .catch(() => MOCK_HEALTH);

// Databases
export const getDatabases = () => apiClient.get('/databases').then(res => res.data);
export const provisionDatabase = (data: any) => apiClient.post('/databases', data).then(res => res.data);

// DNS
export const getDomains = (projectId: string) => apiClient.get(`/dns/domains/${projectId}`).then(res => res.data);

// Environment Variables
export const getProjectVariables = (envId: string) => 
  apiClient.get(`/environments/${envId}/variables`).then(res => res.data);

export const updateProjectVariables = (envId: string, variables: any[]) => 
  apiClient.put(`/environments/${envId}/variables`, { variables }).then(res => res.data);

// Git
export const getRepositories = () =>
  apiClient.get('/git/repositories').then((res) => res.data);

export const getConnectGithubUrl = () =>
  `${API_BASE_URL}/git/github/login?token=${DEV_TOKEN}`;
