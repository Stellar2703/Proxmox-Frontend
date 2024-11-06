// src/proxmoxService.js

import axios from 'axios';

const PROXMOX_URL = 'http://localhost/api2/';

const proxmoxApi = axios.create({
  baseURL: PROXMOX_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `PVEAPIToken=API@pve!Frontend=c6c3e098-c065-4b02-9e8c-13177b6ba099` // Replace with your token
  }
});

// Example function to get nodes
export const getNodes = async () => {
  try {
    const response = await proxmoxApi.get('nodes');
    return response.data.data; // Return the nodes data
  } catch (error) {
    console.error('Error fetching nodes:', error);
    throw error;
  }
};