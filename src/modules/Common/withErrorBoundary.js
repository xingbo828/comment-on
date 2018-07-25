import { compose, branch, renderComponent, lifecycle, setDisplayName } from 'recompose';

const withErrorBoundary = FallBackComponent => compose(
    lifecycle({
      componentDidCatch(error, info) {
        console.error(error, info);
        this.setState({ error, info });
      }
    }),
    branch(props => props.error, renderComponent(FallBackComponent)),
    setDisplayName('WithErrorBoundary')
  );

export default withErrorBoundary;
