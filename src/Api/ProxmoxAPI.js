import axios from 'axios';

// Function to login and get tokens
export const loginToProxmox = async () => {
  try {
    const response = await axios.post(
      '/api/access/ticket',
      new URLSearchParams({
        username: 'root@pam',
        password: 'Test@321',
      })
    );

    const { data } = response.data;
    const ticket = data.ticket;
    const csrfToken = data.CSRFPreventionToken;

    localStorage.setItem('proxmox_ticket', ticket);
    localStorage.setItem('proxmox_csrf_token', csrfToken);

    console.log('Login successful');
  } catch (error) {
    console.error('Login failed', error);
  }
};

// Function to get nodes
export const getNodes = async () => {
  const ticket = localStorage.getItem('proxmox_ticket');
  const csrfToken = localStorage.getItem('proxmox_csrf_token');

  try {
    const response = await axios.get('/api/nodes', {
      headers: {
        Cookie: `PVEAuthCookie=${ticket}`,
        CSRFPreventionToken: csrfToken,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch nodes', error);
  }
};

// Function to get VMs
export const getVMs = async (nodeName) => {
  const ticket = localStorage.getItem('proxmox_ticket');
  const csrfToken = localStorage.getItem('proxmox_csrf_token');

  try {
    const response = await axios.get(`/api/nodes/${nodeName}/qemu`, {
      headers: {
        Cookie: `PVEAuthCookie=${ticket}`,
        CSRFPreventionToken: csrfToken,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch VMs', error);
  }
};
