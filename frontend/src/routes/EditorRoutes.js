import {
    Outlet,
    Route
} from '@tanstack/react-router'
import { rootRoute } from './IndexRoute'
import { ArticlesToUpdate, EditorCreate, EditorIndex } from '../components/Editor'

export const editorRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/editor',
    component: () => {
        return (
            <div className="container">
                <Outlet />
            </div>
        )
    }
})

export const editorIndexRoute = new Route({
    getParentRoute: () => editorRoute,
    path: '/',
    component: EditorIndex
})

export const editorCreateRoute = new Route({
    getParentRoute: () => editorRoute,
    path: '/create',
    component: EditorCreate
})

export const editorUpdateRoute = new Route({
    getParentRoute: () => editorRoute,
    path: '/update',
    component: ArticlesToUpdate
})