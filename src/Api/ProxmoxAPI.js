import axios from 'axios';

const PROXMOX_API_URL = 'http://10.10.237.155:8080/api2/json';
const API_TOKEN = 'PVEAPIToken=<API>@<pve>!<Frontend-1>=<ba9ed196-0d4b-4643-ab90-a87d50996e6e>'; // Replace with actual token

// Set up Axios instance with default headers
const api = axios.create({
  baseURL: PROXMOX_API_URL,
  headers: {
    Authorization: API_TOKEN,
  },
});

// Function to get nodes data
export const getNodes = async () => {
  try {
    const response = await api.get('/nodes');
    return response.data.data; // Proxmox returns data in the "data" field
  } catch (error) {
    console.error('Error fetching nodes:', error);
    throw error;
  }
};

// Function to get VMs on a specific node
export const getVMs = async (nodeName) => {
  try {
    const response = await api.get(`/nodes/${nodeName}/qemu`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching VMs for node ${nodeName}:`, error);
    throw error;
  }
};
