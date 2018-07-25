import { compose, branch, renderComponent, lifecycle, setDisplayName } from 'recompose';

const withErrorBoundary = FallBackComponent => compose(
    lifecycle({
      componentDidCatch(error, info) {
        if(process.env.REACT_APP_ENV === 'production') {
          console.error(error, info);
          this.setState({ error, info });
        }
      }
    }),
    branch(props => props.error, renderComponent(FallBackComponent)),
    setDisplayName('WithErrorBoundary')
  );

export default withErrorBoundary;
