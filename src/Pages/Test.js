import React, { useState, useEffect } from 'react';
import { getNodes, getVMs } from '../Api/ProxmoxAPI';

function Test() {
  const [nodes, setNodes] = useState([]);
  const [vms, setVMs] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  // Fetch nodes on component mount
  useEffect(() => {
    async function fetchNodes() {
      try {
        const nodesData = await getNodes();
        setNodes(nodesData);
      } catch (error) {
        console.error('Failed to fetch nodes:', error);
      }
    }
    fetchNodes();
  }, []);

  // Fetch VMs when a node is selected
  useEffect(() => {
    if (!selectedNode) return;

    async function fetchVMs() {
      try {
        const vmsData = await getVMs(selectedNode);
        setVMs(vmsData);
      } catch (error) {
        console.error('Failed to fetch VMs:', error);
      }
    }
    fetchVMs();
  }, [selectedNode]);

  return (
    <div className="App">
      <h1>Proxmox UI</h1>

      <h2>Nodes</h2>
      <ul>
        {nodes.map((node) => (
          <li key={node.node}>
            <button onClick={() => setSelectedNode(node.node)}>{node.node}</button>
          </li>
        ))}
      </ul>

      {selectedNode && (
        <>
          <h2>VMs on {selectedNode}</h2>
          <ul>
            {vms.map((vm) => (
              <li key={vm.vmid}>
                VM ID: {vm.vmid}, Name: {vm.name}, Status: {vm.status}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Test;
