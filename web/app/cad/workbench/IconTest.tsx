import React from 'react';
import { ModelerWorkbenchIcon, SheetMetalWorkbenchIcon, RoutingElectricalWorkbenchIcon } from './ModernWorkbenchIcons';

// Test component to verify IconScout icons are working
export function IconTest() {
  return (
    <div style={{ padding: '20px', background: '#f0f0f0', margin: '10px' }}>
      <h3>IconScout Test Icons:</h3>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <ModelerWorkbenchIcon />
          <div>Modeler</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <SheetMetalWorkbenchIcon />
          <div>Sheet Metal</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <RoutingElectricalWorkbenchIcon />
          <div>Electrical</div>
        </div>
      </div>
    </div>
  );
}
