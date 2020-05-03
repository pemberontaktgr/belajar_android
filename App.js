import React from 'react' ;
import {View,Text, TextInput} from 'react-native' ;
const App = () => {
  return(
    <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#FF8C00'}}>
      <View style={{flex: 1, height: 100, backgroundColor: 'black'}}></View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 100, backgroundColor: '#00FFFF'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'pink'}}>
          <Text style={{fontSize: 10, }}>Helloween </Text>
        </View>
      </View>
      <View style={{flex: 1, height: 100, backgroundColor: 'purple'}}></View>
      <View style={{flex: 1, height: 100, backgroundColor: 'green'}}>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      </View>
      
    </View>
  );
}

export default App;