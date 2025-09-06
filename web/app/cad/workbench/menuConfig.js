import {GiCube} from "react-icons/gi";

export default [
  {
    id: 'file',
    cssIcons: ['file'],
    actions: ['NewProject', '-', 'Save', 'StlExport', 'ImagePngExport', 'NativeFormatExport', '-', 'NativeFormatImport', 
              'NativeFormatImportAs', '-', 'CloneCurrentProject', '-', 'ReassignSketch']
  },
  {
    id: 'sketch',
    label: 'sketch',
    cssIcons: ['pencil'],
    info: 'sketch and datum creation tools',
  // Moved to the 'primitives' (Create) menu for consolidation
  actions: []
  },
  {
    id: 'craft',
    cssIcons: ['magic'],
    info: 'set of available craft operations on a solid',
    actions: ['EXTRUDE', 'CUT', 'REVOLVE', 'LOFT', 'SHELL', 'FILLET', 'DATUM_CREATE', ]
  },
  {
    id: 'primitives',
    label: 'add',
    cssIcons: ['cube'],
    info: 'set of available solid creation operations',
    actions: [
  // Sketch & Datum tools (moved from sketch menu)
  'DATUM_CREATE', 'PLANE', 'EditFace', '-',
      // Craft operations
      'EXTRUDE', 'REVOLVE', 'SWEEP', 'HOLE_TOOL', '-',
      // Primitive solids
      'BOX', 'CYLINDER', 'SPHERE', 'TORUS', '-',
      // Pattern (opens submenu) and mirror
      'menu.pattern', 'MIRROR_BODY'
    ]
  },
  {
    id: 'pattern',
    label: 'pattern',
    cssIcons: ['th'],
    info: 'choose a pattern type',
    actions: ['PATTERN_LINEAR', 'PATTERN_RADIAL']
  },
  {
    id: 'modify',
  label: 'modify',
    cssIcons: ['wrench'],
  info: 'body modification operations',
    actions: [
      // Feature modifiers
      'SHELL_TOOL', 'FILLET_TOOL', 'SCALE_BODY', 'DEFEATURE_REMOVE_FACE', '-',
      // Transforms & patterns
      'MIRROR_BODY', 'MOVE_BODY', '-', 'menu.pattern'
    ]
  },
  {
    id: 'construct',
    label: 'construct',
    cssIcons: ['puzzle-piece'],
    info: 'boolean construction operations',
    actions: [ 'BOOLEAN', 'UNION', 'SUBTRACT', 'INTERSECT' ]
  },
  {
    id: 'inspect',
    label: 'inspect',
    cssIcons: ['search'],
    info: 'inspection and analysis tools',
    actions: [ 'GET_INFO', 'WIRE_LINE' ]
  },
  {
    id: 'transform',
    label: 'transform',
    cssIcons: ['arrows'],
    info: 'transform and pattern operations',
    actions: [ 'MIRROR_BODY', 'MOVE_BODY', '-', 'menu.pattern' ]
  },
  {
    id: 'insert',
    label: 'insert',
    cssIcons: ['plus'],
    info: 'import and body management',
    actions: [ 'IMPORT_MODEL', 'DELETE_BODY' ]
  },
  {
    id: 'views',
    label: 'views',
    cssIcons: ['camera'],
    info: 'switching camera views',
    actions: ['StandardViewFront', 'StandardViewBack', 'StandardViewLeft', 'StandardViewRight', 
      'StandardViewTop', 'StandardViewBottom', 'StandardView3Way']
  },
  {
    id: 'viewModes',
    label: 'mode',
    icon: GiCube,
    info: 'view/render mode',
    actions: ['ViewMode_WIREFRAME_ON', 'ViewMode_SHADED_ON', 'ViewMode_SHADED_WITH_EDGES_ON']
  },
  {
    id: 'boolean',
    label: 'bool',
    cssIcons: ['pie-chart'],
    info: 'set of available boolean operations',
    actions: ['INTERSECTION', 'SUBTRACT', 'UNION']
  },
  {
    id: 'main',
    label: 'start',
    cssIcons: ['rocket'],
    info: 'common set of actions',
    actions: ['EXTRUDE', 'CUT', 'REVOLVE', 'LOFT', 'FILLET', '-', 
      'PLANE', 'BOX', 'SPHERE', 'CONE', 'CYLINDER', 'TORUS', '-',
      'EditFace']
  },
  {
    id: 'datum',
    label: 'datum',
    cssIcons: ['magic'],
    info: 'operations on datum',
    actions: ['PLANE', '-', 'BOX', 'SPHERE', 'CYLINDER', 'TORUS', 'CONE']
    // actions: ['DATUM_MOVE', 'DATUM_ROTATE', 'DATUM_REBASE', '-', 'PLANE_FROM_DATUM', 'BOX', 'SPHERE', 'TORUS', 
    //   'CONE', 'CYLINDER']
  },
  {
    id: 'contextual',
    label: 'contextual',
    cssIcons: ['magic'],
    info: 'contextual actions',
    actions: ['ModelDisplayOptions', 'ModelAttributesEditor']
  }
];
