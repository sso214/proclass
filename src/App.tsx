import { useRoutes } from 'react-router-dom';

import { ROUTE_LIST } from '@/common/routes/route-list';

function App() {
  const renderRouters = useRoutes(ROUTE_LIST);
  return renderRouters || null;
}

export default App;
