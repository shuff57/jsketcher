import React from 'react';

// IconScout Unicons - 2D/2.5D modern icons
import UilCube from '@iconscout/react-unicons/icons/uil-cube';
import UilLayerGroup from '@iconscout/react-unicons/icons/uil-layer-group';
import UilConstructor from '@iconscout/react-unicons/icons/uil-constructor';
import UilBolt from '@iconscout/react-unicons/icons/uil-bolt';
import UilPuzzlePiece from '@iconscout/react-unicons/icons/uil-puzzle-piece';
import UilWrench from '@iconscout/react-unicons/icons/uil-wrench';
import UilRuler from '@iconscout/react-unicons/icons/uil-ruler';
import UilCog from '@iconscout/react-unicons/icons/uil-cog';

// Modern 2D/2.5D workbench icons using IconScout
// These return React components directly, compatible with the workbench system
export const ModelerWorkbenchIcon: React.FC = (props) => (
  <UilCube size="20" {...props} />
);

export const SheetMetalWorkbenchIcon: React.FC = (props) => (
  <UilLayerGroup size="20" {...props} />
);

export const RoutingElectricalWorkbenchIcon: React.FC = (props) => (
  <UilBolt size="20" {...props} />
);

export const AssemblyWorkbenchIcon: React.FC = (props) => (
  <UilPuzzlePiece size="20" {...props} />
);

export const SimulationWorkbenchIcon: React.FC = (props) => (
  <UilCog size="20" {...props} />
);

export const DraftingWorkbenchIcon: React.FC = (props) => (
  <UilRuler size="20" {...props} />
);

export const ToolingWorkbenchIcon: React.FC = (props) => (
  <UilWrench size="20" {...props} />
);

export const ManufacturingWorkbenchIcon: React.FC = (props) => (
  <UilConstructor size="20" {...props} />
);

// Fallback for unknown workbenches
export const DefaultWorkbenchIcon: React.FC = (props) => (
  <UilCube size="20" {...props} />
);
