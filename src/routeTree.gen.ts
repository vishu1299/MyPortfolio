/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SkillspageIndexImport } from './routes/skills_page/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SkillspageIndexRoute = SkillspageIndexImport.update({
  path: '/skills_page/',
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
    '/skills_page/': {
      id: '/skills_page/'
      path: '/skills_page'
      fullPath: '/skills_page'
      preLoaderRoute: typeof SkillspageIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/skills_page': typeof SkillspageIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/skills_page': typeof SkillspageIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/skills_page/': typeof SkillspageIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/skills_page'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/skills_page'
  id: '__root__' | '/' | '/skills_page/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SkillspageIndexRoute: typeof SkillspageIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SkillspageIndexRoute: SkillspageIndexRoute,
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
        "/skills_page/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/skills_page/": {
      "filePath": "skills_page/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
