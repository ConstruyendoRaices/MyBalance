import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Inicio</Text>
    <Button title="Ir al Formulario" onPress={() => navigation.navigate('Form')} />
  </View>
);

export default HomeScreen;