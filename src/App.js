import { SnackbarProvider } from "notistack";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import PrimarySearchAppBar from "./components/header";
import NotFound from "./components/notFound";
import ListAlbum from "./features/components/albumImage/listAlbum";
import Counter from "./features/components/counter";
import Todos from "./features/components/Todos/page";
import ProductFeature from "./features/products";

function App() {
  // useEffect(() => {
  //   const fetchedProduct = categoriesApi.get(3);
  //   console.log(fetchedProduct);
  // }, []);
  return (
    <SnackbarProvider maxSnack={10} autoHideDuration={1500} anchorOrigin={{ horizontal: "right", vertical: "top" }}>
      <div className="App">
        <PrimarySearchAppBar />
        <Switch>
          <Route path="/todos" component={Todos} />
          <Route path="/albums" component={ListAlbum} />
          <Route path="/products" component={ProductFeature} />
          <Route path="/" component={Counter} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </SnackbarProvider>
  );
}

export default App;
