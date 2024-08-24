function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={VendingMachine} />
        <Route exact path="/chips" component={Chips} />
        <Route exact path="/soda" component={Soda} />
        <Route exact path="/candy" component={Candy} />
      </Switch>
    </Router>
  );
}
