import { Suspense, useCallback } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { routes } from "./routes/index";

function App() {
  const renderRoutes = useCallback((routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        const { path, exact, component } = route;
        return (
          <Route key={index} path={path} exact={exact} component={component} />
        );
      });
    }
    return <Switch>{result}</Switch>;
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>{renderRoutes(routes)}</Suspense>
    </BrowserRouter>
  );
}

export default App;
