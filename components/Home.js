import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    Button,
    useColorScheme,
    View,
  } from 'react-native';

const Home = ({ navigation }) => {
    return (
      <View>
      <Text style={styles.sectionTitle}>Home</Text>
      </View>
    );
  };
  
  export default Home;

  const styles = StyleSheet.create({
    button:{
        marginTop: 50,
        backgroundColor: "#3DB4E4"
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
        marginTop: 16,
      fontSize: 20,
      fontWeight: '600',
      textAlign: "center",
    },
    setColorRed :{
        color: '#f44336'
    },
    displaybox:{
        marginTop: 150,
        paddingHorizontal: 24,
        paddingVertical: 24,
        backgroundColor: "#D6E0E4",
    },
    input: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#DCFFDC",
        backgroundColor: "#DCFFDC",
        color: "red",
        textAlign: "center",
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });