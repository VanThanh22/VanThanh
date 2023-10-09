import React, { Component } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Thêm dữ liệu mẫu ở đây
      ],
      filteredData: [],
    };
  }

  handleSearch = (text) => {
    const { data } = this.state;
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({
      searchText: text,
      filteredData,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={this.handleSearch}
        />
        <FlatList
          data={this.state.filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
              <TouchableOpacity onPress={""}>
              <Image
                source={require('../assets/relative.png')}
                style={{
                    width:75,
                    height:75,
                    alignParentLeft:true,
                    marginLeft:290,
                    alignParentTop:true,
                    marginTop:1,
                    position:'absolute',
                    top:-75,
                }}
              />
            
             </TouchableOpacity>
      </View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 48,
    alignParentLeft: true,
    marginLeft: 24,
    alignParentTop: true,
    marginTop: 30,
  },


  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 3,
    paddingLeft: 15,
    marginBottom: 16,
  },
});

export default SearchComponent;


