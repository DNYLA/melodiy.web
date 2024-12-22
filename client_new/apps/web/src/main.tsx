import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { QueryClientProvider } from '@tanstack/react-query';
import {
  queryClient,
  router,
  RouterIds,
  RouterProvider,
} from '@melodiy/router';
import { RootComponent } from './rootComponent';
import Artist from './routes/artist';
import Admin from './routes/admin';
// import Album from './routes/album';
import Files from './routes/files';
// import Playlist from './routes/playlist';
import Search from './routes/search';
import Setup from './routes/setup';

//Override root component or other custom routes that require ui lib data
const routerMap = {
  __root__: RootComponent,
  '/artist/$id': Artist,
  '/admin': Admin,
  // '/album/$id': Album,
  '/_authenticated/files': Files,
  // '/playlist/$id': Playlist,
  '/search': Search,
  '/setup': Setup,
} as const satisfies Partial<Record<RouterIds, () => React.ReactElement>>;

Object.entries(routerMap).forEach(([path, component]) => {
  const foundRoute = router.routesById[path as RouterIds];
  if (foundRoute == null) return;

  foundRoute.update({
    component,
  });
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
