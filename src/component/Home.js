import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
 import{
  Actions,
} from 'react-native-router-flux';

class Home extends React.Component{
  state ={
    name:'',

  };
  render(){
    return(
      <View>
      <Text style={styles.title}>
      ENTER YOUR NAME :
      </Text>
      <TextInput
      style={styles.nameInput}
      placeholder='rohit'
      onChangeText ={(text) => {
        this.setState({
          name:text,
      });


    }}
  value={this.state.name}

      />
      <TouchableOpacity
      onPress={() => {
        Actions.chat({
          name:this.state.name,
        });
        //navigate to the next screen
      }
     }

      >
      <Text style={styles.buttonText}>
      Next
      </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
var styles =StyleSheet.create({
  title:{

    marginTop:20,
    marginLeft:20,
    fontSize: 20,
  },
  nameInput:
   {
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin:20,
  },
  buttonText:{

 marginLeft:20,
 fontSize: 20,
 textAlign: 'left',

  },
}
);

export default Home;
