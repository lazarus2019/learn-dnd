export const gitlabAuthEndpoints = {
  AUTHORIZE: '/oauth/authorize',
  TOKEN: '/oauth/token',
} as const

export const gitlabEndpoints = {
  PROJECTS: '/projects',
  GET_RAW_FILE: '/projects/:projectId/repository/files/:filePath/raw',
  FILE: '/projects/:projectId/repository/files/:filePath',
} as const
