import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
let count = 0

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = { count : count++}
  }

  onNext = () => {
    this.props.navigation.push("Page2")
  }

  render() {
    return (
        <View>
          <Text>Page1 {this.state.count}</Text>
          <Button
              title="Press me"
              onPress={this.onNext}
          />
        </View>
    );
  }
}

export default Page1;
