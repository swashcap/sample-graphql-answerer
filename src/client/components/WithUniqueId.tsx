import * as React from 'react';
import uniqueId from 'lodash/uniqueId';

interface State {
  uniqueId: string;
}

interface Props {
  render: (uniqueId: State['uniqueId']) => React.ReactNode;
}

/**
 * Higher order component for adding a unique `id` property.
 */
export default class WithUniqueId extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      uniqueId: uniqueId(),
    };
  }

  render() {
    return this.props.render(this.state.uniqueId);
  }
}
