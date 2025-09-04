import React from 'react';

// IconScout Unicons Solid - More modern 2.5D effect icons
import UilCubes from '@iconscout/react-unicons-solid/icons/uis-cube';
import UilLayers from '@iconscout/react-unicons-solid/icons/uis-layers-alt';
import UilBoltAlt from '@iconscout/react-unicons-solid/icons/uis-bolt-alt';
import UilPuzzlePieceAlt from '@iconscout/react-unicons-solid/icons/uis-puzzle-piece';
import UilCogAlt from '@iconscout/react-unicons-solid/icons/uis-cog';
import UilWrenchAlt from '@iconscout/react-unicons-solid/icons/uis-wrench';
import UilRulerCombined from '@iconscout/react-unicons-solid/icons/uis-ruler-combined';
import UilConstructorAlt from '@iconscout/react-unicons-solid/icons/uis-constructor';

// IconScout Unicons Monochrome - Cleaner 2D icons
import UilCubeMono from '@iconscout/react-unicons-monochrome/icons/uim-cube';
import UilLayersMono from '@iconscout/react-unicons-monochrome/icons/uim-layers-alt';
import UilBoltMono from '@iconscout/react-unicons-monochrome/icons/uim-bolt-alt';

/**
 * Enhanced IconScout workbench icons with 2D/2.5D styling options
 * These provide more modern, professional CAD workbench appearance
 */

// 2.5D Solid Style Icons (recommended for workbench tabs)
export const ModelerWorkbenchIconSolid: React.FC = (props) => (
  <UilCubes size="20" {...props} />
);

export const SheetMetalWorkbenchIconSolid: React.FC = (props) => (
  <UilLayers size="20" {...props} />
);

export const RoutingElectricalWorkbenchIconSolid: React.FC = (props) => (
  <UilBoltAlt size="20" {...props} />
);

export const AssemblyWorkbenchIconSolid: React.FC = (props) => (
  <UilPuzzlePieceAlt size="20" {...props} />
);

export const SimulationWorkbenchIconSolid: React.FC = (props) => (
  <UilCogAlt size="20" {...props} />
);

export const DraftingWorkbenchIconSolid: React.FC = (props) => (
  <UilRulerCombined size="20" {...props} />
);

export const ToolingWorkbenchIconSolid: React.FC = (props) => (
  <UilWrenchAlt size="20" {...props} />
);

export const ManufacturingWorkbenchIconSolid: React.FC = (props) => (
  <UilConstructorAlt size="20" {...props} />
);

// 2D Monochrome Style Icons (alternative clean style)
export const ModelerWorkbenchIconMono: React.FC = (props) => (
  <UilCubeMono size="20" {...props} />
);

export const SheetMetalWorkbenchIconMono: React.FC = (props) => (
  <UilLayersMono size="20" {...props} />
);

export const RoutingElectricalWorkbenchIconMono: React.FC = (props) => (
  <UilBoltMono size="20" {...props} />
);

// Aliases for easy switching between styles
export const ModelerWorkbenchIconAlt = ModelerWorkbenchIconSolid;
export const SheetMetalWorkbenchIconAlt = SheetMetalWorkbenchIconSolid;
export const RoutingElectricalWorkbenchIconAlt = RoutingElectricalWorkbenchIconSolid;
