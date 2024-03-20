import {useState} from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import ModalPassword from '../../components/modal/index.js'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"


export function Home(){
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword(){
    let password = "";
    for(let i = 0, n = charset.length; i <size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    
    setPasswordValue(password)
    setModalVisible(true);

  }



  return(
    <View style={styles.container}>
      <Image
      source={require("../../assets/horizontal-branca.png")}
      style={styles.logo}
      />
      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
      <Slider
      style={{ height: 50 }}
      minimumValue={6}
      maximumValue={20}
      thumbTintColor="black"
      maximumTrackTintColor="red"
      minimumTrackTintColor="green"
      value={size}
      onValueChange={(value) => setSize(value.toFixed(0))}
      />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttontext}>
          Criar Senha
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent='true'>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) } />
      </Modal>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "grey",
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    marginBottom: 60,
    alignItems: 'center',
    color: "white",
    fontSize: 30,
    fontWeight: "bold"

  },
  logo:{
    marginBottom: 60,
    marginTop: 40
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    borderRadius: 8,
    padding: 6,
    backgroundColor: "grey"
  },
  button:{
    backgroundColor: "#571c86",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttontext:{
    color:"white",
    fontSize: 20

  }
  

})