/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SkillsPageIndexImport } from './routes/skills-page/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SkillsPageIndexRoute = SkillsPageIndexImport.update({
  path: '/skills-page/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/skills-page/': {
      id: '/skills-page/'
      path: '/skills-page'
      fullPath: '/skills-page'
      preLoaderRoute: typeof SkillsPageIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/skills-page': typeof SkillsPageIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/skills-page': typeof SkillsPageIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/skills-page/': typeof SkillsPageIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/skills-page'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/skills-page'
  id: '__root__' | '/' | '/skills-page/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SkillsPageIndexRoute: typeof SkillsPageIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SkillsPageIndexRoute: SkillsPageIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/skills-page/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/skills-page/": {
      "filePath": "skills-page/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
